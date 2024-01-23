<script>
	import { posts } from './stores/posts.store';
	import { DateTime } from 'luxon';
</script>

<div class='ml-auto mr-auto pt-10 pb-20 max-w-[800px]'>
{#each $posts as post}
	<div class='pb-5'>
		<h2><a href="/blog/{post.slug}" style="margin-top: 4px;">{post.title}</a></h2>
		<p>Posted on {DateTime.fromJSDate(post.datePublished).toLocaleString(DateTime.DATE_MED)}</p>
	</div>
	<hr />
{/each}
</div>
