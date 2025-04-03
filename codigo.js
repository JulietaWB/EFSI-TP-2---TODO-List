let tareas = [
    {
        id:0,
        tarea: "ejemplo",
        chequeado: true,
        fechaCreado: "2025-03-01",
        fechaChequeado: "2025-03-01"
    }
];
let id=0;
const agregar = () => {
    let tarea = document.getElementById("input").value;
    id++;
    tareas.push({
        id:id,
        tarea: tarea,
        chequeado: false,
        fechaCreado: new Date().toLocaleString(),
        fechaChequeado:""
    });

    mostrarEnPantalla();
}

const mostrarEnPantalla = () => {
    document.getElementById("listado").innerHTML ="";
    tareas.forEach(p => {
        document.getElementById("listado").innerHTML += `<li><input ${p.chequeado ? "checked" : "" } type="checkbox" onclick="checkear(${p.id})"> ${p.tarea} - Creado: ${p.fechaCreado} - Chequeado: ${p.fechaChequeado}</li>`;
    });
}

const checkear = (id) => {
    if(tareas[id].chequeado==true)
    {tareas[id].chequeado=false }
    else
    {tareas[id].chequeado=true}
    tareas[id].fechaChequeado= new Date().toLocaleString();
}

mostrarEnPantalla();