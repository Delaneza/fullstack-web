import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import ErrorHandler from './middlewares/ErrorHandler'
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';
import postRoutes from './routes/post.routes';
import commentRoutes from './routes/comment.routes';

function configureServer() {
    const app = addDepencies();
    return app;
}

function addDepencies() {
    let app = express()
    app = addGlobalMiddlewares(app);
    app = addApplicationRoutes(app);
    return app;
}

function addGlobalMiddlewares(app) {
    app.use(cors())
    app.use(morgan('dev'))
    // morgan(':method :url :status :res[content-length] - :response-time ms')
    app.use(bodyParser.json())
    app.use(ErrorHandler)
    return app;
}

function addApplicationRoutes(app) {
    app.use("/", indexRoutes())
    app.use("/user", userRoutes());
    app.use("/post", postRoutes());
    app.use("/comment", commentRoutes());
    return app;
}

const app = configureServer();

export default app;