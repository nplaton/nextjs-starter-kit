/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'lh5.googleusercontent.com',
        protocol: "https",
        port: ""
      }, 
      {
        hostname: 'streetviewpixels-pa.googleapis.com',
        protocol: "https",
        port: ""
      }, 
    ]
  },
};

module.exports = nextConfig;
