import type { PageLoad } from './$types';
import { marked } from 'marked';

export const load: PageLoad = async ({ fetch, params }) => {
	const slug = params['slug'];
	const res = await fetch(`/blog/${slug}.md`);
	if (res.status !== 200) {
		throw new Error();
	}

	const renderer = new marked.Renderer();
	renderer.heading = (text, level) => {
		return `\n<h${level}>${text}</h${level}>\n<br/>\n`
	}
	renderer.paragraph = (text) => {
		return `\n<p>${text}</p>\n<br/>\n`; // Add extra whitespace after each paragraph
	};

	marked.use({
		gfm: true,
		breaks: false
	});

	const post = await res.text();

	return {
		slug,
		post: marked(post, { renderer, mangle: false, headerIds: false })
	};
};
