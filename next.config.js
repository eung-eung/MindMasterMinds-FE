/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['i.pinimg.com', 'firebasestorage.googleapis.com'],
    }, env: {
        API_KEY: process.env.API,
    },
    reactStrictMode: false,
}

module.exports = nextConfig
