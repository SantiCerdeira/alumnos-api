import express  from "express";
import * as homeController from "./controllers/home-controller.js";
import alumnosRouter from "./routes/alumnos.routes.js";
import alumnosRouterAPI from "./api/routes/alumnos-api.routes.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/api', express.json());

app.use('/', express.static('public'))

app.use('/', alumnosRouter)
app.use('/api', alumnosRouterAPI)

app.get("/", homeController.getHomeController)

app.listen(1234)
