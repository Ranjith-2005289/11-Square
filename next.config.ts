// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add the images configuration here
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

module.exports = nextConfig;