export interface Property {
	id: string;
	address: string;
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
	assignee: any;
	notes: any[];
}

export const STATUS_OPTIONS = ['open', 'in_progress', 'resolved'] as const;
