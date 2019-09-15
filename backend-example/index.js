import { config as injectEnvriommentsConfig } from 'dotenv';

import app from './src/app';

function boostrap() {
    injectEnvriommentsConfig();
    const port = process.env.PORT;

    app.listen(port, () => {
        console.log("Application started! at port", port);
    });
}
boostrap();

export default app;