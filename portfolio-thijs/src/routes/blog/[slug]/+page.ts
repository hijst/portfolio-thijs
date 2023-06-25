import type { PageLoad } from './$types';
import { marked } from 'marked';

export const load: PageLoad = async ({ fetch, params }) => {
		const slug = params['slug'];
		const res = await fetch(`/blog/${slug}.md`);
		if (res.status !== 200) {
			throw new Error();
		}

		marked.use({
			gfm: true
		})

		const post = await res.text();

		return {
			slug,
			post: marked.parse(post),
		};
};
