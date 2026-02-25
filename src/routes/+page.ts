import type { PageLoad } from './$types';
import data from '$lib/data/service-requests.json';

export const load: PageLoad = () => {
	return {
		requests: data.service_requests
	};
};
