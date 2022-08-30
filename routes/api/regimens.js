const express = require("express");
const router = express.Router();
const Regimen = require("../../validations/regimen")

router.get("/test", (req, res) => res.json({ msg: "This is the regimen route" }));

module.exports = router;