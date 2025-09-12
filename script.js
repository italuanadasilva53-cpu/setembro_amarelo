const mensagens = [
  "Você é masis forte do que imagina 💛",
  "Nunca se esqueça:sua vida importa 🌻",
  "Você não esta sozinho, estamosa juntos🤝",
"Acredite: dias melhores virão ⭐",
"sempre existe esperança 🌈"
];
document.getElementById("btnMensagem").addEventListener("click",() => {
    const aleatoria = mensagens[Math.floor(Math.random() * mensagens.lenght)];
    document.getElementById("mensagem").innerText =aleatoria;
});
