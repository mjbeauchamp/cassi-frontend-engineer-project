import { formatDate, getStatusLabel } from './format';
import { describe, expect, test } from 'vitest';

describe('formatDate', () => {
	test("returns 'Today' if dateString argument is from today", () => {
		expect(formatDate(new Date().toISOString())).toBe('Today');
	});
	test("returns 'Yesterday' if dateString argument is from yesterday", () => {
		const yesterdayDate = Date.now() - 24 * 60 * 60 * 1000;
		expect(formatDate(new Date(yesterdayDate).toISOString())).toBe('Yesterday');
	});
	test('returns correct date if dateString argument is earlier than yesterday', () => {
		const date = new Date(2025, 0, 1);
		expect(formatDate(date.toISOString())).toBe('1/1/2025');
	});
});

describe('getStatusLabel', () => {
	test("returns 'In Progress' if status is 'in_progress", () => {
		expect(getStatusLabel('in_progress')).toBe('In Progress');
	});
	test("returns 'Open' if status is 'open", () => {
		expect(getStatusLabel('open')).toBe('Open');
	});
	test("returns 'Resolved' if status is 'resolved", () => {
		expect(getStatusLabel('resolved')).toBe('Resolved');
	});
});
