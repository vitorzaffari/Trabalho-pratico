const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");
let estado = false;

botao.addEventListener("click", function () {
  estado = !estado;

  if (estado) {
    this.textContent = 'Esconder mensagem';
    mensagem.textContent = "Este é o meu trabalho! Seja bem-vindo!";
} else {
    this.textContent = 'Clique para ver uma mensagem!';
    mensagem.textContent = "";
}
});
