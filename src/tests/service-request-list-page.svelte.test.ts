import Page from '../routes/+page.svelte';
import { serviceRequests } from '$lib/stores/requests';
import type { ServiceRequest } from '$lib/types';
import { afterEach, beforeEach, describe, expect, test } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';

const mockRequests: ServiceRequest[] = [
	{
		id: '1',
		title: 'Fix leak',
		status: 'open',
		priority: 'high',
		description: 'Water leak in kitchen',
		submitted_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		property: { id: 'p1', address: '123 Main St' },
		assignee: null,
		notes: []
	},
	{
		id: '2',
		title: 'Paint wall',
		status: 'resolved',
		priority: 'low',
		description: 'Needs repainting',
		submitted_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		property: { id: 'p1', address: '123 Main St' },
		assignee: null,
		notes: []
	},
	{
		id: '3',
		title: 'Fix HVAC',
		status: 'in_progress',
		priority: 'medium',
		description: 'HVAC not working',
		submitted_at: new Date().toISOString(),
		updated_at: new Date().toISOString(),
		property: { id: 'p2', address: '456 Oak Ave' },
		assignee: null,
		notes: []
	}
];

describe('service request list page filter buttons', () => {
	beforeEach(() => {
		serviceRequests.set(mockRequests);
	});

	afterEach(() => {
		serviceRequests.set([]);
	});

	test('shows all requests by default', async () => {
		render(Page);
		// data rows have role="link" (overrides implicit row role)
		expect(await page.getByRole('link').elements()).toHaveLength(3);
	});

	test('clicking "Open" shows only open requests', async () => {
		render(Page);
		await page.getByRole('button', { name: 'Open' }).click();
		expect(await page.getByRole('link').elements()).toHaveLength(1);
	});

	test('clicking "In Progress" shows only in-progress requests', async () => {
		render(Page);
		await page.getByRole('button', { name: 'In Progress' }).click();
		expect(await page.getByRole('link').elements()).toHaveLength(1);
	});

	test('clicking "Resolved" shows only resolved requests', async () => {
		render(Page);
		await page.getByRole('button', { name: 'Resolved' }).click();
		expect(await page.getByRole('link').elements()).toHaveLength(1);
	});

	test('clicking "All" after a filter resets to all requests', async () => {
		render(Page);
		await page.getByRole('button', { name: 'Open' }).click();
		await page.getByRole('button', { name: 'All' }).click();
		expect(await page.getByRole('link').elements()).toHaveLength(3);
	});
});
