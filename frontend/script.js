async function calcular() {
  const moeda1 = document.getElementById("moeda1").value;
  const moeda2 = document.getElementById("moeda2").value;
  const valor1 = document.getElementById("valor1").value;

  if (!valor1) {
    alert("Digite um valor para converter!");
    return;
  }

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/converter?moeda_origem=${moeda1}&moeda_destino=${moeda2}&valor=${valor1}`
    );
    const data = await response.json();

    document.getElementById("valor2").value = data.valor_convertido;
  } catch (error) {
    console.error("Erro na conversão:", error);
    alert("Erro ao conectar com o servidor");
  }
}
