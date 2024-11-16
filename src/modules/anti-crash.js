import Logger from "../utils/Logger.js";
import "colors";

export default async () => {
    process.on("unhandledRejection", (reason, promise) => {
        console.log(" ");
        Logger.error("Unhandled Rejection", reason.toString().red, reason);
    });

    process.on("uncaughtException", async (err, origin) => {
        await Logger.error("Uncaught Exception", `Error: ${err.toString().red}`, err);
        console.log(err);
        if (origin) {
            await Logger.info("Exception Origin", origin);
        }
    });

    process.on("uncaughtExceptionMonitor", async (err, origin) => {
        await Logger.warn("Uncaught Exception Monitor", `Error: ${err.toString().yellow}`, err);
        if (origin) {
            await Logger.info("Exception Origin", origin);
        }
    });

    process.on("warning", async (warn) => {
        await Logger.warn("Warning", `Warning: ${warn.name} ${warn.message} ${warn.stack.yellow}`);
    });
};
