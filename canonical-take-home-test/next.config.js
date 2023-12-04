/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ubuntu.com',
            }
        ],
    },
}

module.exports = nextConfig
