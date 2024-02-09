<script lang='ts'>
	import type { Post } from './blog/stores/posts.store';
	import { posts } from './blog/stores/posts.store';

	let latestPost: Post;
	posts.subscribe(posts => {
		latestPost = posts.filter(p => p.isPublished)[0];
	});
</script>

<div
	class='pt-10 pb-10 pl-5 pr-5 ml-auto mr-auto max-w-[800px] text-6xl font-bold flex flex-col items-center'>

	<div class='flex mt-10'>
		<div class='relative text-center'>
			<div>Hi! 👋</div>
			<div>I'm Thijs.</div>
			<div>
				<img
					src='https://media.licdn.com/dms/image/D4E03AQEw3P7Apsdx7Q/profile-displayphoto-shrink_800_800/0/1700569439390?e=1711584000&v=beta&t=uQWezz6M_c0MEM7_rnqF8pUzgP9HiKLcEyuZeODmCSo'
					alt='Avatar' id='avatar' class='rounded-full w-36 h-36 border-2 border-black dark:border-white mt-10 ml-auto mr-auto shadow-ava dark:shadow-avad'>
			</div>

			<p class='mt-10'>I am a software engineer working at bol.</p>
		</div>
	</div>
</div>


<div class='pl-5 pr-5 ml-auto mr-auto pt-10 pb-20 max-w-[800px]'>

	{#if latestPost}
		<h1>Latest blog post</h1>
		<br />
		<hr />
		<br />
		<div class='pb-4'>
			<h2 class='pb-2'><a href='/blog/{latestPost.slug}' style='margin-top: 4px;'>{latestPost.title}</a></h2>
			<p>Posted on { latestPost.datePublished }</p>
		</div>
	{:else}
		<p>Loading...</p>
	{/if}
	<hr />
</div>

<style>
	#avatar {
      transition: transform 0.5s ease, box-shadow 0.5s ease;
	}

	#avatar:hover {
      transform: translateY(5px);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);
	}
</style>
