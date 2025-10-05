import { dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
	turbopack: {
		// explicitly set the workspace root to this project folder so Next.js doesn't infer it
		root: __dirname,
	},
};

export default nextConfig;
