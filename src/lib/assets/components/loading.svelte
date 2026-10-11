<script>
	import logo from '$lib/assets/logo.svg';
</script>

<div class="loading-container">
	<img src={logo} alt="Logo" class="loading-logo" />
</div>

<style>
	.loading-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: #595f34;
		color: white;
		z-index: 10;
	}

	.loading-logo {
		width: 100px;
		height: auto;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.2;
		}
	}
</style>
