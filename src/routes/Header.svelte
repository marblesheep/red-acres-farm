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

<!-- <div class="flex content-center justify-center">
	<ul class="menu menu-vertical lg:menu-horizontal rounded-box">
		<li>
			<a
				class="mx-2 p-2 rounded-lg text-2xl text-secondary {current === '/' ? 'selected' : ''}"
				href="/"
				on:click={() => (current = '/')}>Home</a
			>
		</li>
		<li>
			<a
				class="mx-2 p-2 rounded-lg text-2xl text-secondary {current === '/about' ? 'selected' : ''}"
				href="/about"
				on:click={() => (current = '/about')}>About Us</a
			>
		</li>
	</ul>
</div> -->

<style>
	a {
		border: 2px solid var(--background-color);
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

	/* ul {
		background: rgba(255, 255, 255, 0.42);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8.6px);
		-webkit-backdrop-filter: blur(8.6px);
		border: 1px solid rgba(255, 255, 255, 0.15);
	} */

	.navbar {
		background-color: var(--background-color);
		color: var(--secondary-color);
		border-bottom: dashed 2px var(--secondary-color);
	}
</style>
