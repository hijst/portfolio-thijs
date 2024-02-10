<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import '../app.css';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot='header'>
		<AppBar gridColumns='grid-cols-3' slotDefault='place-self-center' slotTrail='place-content-end' class='w-full'>
			<svelte:fragment slot='lead'>
				<div class='space-x-0.5'>
				<a href='/blog'>blog</a>
				<a href='/about'>about</a>
				</div>
			</svelte:fragment>
			<h3 class='whitespace-nowrap'><a href='/'>Thijs Visser</a></h3>
			<svelte:fragment slot='trail'>
				<LightSwitch fillDark='fill-surface-900' fillLight='fill-surface-50'/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot='sidebarLeft'></svelte:fragment>
	<svelte:fragment slot='sidebarRight'></svelte:fragment>
	<svelte:fragment slot='pageHeader'></svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot='pageFooter'>
	</svelte:fragment>
	<svelte:fragment slot='footer'>
			<div class='w-[50%] ml-auto mr-auto'>
				<hr />
				<div class='flex justify-center space-x-5'>
				<a href='https://www.linkedin.com/in/thijs-visser-9b3721167/' target='_blank' rel='noopener noreferrer'>
					<img src='/img/iconmonstr-linkedin-3.svg' alt='LinkedIn'
							 class='w-50px h-50px dark:invert mb-5 mt-5' />
				</a>
				<a href='https://github.com/hijst' target='_blank' rel='noopener noreferrer'>
					<img src='/img/github-mark.svg' alt='GitHub'
							class='w-50px h-50px dark:invert mb-5 mt-5'
					/>
				</a>
				</div>
			</div>
	</svelte:fragment>

</AppShell>
