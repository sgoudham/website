/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en"
    ]
  }
}

module.exports = nextConfig
