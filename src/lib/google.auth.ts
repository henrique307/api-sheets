import { google } from "googleapis";
import { config } from "src/config";

export function googleAuth() {

    const jwtClient = new google.auth.JWT(
        config.google.CLIENT_EMAIL,
        undefined,
        config.google.PRIVATE_KEY?.replace(/\\n/g, '\n'),
        ["https://www.googleapis.com/auth/spreadsheets"],
        undefined,
    )

    return jwtClient;
}