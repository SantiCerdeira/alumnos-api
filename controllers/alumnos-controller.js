import * as model from '../models/alumnos-model.js'
import * as views from '../views/alumnos-views.js'

const getAlumnosController = (req, res) => {
    model.getAlumnos({deleted: true})
    // model.getAlumnos()
        .then((alumnos) => {
            res.send(views.createAlumnosPage(alumnos))
        })
}


const getAlumnoByLegajoController = (req, res) => {
    const legajo = req.params.legajo

    model.getAlumnoByLegajo(legajo)
        .then((alumno) => {
            if (alumno) {
                res.send(views.createAlumnoPage(alumno))
            } else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })
}

const getFormNuevoAlumno = (req, res) => {
    res.send(views.createNewAlumnoForm())
}

const createNuevoAlumno = (req, res) => {
    const alumno = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        anio : req.body.anio
    }

    model.createAlumno(alumno)
        .then(() => {
            res.send(views.createPage('Alumno creado', `<p>El alumno ${alumno.nombre} ${alumno.apellido} ha sido creado correctamente </p>
            <a href="/alumnos">Listado de alumnos</a>`))
        })
        .catch((err) => {
            res.send(views.createPage('Error', '<p>Hubo un error al crear el alumno</p>'))
        })
}

function getFormEditAlumno(req, res) {
    const legajo = req.params.legajo

    model.getAlumnoByLegajo(legajo)
        .then((alumno) => {
            if (alumno) {
                res.send(views.createEditAlumnoForm(alumno))
            } else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })
}

function editAlumno(req, res) {
    const legajo = req.params.legajo
    const alumno = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        anio : parseInt(req.body.anio)
    }

    model.editAlumno(legajo, alumno)
        .then(() => {
            res.send(views.createPage('Alumno editado', `<p>El alumno ${alumno.nombre} ${alumno.apellido} ha sido editado correctamente </p>
            <a href="/alumnos">Listado de alumnos</a>`))
        })
        .catch((err) => {
            res.send(views.createPage('Error', '<p>Hubo un error al editar el alumno</p>'))
        })
}

function getPageDeleteAlumno(req, res) {
    const legajo = req.params.legajo

    model.getAlumnoByLegajo(legajo)
        .then((alumno) => {
            if (alumno) {
                res.send(views.createDeleteAlumnoPage(alumno))
            } else {
                res.send(views.createPage('Alumno no encontrado', '<p>El alumno no existe</p>'))
            }
        })
}

function deleteAlumno(req, res) {
    const legajo = req.params.legajo

    model.deleteAlumno(legajo)
        .then((alumno) => {
            if(alumno){   
                res.send(views.createPage('Alumno eliminado', `<p>El alumno ${alumno.nombre} ${alumno.apellido} ha sido eliminado correctamente </p>
                <a href="/alumnos">Listado de alumnos</a>`))
            }
        })
        .catch((err) => {
            res.send(views.createPage('Error', '<p>Hubo un error al eliminar el alumno</p>'))
        })
}

export {
    getAlumnosController,
    getAlumnoByLegajoController,
    getFormNuevoAlumno,
    createNuevoAlumno,
    getFormEditAlumno,
    editAlumno,
    getPageDeleteAlumno,
    deleteAlumno
}
  