import express from "express";
import programActions from "../../server/src/modules/item/program/programActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
router.get("/api/programs", programActions.browse);
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to Wild Series !");
};

router.get("/", sayWelcome);

export default router;
