import app from './src/app';
import { config as injectEnvriommentsConfig } from 'dotenv';

injectEnvriommentsConfig();

const port = process.env.PORT || 8088

app.listen(port, () => {
    console.log("Application started! at port", port);
});

export default app;