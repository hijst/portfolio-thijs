import { readable } from 'svelte/store';

export interface Post {
	title: string;
	slug: string;
	isPublished: boolean;
	datePublished: Date;
}

export const posts = readable<Post[]>([
	{
		title: 'Welcome post (how I created this blog)',
		slug: 'sveltekit-blog',
		isPublished: true,
		datePublished: new Date('2023-06-25'),
	},
]);
