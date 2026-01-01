/** @type {import('next').NextConfig} */
const nextConfig = {
  // We removed "output: standalone" to fix the Railway conflict
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
