/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'https://wordpressapi.rubosa.com/wp-json/wp/v2/',
      'https://wordpressapi.rubosa.com/',
      'wordpressapi.rubosa.com'
    ],
  },
}


module.exports = nextConfig
