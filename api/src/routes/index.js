const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activitiesRouter = require('./activities.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
    res.send("Hola Proyecto!");
});

router.get("/countries/:idPais", (req, res) => {
    res.send("countries : idPais");
});

router.get("/counties/?name", (req, res) => {
    res.send("Hola Proyecto!");
});



router.post('/activities', (req, res) => {
    res.send("en el get de activities");
});

router.use('/activities', activitiesRouter);

module.exports = router;
