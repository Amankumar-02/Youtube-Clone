// Express

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import morgan from "morgan";

export const app = express();
export const port = process.env.PORT || 4000;

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());
// app.use(morgan("dev")); //HTTP request logger middleware for node.js


import {userRoute} from './routes/user.route.js';
import {videoRouter} from "./routes/video.routes.js";
import {commentRouter} from "./routes/comment.routes.js";
import {dashboardRouter} from "./routes/dashboard.routes.js";
import { healthRouter } from './routes/healthcheck.routes.js';
import {likeRouter} from "./routes/like.routes.js";
import { playlistRouter } from './routes/playlist.routes.js';

// pass the user route
app.use("/api/v1/users", userRoute);
app.use("/api/v1/video", videoRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/healthcheck", healthRouter);
app.use("/api/v1/likes", likeRouter);
app.use("/api/v1/playlist", playlistRouter);

