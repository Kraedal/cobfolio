import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const projects = {
	lancer: {
		title: 'Lancer',
		category: 'Web application',
		description:
			'A focused digital experience designed to make discovering and managing work feel simple.',
		body: 'Lancer is a project about making complex workflows feel clear and approachable. This page can grow into a full case study with the process, decisions, and outcomes behind the work.'
	},
	techtalk: {
		title: 'Techtalk',
		category: 'Content platform',
		description:
			'A space for sharing practical ideas, experiments, and conversations around technology.',
		body: 'Techtalk explores how technical ideas can be presented in a way that is useful, readable, and easy to revisit. This page is ready for the longer-form story behind the project.'
	},
	paravan: {
		title: 'Paravan',
		category: 'Transportation platform',
		description: 'A commissioned van-hailing app built for the transportation needs of Region Two.',
		body: 'Paravan is a van-hailing application commissioned to make local transportation in Region Two easier to access. Built with SvelteKit and Supabase, the platform connects passengers with van services through a focused, practical booking experience.'
	}
} as const;

export const load: PageLoad = ({ params }) => {
	const project = projects[params.title as keyof typeof projects];

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
