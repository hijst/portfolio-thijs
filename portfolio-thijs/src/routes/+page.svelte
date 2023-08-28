<script lang="ts">
	import { posts } from './blog/stores/posts.store';
	import type { Post } from './blog/stores/posts.store';

	let latestPost: Post;
	posts.subscribe(post => {
		  latestPost = post[0]
	})
</script>

<div class='pt-10 pb-20 ml-auto mr-auto max-w-[800px] text-6xl font-bold'>
	<div>Hi! 👋 </div>
	<div>I'm Thijs. </div>
</div>

<div class='ml-auto mr-auto pt-10 pb-20 max-w-[800px]'>

	{#if latestPost}
		<h1>Latest blog post</h1>
		<br />
		<hr/>
		<br/>
		<div class='pb-5'>
			<h2><a href="/blog/{latestPost.slug}" style="margin-top: 4px;">{latestPost.title}</a></h2>
			<br/>
			<p>Posted on {latestPost.datePublished.toLocaleDateString()}</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
		<hr />
</div>
