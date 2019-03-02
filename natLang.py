from google.cloud import language

def language_analysis(text):
    client = language.Client()
    sent_analysis = document.analyze_sentiment()
    print(dir(sent_analysis))
    sentiment = sent_analysis.sentiment
    print(sentiment)
    return sentiment

example_text = "I am sad depression sad boy very sad depressed i get bullied"

sentiment = language_analysis(example_text)
print(sentiment.score, sentiment.magnitude)

