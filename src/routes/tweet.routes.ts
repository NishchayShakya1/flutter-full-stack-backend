import { Router } from "express";
import { getTweetController, createTweetController,  deleteTweetController, updateTweetController, getAllTweetController} from "../controllers/tweet.controller";

const tweetRouter = Router();

// Define route paths
tweetRouter.get("/:tweetId", getTweetController);
tweetRouter.get("/get/all", getAllTweetController);
tweetRouter.post("/", createTweetController);
tweetRouter.delete("/:tweetId", deleteTweetController);
tweetRouter.put("/", updateTweetController);

export default tweetRouter;
