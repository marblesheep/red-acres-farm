<script>
	import tequilaHeroImage from '$lib/images/tequila-hero.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="hero min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-90">
				<div class="title">
					<h1 class="text-5xl font-bold text-primary">Welcome to</h1>
					<h1 class="text-8xl font-bold text-primary">Red Acres Farm</h1>
				</div>
				<img
					class="my-12 object-scale-down h-auto max-w-full lined thin"
					src={tequilaHeroImage}
					alt="black shiba inu dog"
				/>
				<button class="dashed thin">Maple Syrup</button>
				<button class="dashed thin">Lavender</button>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.title {
		margin-bottom: 5em;
	}
</style>
