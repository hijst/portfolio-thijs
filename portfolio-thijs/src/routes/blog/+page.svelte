<script>
	import { posts } from './stores/posts.store.ts';
</script>

{#each $posts as post}
	<div>
		<h2><a href="/blog/{post.slug}" style="margin-top: 4px;">{post.title}</a></h2>
		<p>{post.datePublished}</p>
	</div>
	<hr />
{/each}
