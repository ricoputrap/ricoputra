/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  images: {
    domains: [
      "images.unsplash.com", 
      "upload.wikimedia.org", 
      "cdn4.iconfinder.com",
      "styled-components.com",
      "lamclpjqcncarthsijwv.supabase.co"
    ]
  }
}

module.exports = nextConfig
