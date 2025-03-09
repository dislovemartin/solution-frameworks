import os
import json
import asyncio
import httpx

async def test_anthropic():
    """Test direct API call to Anthropic."""
    
    api_key = "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"
    headers = {
        "x-api-key": api_key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    data = {
        "model": "claude-3-haiku-20240307",
        "max_tokens": 1000,
        "messages": [
            {"role": "user", "content": "What is OpenManus and what can you do?"}
        ]
    }
    
    async with httpx.AsyncClient() as client:
        try:
            print("Sending request to Anthropic API...")
            response = await client.post(
                "https://api.anthropic.com/v1/messages",
                headers=headers,
                json=data,
                timeout=30.0
            )
            
            if response.status_code == 200:
                result = response.json()
                content = result["content"][0]["text"]
                print("\nResponse:")
                print(content)
            else:
                print(f"Error: {response.status_code}")
                print(response.text)
                
        except Exception as e:
            print(f"Exception: {e}")

if __name__ == "__main__":
    asyncio.run(test_anthropic())