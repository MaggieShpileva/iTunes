import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'is1-ssl.mzstatic.com',
            },
        ],
    },
    reactStrictMode: true,

    output: 'export',
}

export default nextConfig
