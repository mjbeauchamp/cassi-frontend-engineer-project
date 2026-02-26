export interface Property {
	id: string;
	address: string;
}

export interface Assignee {
	id: string;
	name: string;
}

export interface Note {
	author: string;
	text: string;
	created_at: string;
}

export interface ServiceRequest {
	id: string;
	property: Property;
	title: string;
	description: string;
	status: string;
	priority: string;
	submitted_at: string;
	updated_at: string;
	assignee: Assignee | null;
	notes: Note[];
}

export const STATUS_OPTIONS = ['open', 'in_progress', 'resolved'] as const;
