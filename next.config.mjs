import nextra from "nextra";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
/** @type {import('next').NextConfig} */
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.ts", // Ensure this path is correct
mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
},
});

const nextConfig = {
  // You can specify other Next.js configuration options here if needed
  reactStrictMode: true,
  images: {
    domains: ["7zg3rv0nfdklwx5q.public.blob.vercel-storage.com"],
    unoptimized: true,
  },
  output: "export",
};

// Exporting the final configuration
export default withNextra(nextConfig);
