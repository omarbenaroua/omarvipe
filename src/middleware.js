import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes:["/" , "/product-details/(.*)" ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};