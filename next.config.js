//@eslint-ignore
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		domains: ['images.unsplash.com', 'i.ytimg.com', 'yt3.ggpht.com'],
	},
};

module.exports = {
	...nextConfig,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname),
			'@/components': path.resolve(__dirname, 'components'),
			'@/public': path.resolve(__dirname, 'public'),
			'@/data': path.resolve(__dirname, 'data'),
			'@/lib': path.resolve(__dirname, 'lib'),
			'@/utils': path.resolve(__dirname, 'utils'),
		};
		return config;
	},
};
