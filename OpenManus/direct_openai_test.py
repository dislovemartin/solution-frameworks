import asyncio
from openai import OpenAI

async def test_openai():
    """Test direct API call to OpenAI."""
    
    api_key = "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"
    
    client = OpenAI(api_key=api_key)
    
    try:
        print("Sending request to OpenAI API...")
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant called OpenManus."},
                {"role": "user", "content": "What is OpenManus and what can you do?"}
            ],
            max_tokens=500
        )
        
        print("\nResponse:")
        print(response.choices[0].message.content)
            
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    asyncio.run(test_openai())