from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

def language_analysis(text):
    client = language.LanguageServiceClient()
    document = types.Document(content=text, type=enums.Document.Type.PLAIN_TEXT)
    sent_analysis = client.analyze_sentiment(document=document).document_sentiment
    #print(dir(sent_analysis))
    #sentiment = sent_analysis.sentiment
    #print(sentiment)
    return sent_analysis

example_text = "I am depressed"

sentiment = language_analysis(example_text)
print(sentiment.score, sentiment.magnitude)

