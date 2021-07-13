const { Router } = require('express');

const router = Router();

router.get('/activities', (req, res) => {
    res.send("en el get de activities");
});

module.exports = router;