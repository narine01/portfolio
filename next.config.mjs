/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: works on Vercel, Netlify, GitHub Pages, Cloudflare Pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
