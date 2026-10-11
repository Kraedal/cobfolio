import type { Action } from 'svelte/action';

const visibilityObserverOptions: IntersectionObserverInit = {
	rootMargin: '-12% 0px -12% 0px',
	threshold: 0
};

export const revealOnScroll: Action<HTMLElement> = (node) => {
	const observer = new IntersectionObserver(([entry]) => {
		node.classList.toggle('is-visible', entry.isIntersecting);
	}, visibilityObserverOptions);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

const slideOnScroll = (node: HTMLElement, direction: 'left' | 'right') => {
	node.dataset.slideDirection = direction;

	const observer = new IntersectionObserver(([entry]) => {
		node.classList.toggle('is-visible', entry.isIntersecting);
	}, visibilityObserverOptions);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

export const slideInFromLeft: Action<HTMLElement> = (node) => slideOnScroll(node, 'left');

export const slideInFromRight: Action<HTMLElement> = (node) => slideOnScroll(node, 'right');

export const flyInAndFadeOnScroll: Action<HTMLElement> = (node) => {
	requestAnimationFrame(() => node.classList.add('is-visible'));

	let frame = 0;
	const update = () => {
		frame = 0;
		const progress = Math.min(window.scrollY / (window.innerHeight * 0.7), 1);
		node.style.opacity = String(1 - progress);
		node.style.transform = `translateY(${-progress * 3}rem)`;
	};
	const handleScroll = () => {
		if (!frame) frame = requestAnimationFrame(update);
	};

	window.addEventListener('scroll', handleScroll, { passive: true });

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
			if (frame) cancelAnimationFrame(frame);
		}
	};
};
