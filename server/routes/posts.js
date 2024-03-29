import express from "express";
import {
  getPosts,
  createRecipe,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js"
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth,createRecipe);
router.patch("/:id",auth, updatePost); // Uncommented updatePost function and added a route for it
router.delete("/:id",auth, deletePost);
router.patch("/:id/likePost",auth, likePost);

export default router;
