import express from "express"
import { getUserSavedPosts, getUserSavedPosts2, savePost } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/saved", getUserSavedPosts)
router.get("/saved2", getUserSavedPosts2)
router.patch("/save", savePost)


export default router;