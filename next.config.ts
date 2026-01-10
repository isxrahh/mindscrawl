import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                // Optional: specify a port if needed (e.g., '1337') or leave as '' for default
                port: '',
                // Optional: use a wildcard for any path
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname:'images.seeklogo.com',
                pathname:'/**',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**',
            },

            {
                protocol: 'https',
                hostname: 't4.ftcdn.net',
                port: '',
                pathname: '/**',
            },

            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.worldvectorlogo.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.salesforce.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.pixartprinting.it',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'marvel-b1-cdn.bc0a.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                pathname: '/**',
            }
            // Add more hostnames as needed
        ],
    }
};

export default nextConfig;
