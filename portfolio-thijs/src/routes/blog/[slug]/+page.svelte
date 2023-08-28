<script lang="ts">

	import { posts } from '../stores/posts.store';

	export let data: {
		slug: string;
		post: string;
	};

	let currentPost = $posts.find(post => post.slug = data.slug)


</script>
{#if currentPost.isPublished}
<div class='justify-center items-center'>
<div class='w-[50%] ml-auto mr-auto pt-10 pb-20'>
	<h1>{currentPost.title}</h1>
	{@html data.post}
</div>
</div>
{:else}
	<p>This post is not published or does not exist.</p>
{/if}
