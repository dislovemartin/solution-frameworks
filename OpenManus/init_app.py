from app.logger import logger
from app.config import config
import os

def main():
    """Initialize and setup the OpenManus application."""
    logger.info("Starting OpenManus initialization")
    
    # Create workspace directory if it doesn't exist
    workspace_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "workspace")
    if not os.path.exists(workspace_dir):
        os.makedirs(workspace_dir)
        logger.info(f"Created workspace directory at {workspace_dir}")
    
    # Load configuration
    logger.info(f"Using LLM model: {config.llm['default'].model}")
    
    # Print API information (do NOT print actual API key)
    api_type = config.llm['default'].api_type if config.llm['default'].api_type else "standard"
    logger.info(f"API type: {api_type}")
    logger.info(f"API URL: {config.llm['default'].base_url}")
    
    print("\nOpenManus has been successfully initialized!")
    print(f"Using model: {config.llm['default'].model}")
    print("\nTo run OpenManus, use: python main.py")
    print("Note: Full functionality requires browser-use package which is currently missing")

if __name__ == "__main__":
    main()