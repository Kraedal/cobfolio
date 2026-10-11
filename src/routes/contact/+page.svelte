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
				toast = {
					message: "Thank you for your message! I'll get back to you soon.",
					type: 'success'
				};
				name = '';
				email = '';
				message = '';
			} else {
				toast = {
					message: 'Sorry, there was an error sending your message. Please try again.',
					type: 'error'
				};
			}
		} catch {
			toast = {
				message: 'Sorry, there was an error sending your message. Please try again.',
				type: 'error'
			};
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
	<title>Contact</title>
	<meta
		name="description"
		content="Get in touch with Jacob Ong about a project, collaboration, or idea."
	/>
</svelte:head>

<section
	class="relative mx-auto -mt-20 min-h-[calc(100svh-8rem)] max-w-5xl overflow-hidden px-6 py-16 md:px-12 md:py-24"
>
	<div class="contact-block contact-block-one"></div>
	<div class="contact-block contact-block-two"></div>
	<div class="contact-block contact-block-three"></div>

	<div class="relative z-10 mx-auto max-w-2xl text-white">
		<p class="mb-4 text-sm tracking-[0.25em] text-[#595F34] uppercase">Let's talk</p>
		<h1 class="text-4xl tracking-tight md:text-6xl">Have a project in mind?</h1>
		<p class="mt-6 max-w-xl text-base leading-7 text-white/75">
			Feel free to reach out if you'd like to work together, have a question, or just want to say
			hello.
		</p>

		<form onsubmit={handleSubmit} class="contact-form mt-12">
			<div class="form-group">
				<label for="name">Name</label>
				<input
					type="text"
					id="name"
					value={name}
					oninput={(e) => (name = (e.target as HTMLInputElement).value)}
					required
					placeholder="Your name"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					oninput={(e) => (email = (e.target as HTMLInputElement).value)}
					required
					placeholder="you@example.com"
				/>
			</div>

			<div class="form-group">
				<label for="message">Message</label>
				<textarea
					id="message"
					value={message}
					oninput={(e) => (message = (e.target as HTMLTextAreaElement).value)}
					required
					placeholder="Tell me a little about your project..."
					rows="5"
				></textarea>
			</div>

			<button type="submit" disabled={isSubmitting} class="submit-btn">
				{#if isSubmitting}
					Sending...
				{:else}
					Send message <span aria-hidden="true">↗</span>
				{/if}
			</button>
		</form>
	</div>
</section>

{#if toast}
	<div class="toast-container">
		<div class="toast toast-{toast.type}" transition:slide={{ duration: 300 }}>
			<span>{toast.message}</span>
			<button onclick={dismissToast} class="toast-close" aria-label="Close notification">×</button>
		</div>
	</div>
{/if}

<style>
	.contact-block {
		position: absolute;
		z-index: 0;
		width: 8rem;
		height: 8rem;
		background: #595f34;
		opacity: 0.12;
		pointer-events: none;
		animation: pestoFloat 8s ease-in-out infinite;
	}

	.contact-block-one {
		top: 18%;
		left: 2%;
		transform: rotate(14deg);
	}

	.contact-block-two {
		top: 48%;
		right: 1%;
		width: 6rem;
		height: 6rem;
		transform: rotate(-18deg);
		animation-delay: -2s;
	}

	.contact-block-three {
		bottom: 8%;
		left: 12%;
		width: 4rem;
		height: 4rem;
		transform: rotate(32deg);
		animation-delay: -4s;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	label {
		font-size: 0.875rem;
		font-weight: 500;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.875rem 1rem;
		border: 1px solid rgb(209 198 174 / 55%);
		border-radius: 0.25rem;
		background: #595f34;
		color: white;
		font-size: 1rem;
		transition: border-color 0.3s;
	}

	input::placeholder,
	textarea::placeholder {
		color: rgb(255 255 255 / 65%);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #d1c6ae;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		padding: 0.875rem 1.5rem;
		background-color: #595f34;
		color: #d1c6ae;
		border: none;
		border-radius: 0.25rem;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.3s;
		align-self: flex-start;
	}

	.submit-btn:hover:not(:disabled) {
		background-color: #424626;
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

	@keyframes pestoFloat {
		0%,
		100% {
			margin-top: 0;
		}
		50% {
			margin-top: 1rem;
		}
	}

	@media (max-width: 767px) {
		.contact-block {
			opacity: 0.06;
			transform: scale(0.65);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.contact-block {
			animation: none;
		}
	}
</style>
