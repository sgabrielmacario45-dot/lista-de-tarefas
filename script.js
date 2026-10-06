const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBtn.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = tarefaInput.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const tarefa = document.createElement("li");

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    textoTarefa.addEventListener("click", function() {
        tarefa.classList.toggle("concluida");
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("excluir");

    botaoExcluir.addEventListener("click", function() {
        tarefa.remove();
    });

    tarefa.appendChild(textoTarefa);
    tarefa.appendChild(botaoExcluir);

    listaTarefas.appendChild(tarefa);

    tarefaInput.value = "";
    tarefaInput.focus();
}