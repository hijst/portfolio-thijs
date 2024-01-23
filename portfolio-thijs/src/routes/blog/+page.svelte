<script>
	import { posts } from './stores/posts.store';
	import { DateTime } from 'luxon';
</script>

<div class='mx-auto pt-10 pb-20 pl-4 pr-4 md:min-w-[768px] md:w-1/2'>
{#each $posts as post}
	<div class='pb-5'>
		<h2 class='pb-2'><a href="/blog/{post.slug}" style="margin-top: 4px;">{post.title}</a></h2>
		<p>Posted on {DateTime.fromJSDate(post.datePublished).toLocaleString(DateTime.DATE_MED)}</p>
	</div>
	<hr />
{/each}
</div>
