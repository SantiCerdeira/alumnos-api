import * as views from '../views/home-views.js'

const getHomeController = (req, res) => {
    let html = '<h1>Bienvenido al mini sistema</h1>'

    html += '<a href="/alumnos">Ver alumnos</a> | <a href="/alumnos/nuevo">Nuevo alumno</a> '

    res.send(views.createHomePage('Bienvenido', html))
}

export {
    getHomeController
}