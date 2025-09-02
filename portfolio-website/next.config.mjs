/** @type {import('next').NextConfig} */

const repoName = "RyanAbdi.github.io";
const nextConfig = {
    output: "export",
    basePath: "",
    assetPrefix: "/" + repoName + "/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
