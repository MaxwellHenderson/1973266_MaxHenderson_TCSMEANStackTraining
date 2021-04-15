const express = require("express");
const postController = require("../controllers/postCaller");
const { hasName } = require("../validations/validators");
const router = express.Router();

router.get("/", postController.index);

router.post("/", hasName, postController.store);

module.exports = router;
