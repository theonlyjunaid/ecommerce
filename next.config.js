/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SECRET_KEY: 'process.env.SECRET_KEY'
  },
}
