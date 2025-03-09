import requests
import json

url = "http://localhost:8084/v1/chat/completions"
headers = {
    "accept": "application/json",
    "Content-Type": "application/json"
}
data = {
    "model": "",
    "messages": [
        {
            "role": "user",
            "content": "Can you write me a Python function to sort a list of dictionaries by a specific key?"
        }
    ],
    "max_tokens": 64,
    "nim-llm-router": {
        "policy": "task_router", 
        "routing_strategy": "manual", 
        "model": "Code Generation"
    }
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(data))
    print(f"Status code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")