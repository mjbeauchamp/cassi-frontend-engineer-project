import type { LayoutLoad } from './$types';
import data from '$lib/data/service-requests.json';

export const load: LayoutLoad = () => {
	return {
		requests: data.service_requests
	};
};
