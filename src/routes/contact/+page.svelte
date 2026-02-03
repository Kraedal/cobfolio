<script lang="ts">
	import { slide } from 'svelte/transition';
	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let toast = $state<{ message: string; type: 'success' | 'error' } | null>(null);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;

		try {
			// Replace with your form submission logic
			// For example, using Formspree, Netlify Forms, or a backend API
			const response = await fetch('https://formspree.io/f/xdadjgye', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, message })
			});

			if (response.ok) {
				toast = { message: 'Thank you for your message! I\'ll get back to you soon.', type: 'success' };
				name = '';
				email = '';
				message = '';
			} else {
				toast = { message: 'Sorry, there was an error sending your message. Please try again.', type: 'error' };
			}
		} catch (error) {
			toast = { message: 'Sorry, there was an error sending your message. Please try again.', type: 'error' };
		} finally {
			isSubmitting = false;
			// Auto-dismiss toast after 5 seconds
			setTimeout(() => {
				toast = null;
			}, 5000);
		}
	}

	function dismissToast() {
		toast = null;
	}
</script>

<svelte:head>
	<title>Contact Me</title>
	<meta name="description" content="Get in touch with me" />
</svelte:head>

<div class="contact-container">
	<h1>Contact Me</h1>
	<p>Feel free to reach out if you'd like to work together or just say hello!</p>

	<form onsubmit={handleSubmit} class="contact-form">
		<div class="form-group">
			<label for="name">Name</label>
			<input
				type="text"
				id="name"
				value={name}
				oninput={(e) => name = (e.target as HTMLInputElement).value}
				required
				placeholder="Your Name"
			/>
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				value={email}
				oninput={(e) => email = (e.target as HTMLInputElement).value}
				required
				placeholder="your.email@example.com"
			/>
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea
				id="message"
				value={message}
				oninput={(e) => message = (e.target as HTMLTextAreaElement).value}
				required
				placeholder="Your message here..."
				rows="5"
			></textarea>
		</div>

		<button type="submit" disabled={isSubmitting} class="submit-btn">
			{#if isSubmitting}
				Sending...
			{:else}
				Send Message
			{/if}
		</button>
	</form>
</div>

{#if toast}
	<div class="toast-container">
		<div class="toast toast-{toast.type}" transition:slide={{ duration: 300 }}>
			<span>{toast.message}</span>
			<button onclick={dismissToast} class="toast-close" aria-label="Close notification">×</button>
		</div>
	</div>
{/if}

<style>
	.contact-container {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 1rem;
	}

	p {
		text-align: center;
		margin-bottom: 2rem;
		color: #666;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
	}

	label {
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	input,
	textarea {
		padding: 0.75rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
		transition: border-color 0.3s;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #97AED1;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		padding: 0.75rem 1.5rem;
		background-color: #97AED1;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.3s;
		align-self: flex-start;
	}

	.submit-btn:hover:not(:disabled) {
		background-color: #97AED1;
	}

	.submit-btn:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}

	.toast-container {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 1000;
		max-width: 400px;
	}

	.toast {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.25rem;
		border-radius: 8px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		font-size: 0.95rem;
		line-height: 1.4;
		animation: slideIn 0.3s ease-out;
	}

	.toast-success {
		background-color: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
    border-radius: 24px;
	}

	.toast-error {
		background-color: #000000;
		color: #fcfcf0;
		border: 1px solid #f5c6cb;
    border-radius: 24px;
	}

	.toast-close {
		background: none;
		border: none;
		font-size: 1.5rem;
		line-height: 1;
		color: inherit;
		cursor: pointer;
		padding: 0;
		margin-left: 0.75rem;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.toast-close:hover {
		opacity: 1;
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>