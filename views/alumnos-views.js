

function createPage(title, content) {
    let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + title + '</title></head><body>' + content + '</body></html>'

    return html
}

function createAlumnosPage(alumnos) {
    let html = '<h1>Lista de alumnos</h1>'
    html += '<ul>'
    for (let i = 0; i < alumnos.length; i++) {
        html += `<li>${alumnos[i].nombre} ${alumnos[i].apellido} <a href="/alumnos/${alumnos[i].legajo}">Ver</a> | <a href="/alumnos/${alumnos[i].legajo}/edit">Editar</a> | <a href="/alumnos/${alumnos[i].legajo}/delete">Eliminar</a> </li>`
    }
    html += '</ul>'

    return createPage('Listado de alumnos', html)
}


function createAlumnoPage(alumno) {
    let html = '<h1>Alumno #' + alumno.legajo + '</h1><p>Nombre: ' + alumno.nombre + '</p><p>Apellido: ' + alumno.apellido + '</p><p>Año de inscripción: ' + alumno.anio + '</p>'

    return createPage('Alumno #' + alumno.legajo, html)
}

function createNewAlumnoForm() {
    let html = `<h1>Nuevo alumno</h1>
    <form action="/alumnos/nuevo" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre">
        <label for="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido">
        <label for="anio">Año de inscripción:</label>
        <input type="number" name="anio" id="anio">
        <button type="submit">Crear</button>
    </form>`

    return createPage('Nuevo alumno', html)
}

function createEditAlumnoForm(alumno) {
    let html = `<h1>Editar alumno</h1>
    <form action="/alumnos/${alumno.legajo}/edit" method="POST" enctype="application/x-www-form-urlencoded">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" value="${alumno.nombre}">
        <label for="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido" value="${alumno.apellido}">
        <label for="anio">Año de inscripción:</label>
        <input type="number" name="anio" id="anio" value="${alumno.anio}">
        <button type="submit">Modificar</button>
    </form>`

    return createPage('Editar alumno', html)
}

function createDeleteAlumnoPage(alumno) {
    let html = `<h1>Eliminar alumno</h1>
    <p>Nombre y apellido: ${alumno.nombre} ${alumno.apellido}</p>
    <p>Año de inscripción: ${alumno.anio}</p>
    <p>Legajo: ${alumno.legajo}</p>

    <form action="/alumnos/${alumno.legajo}/delete" method="POST" enctype="application/x-www-form-urlencoded">
        <p>¿Está seguro que desea eliminar al alumno ${alumno.nombre} ${alumno.apellido}?</p>
        <button type="submit">Eliminar</button>
    </form>`

    return createPage('Eliminar alumno', html)
}

export {
    createPage,
    createAlumnosPage,
    createAlumnoPage,
    createNewAlumnoForm,
    createEditAlumnoForm,
    createDeleteAlumnoPage
}