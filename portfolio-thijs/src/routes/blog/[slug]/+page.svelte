<script lang='ts'>

	import { posts } from '../stores/posts.store';
	import { DateTime } from 'luxon';

	export let data: {
		slug: string;
		post: string;
	};

	let postMetadata = $posts.find(p => p.slug === data.slug);
</script>

{#if postMetadata?.isPublished}
	<div class='justify-center items-center'>
		<div class='md:min-w-[768px] md:w-1/2 mx-auto pt-10 pb-20 pl-4 pr-4'>
			<h1 class='pb-2'>{postMetadata?.title}</h1>
			<p>Posted on {postMetadata?.datePublished}
				• {(data.post.split(" ").length / 240).toFixed(0)} minute read</p>
			<br />
			{@html data.post}
		</div>
	</div>
{:else}
	<div></div>
{/if}
