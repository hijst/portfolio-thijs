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
		<div class='w-[50%] ml-auto mr-auto pt-10 pb-20'>
			<h1>{currentPost?.title}</h1>
			<p>Posted on {DateTime.fromJSDate(currentPost?.datePublished).toLocaleString(DateTime.DATE_MED)}
				• {(data.post.split(" ").length / 240).toFixed(0)} minute read</p>
			{@html data.post}
		</div>
	</div>
{:else}
	<div></div>
{/if}
