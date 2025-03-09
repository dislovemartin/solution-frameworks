# Dify with LLM Router Integration

This project integrates Dify (an open-source LLM app development platform) with NVIDIA's LLM Router to intelligently route user prompts to the most appropriate LLM based on task classification or complexity.

## Overview

The integration allows Dify to leverage LLM Router's capability to automatically select the most appropriate model for different types of tasks:

- **LLM Router**: Analyzes user prompts and routes them to the most appropriate model
- **Dify**: Provides the UI, workflow, and RAG capabilities for building LLM applications

## Prerequisites

- Docker and Docker Compose
- NVIDIA GPU with appropriate drivers (for running LLM Router's classification models)
- API keys for the LLMs you want to use

## Setup Instructions

1. Create the necessary directories for persistent storage:

```bash
mkdir -p volumes/app/storage volumes/db/data volumes/redis/data volumes/weaviate
```

2. Edit the LLM router configuration:

Open `llm-router-config.yaml` and replace the placeholder API keys with your actual API keys for the models you want to use.

3. Start the services:

```bash
docker-compose up -d
```

4. Access Dify's UI:

Open a browser and navigate to `http://localhost`. Follow the setup wizard to configure your initial admin account.

## Configuring Dify to Use LLM Router

After setting up Dify, you'll need to configure it to use the LLM Router:

1. Go to the Dify admin panel
2. Navigate to "Model Providers" 
3. Add a new "OpenAI API Compatible" provider:
   - Name: LLM Router
   - Base URL: http://router-controller:8084
   - API Key: any value (the router doesn't actually check this)
   - Models: Add the models you want to use with the router

4. When creating your Dify apps, you can now select models from the LLM Router provider

## Using the Task Classification Router

When using the LLM Router with Dify, you'll need to configure your API requests to include the routing information. Here's how to use the task classification router:

1. In your Dify app, select the LLM Router provider
2. Set the model field to empty or any value (it will be overridden)
3. Add the following metadata to your API requests:

```json
{
  "nim-llm-router": {
    "policy": "task_router",
    "routing_strategy": "triton",
    "model": ""
  }
}
```

This will route your prompts based on task classification.

## Using the Complexity Router

For the complexity-based router, use this metadata:

```json
{
  "nim-llm-router": {
    "policy": "complexity_router",
    "routing_strategy": "triton",
    "model": ""
  }
}
```

## Testing Direct Access to LLM Router

You can test the LLM Router directly using cURL:

```bash
curl -X 'POST' \
  'http://localhost/llm-router/v1/chat/completions' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "",
    "messages": [
      {
        "role":"user",
        "content":"Can you write me a song? Use as many emojis as possible."
      }
    ],
    "max_tokens": 64,
    "stream": true,
    "nim-llm-router": {"policy": "task_router",
                       "routing_strategy": "triton",
                       "model": ""}
  }'
```

## Advanced Configuration

For more advanced configuration options, refer to:

- [Dify Documentation](https://docs.dify.ai)
- [LLM Router Documentation](https://github.com/NVIDIA-AI-Blueprints/llm-router)

## Troubleshooting

- Check the Docker logs for any startup issues: `docker-compose logs -f`
- Verify that the LLM Router's router-server is running correctly: `docker-compose logs router-server`
- Ensure API keys in the llm-router-config.yaml file are valid and have sufficient credits