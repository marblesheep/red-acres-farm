<script>
	import tequilaHeroImage from '$lib/images/tequila-hero.jpg';
</script>

<svelte:head>
	<title>Red Acres Farm</title>
	<meta name="description" content="Red Acres Farm webpage" />
</svelte:head>

<section>
	<div class="hero min-h-max">
		<div class="hero-content text-center">
			<div class="max-w-90">
				<div class="title">
					<h1 class="text-5xl font-bold text-primary">Welcome to</h1>
					<h1 class="text-8xl font-bold text-primary">Red Acres Farm</h1>
				</div>
				<img
					class="my-12 h-auto max-w-full lined thin"
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
		flex: 0.2;
	}

	.title {
		margin-top: -5em;
		margin-bottom: 2em;
	}

	img {
		align-self: center;
		background: transparent;
		transition: all 0.5s ease;
		outline: none;
		/* box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2); */
		border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
		/*
		Above is shorthand for:
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
		border-bottom-right-radius: 225px 15px;
		border-bottom-left-radius:15px 255px;
		*/
	}
</style>
