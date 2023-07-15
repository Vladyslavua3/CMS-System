import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/api/:path*"],
});

export const config = {
    matcher: ["/protected-path-1", "/protected-path-2"],
};