# 💱 Conversor de Moedas

Um simples e funcional **conversor de moedas** desenvolvido com **HTML, CSS, JavaScript** no frontend e **FastAPI (Python)** no backend.  
O projeto consome uma **API de cotações em tempo real** para realizar as conversões entre diferentes moedas.

---

## 🚀 Demonstração

👉 [Acesse o projeto online](https://conversor-moeda-dropssouza.netlify.app/)

---

## 🧩 Tecnologias utilizadas

### Frontend

- **HTML5** — estrutura da página
- **CSS3** — estilização e responsividade
- **JavaScript** — integração com a API e manipulação de DOM

### Backend

- **Python 3**
- **FastAPI** — criação do servidor e endpoint de conversão
- **Requests** — consumo da API de cotações
- **Render** — deploy do backend

---

## ⚙️ Como funciona

1. O usuário informa o **valor** e escolhe a **moeda de origem e destino**.
2. Ao clicar em **“Converter”**, o frontend envia uma requisição `GET` para o backend FastAPI.
3. O backend consulta a **API da AwesomeAPI** para obter a cotação atual.
4. O valor convertido é retornado e exibido automaticamente na tela.

---

## 🧾 API de Cotações Utilizada

AwesomeAPI - Economia

---

## 💡 Melhorias futuras

- Adicionar mais moedas
- Exibir data/hora da cotação
- Histórico de conversões
- Interface mais responsiva com animações
