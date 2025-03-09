import asyncio
import sys
from openai import OpenAI

def main():
    """Simple chat interface that uses the OpenAI API directly."""
    print("\nWelcome to OpenManus Simple Chat!")
    print("Using model: gpt-3.5-turbo")
    print("Type 'exit' to quit\n")
    
    # Initialize OpenAI client
    api_key = "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"
    client = OpenAI(api_key=api_key)
    
    # Initialize conversation with system message
    messages = [{"role": "system", "content": "You are a helpful AI assistant called OpenManus."}]
    
    while True:
        try:
            user_input = input("You: ")
            if user_input.lower() == "exit":
                print("Goodbye!")
                break
                
            if not user_input.strip():
                continue
            
            # Add user message to conversation history
            messages.append({"role": "user", "content": user_input})
            
            print("\nProcessing...\n")
            
            # Get response from OpenAI
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=messages,
                max_tokens=500
            )
            
            # Extract and print the response
            assistant_message = response.choices[0].message.content
            print(f"OpenManus: {assistant_message}\n")
            
            # Add assistant response to conversation history
            messages.append({"role": "assistant", "content": assistant_message})
            
        except KeyboardInterrupt:
            print("\nGoodbye!")
            break
        except Exception as e:
            print(f"Error: {e}")
            
if __name__ == "__main__":
    main()