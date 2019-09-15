import { Router } from "express";

class IndexController {
    getDefault(req, res) {
        return res.send('Hello World!');
    }
}

export default IndexController;
