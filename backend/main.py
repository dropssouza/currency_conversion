from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Permitir acesso do frontend (JS no navegador)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # se quiser pode restringir p/ "http://127.0.0.1:5500"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/converter")
def converter(moeda_origem: str, moeda_destino: str, valor: float):
    link = f"https://economia.awesomeapi.com.br/last/{moeda_origem}-{moeda_destino}"
    requisicao = requests.get(link)
    cotacao = requisicao.json()[f"{moeda_origem}{moeda_destino}"]["bid"]
    cotacao = round(float(cotacao), 3)

    valor_resultante = round(valor * cotacao, 2)

    return {
        "moeda_origem": moeda_origem,
        "moeda_destino": moeda_destino,
        "cotacao": cotacao,
        "valor_origem": valor,
        "valor_convertido": valor_resultante
    }