/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "api.myspacebank.com"]
	},
}

module.exports = nextConfig