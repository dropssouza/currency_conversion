const botao = document.getElementById("botao_converter");

botao.addEventListener("touchstart", () => {
  botao.style.transform = "scale(1.1)";
});

botao.addEventListener("touchend", () => {
  botao.style.transform = "scale(1)";
});

const API_URL = "https://currency-conversion-srm9.onrender.com";
//const API_URL = "http://127.0.0.1:8000";

async function calcular() {
  const moeda1 = document.getElementById("moeda1").value;
  const moeda2 = document.getElementById("moeda2").value;
  const valor1 = document.getElementById("valor1").value;

  if (!valor1) {
    alert("Digite um valor para converter!");
    return;
  }

  const botao = document.getElementById("botao_converter");

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  botao.disabled = true;
  botao.style.opacity = "0.6";
  botao.style.visibility = "hidden";
  botao.parentElement.appendChild(spinner);

  try {
    const response = await fetch(
      `${API_URL}/converter?moeda_origem=${moeda1}&moeda_destino=${moeda2}&valor=${valor1}`
    );
    const data = await response.json();

    document.getElementById("valor2").value = data.valor_convertido;
  } catch (error) {
    console.error("Erro na conversão:", error);
    alert("Erro ao conectar com o servidor");
  }

  spinner.remove();
  botao.disabled = false;
  botao.style.opacity = "1";
  botao.style.visibility = "visible";
}
