/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['i.pinimg.com'],
    }, env: {
        API_KEY: process.env.API,
    },
}

module.exports = nextConfig
