let tasks = [
    { id: 1, title: "Kontrollera inventarielistan för IT-utrustning", done: false, priority: "High" },
    { id: 2, title: "Uppdatera veckans supportstatistik", done: false },
    { id: 3, title: "Granska nya användarkonton före aktivering", done: false, priority: "Medium" },
    { id: 4, title: "Kontrollera att mötesrummens skärmar fungerar", done: true, priority: "High" },
    { id: 5, title: "Sammanställa felrapporter från helpdesk", done: false, priority: "Low" },
    { id: 6, title: "Arkivera avslutade serviceärenden", done: true, priority: "Medium" },
    { id: 7, title: "Verifiera backup-loggen från natten", done: false, priority: "Medium" },
    { id: 8, title: "Uppdatera kontaktlistan för externa leverantörer", done: false, priority: "High" },
    { id: 9, title: "Kontrollera licenser som går ut denna månad", done: false, priority: "Low" },
    { id: 10, title: "Förbereda sammanfattning till veckomötet", done: false, priority: "Medium" }
];


const uppgifter = function render() {
    const container = document.getElementById("task-holder");

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        container.innerHTML += `
        <li class="task-list"> 
        <h2 class="task-text">Titel:  ${task.title}</h2>
        <h3 class="task-text">Status:  ${task.done ? "Klar" : "Inte klar"}</h3> 
        </li>
    `;
    }
}
uppgifter();

const antalTasksKlara = function render() {
    const container = document.getElementById("task-tasks-donetasks");

    let antalKlara = 0;

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        if (task.done === true) {
            antalKlara++;
        }

        container.innerHTML = `
        <h3> Antal tasks: ${tasks.length}</h3>
        <h3> Antal klara: ${antalKlara}</h3>
        `;
    }
}
antalTasksKlara();


