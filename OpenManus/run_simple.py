import os
import sys
from app.logger import logger
from app.config import config
from app.llm import LLM
from app.schema import Message

async def chat_with_llm():
    """Simple chat interface that uses the LLM directly."""
    print("\nWelcome to OpenManus Simple Chat!")
    print(f"Using model: {config.llm['default'].model}")
    print("Type 'exit' to quit\n")
    
    llm = LLM()
    messages = [Message.system_message("You are a helpful AI assistant called OpenManus.")]
    
    while True:
        try:
            user_input = input("You: ")
            if user_input.lower() == "exit":
                print("Goodbye!")
                break
                
            if not user_input.strip():
                continue
            
            # Add user message to conversation history
            messages.append(Message.user_message(user_input))
            
            print("\nProcessing...\n")
            response = await llm.ask(messages, stream=True)
            
            # Add assistant response to conversation history
            messages.append(Message.assistant_message(response))
            print()
            
        except KeyboardInterrupt:
            print("\nGoodbye!")
            break
        except Exception as e:
            print(f"Error: {e}")
            
if __name__ == "__main__":
    import asyncio
    asyncio.run(chat_with_llm())