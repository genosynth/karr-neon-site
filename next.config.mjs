const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath:
    process.env.NODE_ENV === "production"
      ? "/karr-neon-site"
      : "",

  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/karr-neon-site/"
      : "",
};

export default nextConfig;