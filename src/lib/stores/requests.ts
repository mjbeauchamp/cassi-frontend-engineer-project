import { writable } from 'svelte/store';
import type { ServiceRequest } from '$lib/types';

export const serviceRequests = writable<ServiceRequest[]>([]);
