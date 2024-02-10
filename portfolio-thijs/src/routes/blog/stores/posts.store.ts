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
		datePublished: formatDate('2024-03-01')
	},
	{
		title: 'Welcome post (how I created this blog)',
		slug: 'welcome-post',
		isPublished: true,
		datePublished: formatDate('2024-02-09')
	}
]);

function formatDate(date: string) {
	return DateTime.fromFormat(date, 'yyyy-MM-dd').setLocale('en-gb').toLocaleString(DateTime.DATE_MED);
}
