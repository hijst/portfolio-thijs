<script>
	import { posts } from './stores/posts.store';
</script>

<div class='mx-auto pt-10 pb-20 pl-4 pr-4 md:min-w-[768px] md:w-1/2'>
	<h1 class='pb-4'>All posts</h1>
	<hr/>
{#each $posts.filter(p => p.isPublished) as post}
	<div class='pt-4 pb-4'>
		<h2 class='pb-2'><a href="/blog/{post.slug}" style="margin-top: 4px;">{post.title}</a></h2>
		<p>Posted on {post.datePublished}</p>
	</div>
	<hr />
{/each}
</div>
