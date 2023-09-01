<script>
	import { page } from '$app/stores';

	let current = '/';

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'About Us', path: '/about' }
	];
</script>

<div class="navbar">
	<div class="navbar-start" />

	<div class="navbar-center">
		<a
			class="mx-2 p-2 rounded-lg text-2xl text-secondary {current === '/' ? 'selected' : ''}"
			href="/"
			on:click={() => (current = '/')}>Home</a
		>
		<a
			class="mx-2 p-2 rounded-lg text-2xl text-secondary {current === '/about' ? 'selected' : ''}"
			href="/about"
			on:click={() => (current = '/about')}>About Us</a
		>
	</div>
	<div class="navbar-end" />
</div>

<style>
	a {
		border: 2px solid #f0f0d8;
        border-radius: 50px 255px 50px 155px/255px 40px 220px 55px;
	}

	a:hover {
		border: dashed 2px var(--secondary-color);
		transition: all 0.5s ease;
	}

	a.selected {
		border: solid 2px var(--secondary-color);
		transition: all 0.5s ease;
	}

	.navbar {
		background-color: #f0f0d8;
		color: var(--secondary-color);
		border-bottom: dashed 2px var(--secondary-color);
	}
</style>
