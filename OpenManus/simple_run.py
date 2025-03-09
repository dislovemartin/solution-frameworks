from app.logger import logger
from app.config import config

def main():
    logger.info("Starting OpenManus in simplified mode")
    print(f"LLM Config: {config.llm['default'].model}")
    print("OpenManus initialized in simplified mode")
    print("Note: This is a simplified version without browser_use dependency")

if __name__ == "__main__":
    main()