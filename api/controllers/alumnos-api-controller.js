import * as model from '../../models/alumnos-model.js'


function getAlumnos(req, res) {

    const filter = req.query

  model.getAlumnos(filter)
    .then((alumnos) => {
        if(alumnos.length === 0){
            res.status(404).json({
                error: {message: 'No se encontraron alumnos.'}
                })
        } else {
            res.status(200).json(alumnos)
        }
    })
}

function createAlumno(req, res) {
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: parseInt(req.body.anio),
    }

    model.createAlumno(alumno)
        .then((alumno) => {
            res.status(201).json(alumno)
        })
}

function getAlumnoByLegajo(req, res) {
    model.getAlumnoByLegajo(req.params.legajo)
        .then((alumno) => {
            if(alumno){
                res.status(200).json(alumno)
            } else {
                res.status(404).json({
                   error: {message: 'Alumno no encontrado'}
                })
            }
        })
}

function replaceAlumno(req, res) {

    const legajo = req.params.legajo
    const alumno = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        anio: parseInt(req.body.anio),
        legajo: parseInt(req.params.legajo),
    }

    model.replaceAlumno(legajo, alumno)
        .then((alumno) => {
            if(alumno){
                res.status(200).json(alumno)
            } else {
                res.status(404).json({
                    error: {message: 'Alumno no encontrado'}
                    })
            }
        })
}

const deleteAlumno = (req, res) => {
    const legajo = req.params.legajo

    model.deleteAlumno(legajo)
        .then((alumno) => {
            if(alumno){
                res.status(200).json(alumno)
            } else {
                res.status(404).json({
                    error: {message: 'Alumno no encontrado'}
                    })
            }
        })
}

function updateAlumno(req, res) {
    const legajo = req.params.legajo
    const alumno = {}

    if(req.body.nombre) alumno.nombre = req.body.nombre
    if(req.body.apellido) alumno.apellido = req.body.apellido
    if(req.body.anio) alumno.anio = req.body.anio
    alumno.deleted === true ? delete alumno.deleted : null;

    model.editAlumno(legajo, alumno)
        .then((alumno) => {
            if(alumno){
                res.status(200).json(alumno)
            } else {
                res.status(404).json({
                    error: {message: 'Alumno no encontrado'}
                    })
            }
        })
}


export {
    getAlumnos,
    createAlumno,
    getAlumnoByLegajo,
    replaceAlumno,
    deleteAlumno,
    updateAlumno
}