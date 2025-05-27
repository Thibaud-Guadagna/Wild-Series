import express from "express";
import programActions from "../../server/src/modules/item/program/programActions";


const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import categoryAction from "./modules/item/program/category/categoryAction";

router.get("/api/categories", categoryAction.browse)
router.get("/api/categories/:id", categoryAction.read)


import sayActions from "./modules/item/say/sayActions";

router.get("/", sayActions.sayWelcome);


export default router;
