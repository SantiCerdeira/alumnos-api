import { Router } from "express";
import * as controller from "../controllers/alumnos-api-controller.js"; 

const router = Router();



router.get('/alumnos', controller.getAlumnos)
router.post('/alumnos', controller.createAlumno)

router.get('/alumnos/:legajo', controller.getAlumnoByLegajo)
router.put('/alumnos/:legajo', controller.replaceAlumno)
router.patch('/alumnos/:legajo', controller.updateAlumno)
router.delete('/alumnos/:legajo', controller.deleteAlumno)



export default router;