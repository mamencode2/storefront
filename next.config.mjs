/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true
    },
    transpilePackages: ['antd-mobile']
};

export default nextConfig;
//module.exports = nextConfig;
