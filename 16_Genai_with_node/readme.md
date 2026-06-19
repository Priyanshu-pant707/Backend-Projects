# what is generative ai ?
- generative ai is a type of artificial intelligence that can create new content such as text, images,audio,video, and code  etc.

- it does not just analyze data -> it generates new things that look like they were created by humans .

- generative ai is powered by large model like (gpt,gemini) trained on huge datasets



# what is sdk ?
- sdk is software development kit , 
- library/toolkit which make interaction easy with api 


# role and instructions :
- giving role and instructions to the prompt

# what is token  ?
- a token is the smallest unit of text that a language model processes.
- llm like gpt do not read text as complete words or sentences . Instead , they break text into smaller pieces called tokens.


# why are tokens important  ?
- cost (billing) -> most ai apis charge base on the number of token processed
- context window -> every model a maximum token limit.
                 -  if the token limit exceeds :
                     -  the request may fail.
                     -  older messages may be removed.
                     - the context may be truncated.
- performance -> more token means  :
                             -  more computation
                             - higher latency
                             - higher cost


# why should developer count tokens ?
- problem :
    -  high cost
    -  slow responses
    - context limit issues


# how can you reduce token usage :
-  shorter prompts
- summarization
-  RAG
-  chunking
- removing unnecessary chat history


