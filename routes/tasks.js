const express = require("express");
const tasks = require("../controllers/tasks");

const router = express.Router();

router.get("/", tasks.getAllTasks);
router.post("/", tasks.createTask);
router.get("/:id", tasks.getTask);
router.patch("/:id", tasks.updateTask);
router.delete("/:id", tasks.deleteTask);

module.exports = router;
