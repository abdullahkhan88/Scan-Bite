export const cookieOptions = (dayMs) => ({
    httpOnly: true,
    secure: process.env.ENVIRONMENT !== "DEV",
    sameSite: process.env.ENVIRONMENT === "DEV" ? "lax" : "none",
    path: "/",
    maxAge:dayMs
});