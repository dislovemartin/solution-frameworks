import asyncio
import sys
from app.logger import logger
from app.config import config
from app.llm import LLM
from app.schema import Message

async def simple_query():
    """Send a single query to the LLM and get a response."""
    
    # Check if we have a query from command line args
    if len(sys.argv) < 2:
        print("Usage: python simple_query.py 'your question here'")
        return
        
    query = " ".join(sys.argv[1:])
    
    print(f"\nQuerying OpenManus ({config.llm['default'].model})")
    print(f"Query: {query}")
    print("\nProcessing...\n")
    
    try:
        llm = LLM()
        messages = [
            Message.system_message("You are a helpful AI assistant called OpenManus."),
            Message.user_message(query)
        ]
        
        response = await llm.ask(messages, stream=True)
        print("\nDone!")
        
    except Exception as e:
        print(f"\nError: {e}")

if __name__ == "__main__":
    asyncio.run(simple_query())