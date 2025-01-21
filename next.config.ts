import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  
  // assetPrefix: isProd ? '/josh-meier.github.io/out/' : '',
  // basePath: isProd ? '/josh-meier.github.io/out' : '',

  
  assetPrefix: isProd ? '/josh-meier.github.io/' : '',
  basePath: isProd ? '/josh-meier.github.io' : '',


  // assetPrefix: '/out',
  // basePath: '/out',
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
