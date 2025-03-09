import sys
from openai import OpenAI

def ask_question(question):
    """Ask a question to OpenManus and get a response."""
    
    # Initialize OpenAI client
    api_key = "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"
    client = OpenAI(api_key=api_key)
    
    try:
        # Set up messages
        messages = [
            {"role": "system", "content": "You are a helpful AI assistant called OpenManus."},
            {"role": "user", "content": question}
        ]
        
        # Get response from OpenAI
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages,
            max_tokens=500
        )
        
        # Return the response
        return response.choices[0].message.content
        
    except Exception as e:
        return f"Error: {e}"

if __name__ == "__main__":
    # Get question from command line arguments
    if len(sys.argv) < 2:
        print("Usage: python ask_question.py 'your question here'")
        sys.exit(1)
        
    question = " ".join(sys.argv[1:])
    
    print(f"\nQuestion: {question}\n")
    print("Processing...\n")
    
    answer = ask_question(question)
    print(f"OpenManus: {answer}")