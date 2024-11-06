/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    BASE_URL:process.env.BASE_URL,
    CAPTCHA_SECRET:process.env.CAPTCHA_SECRET
  }
}

module.exports = nextConfig
