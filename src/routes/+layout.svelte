<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<header class="sticky top-0 z-50">
		<Header />
	</header>

	<main class="relative">
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style>
</style>
