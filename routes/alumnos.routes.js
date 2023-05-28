import express from "express";
import * as alumnosController from "../controllers/alumnos-controller.js";

const router = express.Router() 

router.get("/alumnos", alumnosController.getAlumnosController)
router.get('/alumnos/nuevo', alumnosController.getFormNuevoAlumno)
router.post('/alumnos/nuevo', alumnosController.createNuevoAlumno)
router.get('/alumnos/:legajo', alumnosController.getAlumnoByLegajoController)
router.get('/alumnos/:legajo/edit', alumnosController.getFormEditAlumno)
router.post('/alumnos/:legajo/edit', alumnosController.editAlumno)
router.get('/alumnos/:legajo/delete', alumnosController.getPageDeleteAlumno)
router.post('/alumnos/:legajo/delete', alumnosController.deleteAlumno)



export default router