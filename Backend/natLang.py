from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import sys 

def language_analysis(text):
    client = language.LanguageServiceClient()
    document = types.Document(content=text, type=enums.Document.Type.PLAIN_TEXT)
    sent_analysis = client.analyze_sentiment(document=document).document_sentiment
    #print(dir(sent_analysis))
    #sentiment = sent_analysis.sentiment
    #print(sentiment)
    return sent_analysis

example_text = "Suicide is an unfortunate thing"
ex = "" 

print(sys)
print(sys.argv[1])
example_text1 = example_text.split(" ")
sent = 0
average = 0
for i in example_text1:
    sent = language_analysis(i)
    if sent.score < 0.5:
        ex += i + " "
print(ex)
senti = language_analysis(ex.lower())
sentiment = language_analysis(example_text)
print(sentiment.score)
print(senti.score)
