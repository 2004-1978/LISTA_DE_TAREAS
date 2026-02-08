const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

function addTask() {
    const text = input.value.trim();
    
    if (text === "") {
        // Feedback visual si está vacío
        input.style.border = "1px solid #ff4d4d";
        setTimeout(() => input.style.border = "1px solid #48cae4", 500);
        return;
    }

    const li = document.createElement('li');
    // Al hacer clic en el texto, se marca como completada
    li.onclick = function(e) {
        if(e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') {
            this.classList.toggle('completed');
        }
    };

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete-btn" onclick="removeTask(event, this)">
            <i class="fas fa-times"></i>
        </button>
    `;

    list.appendChild(li);
    input.value = "";
}

function removeTask(event, btn) {
    event.stopPropagation(); // Evita que se tache al querer borrar
    const item = btn.parentElement;
    item.style.transform = "scale(0.8) translateX(100px)";
    item.style.opacity = "0";
    setTimeout(() => item.remove(), 300);
}

// Enter key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});