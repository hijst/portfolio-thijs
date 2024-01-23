<script lang='ts'>

	import { posts } from '../stores/posts.store';
	import { DateTime } from 'luxon';

	export let data: {
		slug: string;
		post: string;
	};

	let currentPost = $posts.find(post => post.slug = data.slug);

</script>
{#if currentPost?.isPublished}
	<div class='justify-center items-center'>
		<div class='md:min-w-[768px] md:w-1/2 mx-auto pt-10 pb-20 pl-4 pr-4'>
			<h1 class='pb-2'>{currentPost?.title}</h1>
			<p>Posted on {DateTime.fromJSDate(currentPost?.datePublished).toLocaleString(DateTime.DATE_MED)}
				• {(data.post.split(" ").length / 240).toFixed(0)} minute read</p>
			{@html data.post}
		</div>
	</div>
{:else}
	<div></div>
{/if}
