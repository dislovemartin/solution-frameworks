# Using Qwen 2.5 7B with LLM Router

This guide explains how to use the Qwen 2.5 7B model with the LLM Router.

## Setup

1. Pull and run the Qwen 2.5 7B model using Docker:

```bash
# Login to NVIDIA Container Registry
docker login nvcr.io -u '$oauthtoken' -p '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'

# Run the Qwen 2.5 7B model
export NGC_API_KEY='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'
export LOCAL_NIM_CACHE=~/.cache/nim
mkdir -p "$LOCAL_NIM_CACHE"
docker run -d --rm \
    --gpus all \
    --shm-size=16GB \
    -e NGC_API_KEY \
    -v "$LOCAL_NIM_CACHE:/opt/nim/.cache" \
    -u $(id -u) \
    -p 8000:8000 \
    nvcr.io/nim/qwen/qwen-2.5-7b-instruct:latest
```

2. The Qwen model has been added to the router configuration in `llm-router/src/router-controller/config.yaml`.

## Testing

### Direct API Call

You can test the Qwen model directly using:

```bash
python test_qwen_direct.py
```

### Task Router

You can test the Qwen model with the task router using:

```bash
python test_qwen_routing.py
```

### Complexity Router

You can test the Qwen model with the complexity router using:

```bash
python test_qwen_complexity.py
```

## API Usage

### Manual Routing to Qwen

```json
{
  "model": "",
  "messages": [
    {
      "role": "user",
      "content": "Your prompt here"
    }
  ],
  "max_tokens": 64,
  "nim-llm-router": {
    "policy": "task_router",
    "routing_strategy": "manual",
    "model": "Qwen"
  }
}
```

### Automatic Routing

The router will automatically select the appropriate model based on the prompt:

```json
{
  "model": "",
  "messages": [
    {
      "role": "user",
      "content": "Your prompt here"
    }
  ],
  "max_tokens": 64,
  "nim-llm-router": {
    "policy": "task_router",
    "routing_strategy": "triton",
    "model": ""
  }
}
``` 