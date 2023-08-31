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
			class="mx-2 p-2 rounded-lg text-3xl text-secondary {current === '/' ? 'selected' : ''}"
			href="/"
			on:click={() => (current = '/')}>Home</a
		>
		<a
			class="mx-2 p-2 rounded-lg text-3xl text-secondary {current === '/about' ? 'selected' : ''}"
			href="/about"
			on:click={() => (current = '/about')}>About Us</a
		>
	</div>
	<div class="navbar-end" />
</div>

<style>
	.navbar {
		position: absolute;
		top: 0;
	}

	a {
		border: 2px solid #f0f0d8;
	}

	.selected {
		border: solid 2px #8c1c04;
        transition: all 0.5s ease;
	}

	a:hover {
		border: dashed 2px #8c1c04;
        transition: all 0.5s ease;
	}
</style>
