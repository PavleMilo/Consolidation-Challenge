let tasks = [
    { id: 1, title: "Kontrollera inventarielistan för IT-utrustning", done: false, priority: "High" },
    { id: 2, title: "Uppdatera veckans supportstatistik", done: false, priority: "Low" },
    { id: 3, title: "Granska nya användarkonton före aktivering", done: false, priority: "Medium" },
    { id: 4, title: "Kontrollera att mötesrummens skärmar fungerar", done: true, priority: "High" },
    { id: 5, title: "Sammanställa felrapporter från helpdesk", done: false, priority: "Low" },
    { id: 6, title: "Arkivera avslutade serviceärenden", done: true, priority: "Medium" },
    { id: 7, title: "Verifiera backup-loggen från natten", done: false, priority: "Medium" },
    { id: 8, title: "Uppdatera kontaktlistan för externa leverantörer", done: false, priority: "High" },
    { id: 9, title: "Kontrollera licenser som går ut denna månad", done: false, priority: "Low" },
    { id: 10, title: "Förbereda sammanfattning till veckomötet", done: false, priority: "Medium" }
];


function renderTasks(list) {
    const container = document.getElementById("task-holder");
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const task = list[i];
        container.innerHTML += `
    <li class="task-list"> 
        <h2 class="task-text">Titel: ${task.title}</h2>
        <div class="task-info">
            <h3 class="task-text">Priority: ${task.priority ?? "Ingen prioritet"}</h3>
            <h3 class="task-text">Status: ${task.done ? "Done" : "Not done"}</h3>
            <h4>id: ${task.id}</h4>
        </div>
    </li>
`;
    }
}

function renderCount(list) {
    const container = document.getElementById("task-tasks-donetasks");

    let antalKlara = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].done === true) {
            antalKlara++;
        }
    }

    container.innerHTML = `
        <h3>Antal tasks: ${list.length}</h3>
        <h3>Antal klara: ${antalKlara}</h3>
    `;
}


function filterAndRender(priority) {
    let filtered;

    if (priority === "All") {
        filtered = tasks;
    } else {
        filtered = tasks.filter(task => task.priority === priority);
    }

    renderTasks(filtered);
    renderCount(filtered);
}

const buttons = document.querySelectorAll(".mNbutton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        filterAndRender(button.id);
    });
});

filterAndRender("All");

function sök() {
    const container = document.getElementById("task-sök");
    const sökord = container.value.toLowerCase();

    const filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(sökord) ||
        task.id.toString().includes(sökord)
    );

    renderTasks(filtered);
    renderCount(filtered);
}

document.getElementById("task-sök").addEventListener("input", sök);