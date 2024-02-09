import { type Readable, readable } from 'svelte/store';
import { DateTime } from 'luxon';

export interface Post {
	title: string;
	slug: string;
	isPublished: boolean;
	datePublished: string;
}

export const posts: Readable<Post[]> = readable<Post[]>([
	{
		title: 'AI vs crypto',
		slug: 'ai-vs-crypto',
		isPublished: false,
		datePublished: formatDate(new Date('2024-03-01'))
	},
	{
		title: 'Welcome post (how I created this blog)',
		slug: 'welcome-post',
		isPublished: true,
		datePublished: formatDate(new Date('2024-02-09'))
	}
]);

function formatDate(date: Date) {
	return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_HUGE);
}
