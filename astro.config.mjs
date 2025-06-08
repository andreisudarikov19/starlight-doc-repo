// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';	

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs'
		}),
	],
	vite: {
		resolve: {
			preserveSymlinks: true
		}
	}
});
