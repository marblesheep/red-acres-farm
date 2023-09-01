<script>
	import farmPicture from '$lib/images/farm-picture.jpg';
	import farmPicture2 from '$lib/images/farm-picture2.jpg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="hero min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-90">
				<p class="my-12 text-2xl text-primary">We are a small independent farm in Vermont.</p>
				<div class="carousel carousel-center rounded-box">
					<div class="carousel-item">
						<img class="h-auto max-w-full mx-0.5" src={farmPicture} alt="farm" />
					</div>
					<div class="carousel-item">
						<img class="h-auto max-w-full mx-0.5" src={farmPicture2} alt="farm" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	img {
		height: 50vh;
		width: auto;
	}
</style>
