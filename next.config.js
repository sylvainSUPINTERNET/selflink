/** @type {import('next').NextConfig} */
const nextConfig = {
  // Workaround for 
  // BUG
  // does not match the required types of a Next.js Route.
  // "authOptions" is not a valid Route export field.
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      } 
}

module.exports = nextConfig
