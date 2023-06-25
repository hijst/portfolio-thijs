<script lang="ts">
	export let data: {
		slug: string;
		post: string;
	};
</script>

<div class='justify-center items-center'>
<div class='w-[50%]'>
	{@html data.post}
</div>
</div>
