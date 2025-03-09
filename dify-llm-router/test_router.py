#!/usr/bin/env python3
"""
Test script for LLM Router integration with Dify
"""

from openai import OpenAI
import os
import sys

# Use any string as the API key - the router doesn't actually check this
API_KEY = "dummy-api-key"

# Prompt to test
PROMPT = "Help me write a python function to load data from a CSV file into a pandas dataframe"

client = OpenAI(
    api_key=API_KEY,
    max_retries=0,
    base_url="http://localhost/llm-router/v1/"
)

messages = [
    {
        "role": "user",
        "content": PROMPT
    }
]

# Configure the LLM Router to use task-based classification
extra_body = {
    "nim-llm-router": {
        "policy": "task_router",
        "routing_strategy": "triton"
    }
}

def handle_non_streaming():
    """Handle non-streaming completion with task classification"""
    print("\n=== Testing LLM Router with Task Classification ===")
    
    try:
        chat_completion = client.chat.completions.with_raw_response.create(
            messages=messages,
            model="",
            extra_body=extra_body
        )
    except Exception as e:
        print("\nError Response:")
        if hasattr(e, 'response'):
            print(f"Status Code: {e.response.status_code}")
            print(f"Error Message: {e.response.text}")
        else:
            print(f"Error: {str(e)}")
        sys.exit(1)

    # Print classifier info
    chosen_classifier = chat_completion.headers.get('X-Chosen-Classifier')
    print(f"Chosen Classifier: {chosen_classifier}")

    # Parse the response
    completion = chat_completion.parse()
    
    # Print the completion
    print("\nCompletion:")
    print(completion.choices[0].message.content)

    # Print usage information
    usage = completion.usage
    print("\nToken Usage:")
    print(f"  Prompt tokens: {usage.prompt_tokens}")
    print(f"  Completion tokens: {usage.completion_tokens}")
    print(f"  Total tokens: {usage.total_tokens}")

def handle_complexity_router():
    """Test the complexity-based router"""
    print("\n=== Testing LLM Router with Complexity Classification ===")
    
    # Update extra_body for complexity router
    complexity_extra_body = {
        "nim-llm-router": {
            "policy": "complexity_router",
            "routing_strategy": "triton"
        }
    }
    
    try:
        chat_completion = client.chat.completions.with_raw_response.create(
            messages=messages,
            model="",
            extra_body=complexity_extra_body
        )
    except Exception as e:
        print("\nError Response:")
        if hasattr(e, 'response'):
            print(f"Status Code: {e.response.status_code}")
            print(f"Error Message: {e.response.text}")
        else:
            print(f"Error: {str(e)}")
        sys.exit(1)

    # Print classifier info
    chosen_classifier = chat_completion.headers.get('X-Chosen-Classifier')
    print(f"Chosen Classifier: {chosen_classifier}")

    # Parse the response
    completion = chat_completion.parse()
    
    # Print the completion
    print("\nCompletion:")
    print(completion.choices[0].message.content)

    # Print usage information
    usage = completion.usage
    print("\nToken Usage:")
    print(f"  Prompt tokens: {usage.prompt_tokens}")
    print(f"  Completion tokens: {usage.completion_tokens}")
    print(f"  Total tokens: {usage.total_tokens}")

def main():
    """Run the LLM Router tests"""
    print(f"Testing LLM Router with prompt: \"{PROMPT}\"")
    
    try:
        # Test with task classification
        handle_non_streaming()
        
        # Test with complexity classification
        handle_complexity_router()
        
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    main()