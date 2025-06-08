// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';	

// https://astro.build/config
export default defineConfig({
	integrations: [
		markdoc(),
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Concepts',
					autogenerate: { directory: 'concepts' },
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'How-to',
					autogenerate: { directory: 'howto' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Setup',
					autogenerate: { directory: 'setup' },
				},
				{
					label: 'User Intrface (UI)',
					autogenerate: { directory: 'ui' },
				},
			],
		}),
	],
});
