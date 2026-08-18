/** @type {import('next').NextConfig} */
const nextConfig = {
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
images: {
  unoptimized: true, // As per your project's existing configuration
},
// Consolidate ranking signals on the apex domain: 301 www -> non-www so it
// matches every canonical tag (https://consultbuildca.com) and the sitemap.
async redirects() {
  return [
    {
      source: "/:path*",
      has: [{ type: "host", value: "www.consultbuildca.com" }],
      destination: "https://consultbuildca.com/:path*",
      permanent: true,
    },
  ]
},
// Baseline security headers for the deployed site (defense-in-depth).
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ]
},
}

// Import the maintained PWA package
import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = {
dest: "public",
register: true,
skipWaiting: true,
disable: process.env.NODE_ENV === "development",
runtimeCaching: [
  {
    urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'google-fonts',
      expiration: {
        maxEntries: 4,
        maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
      }
    }
  },
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/i,
    handler: 'CacheFirst',
    options: {
      cacheName: 'image-cache',
      expiration: {
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }
    }
  },
  // You can add more caching strategies here if needed
]
};

// Wrap the Next.js config with the PWA config
const finalConfig = withPWA(pwaConfig)(nextConfig);

export default finalConfig;
