<script lang="ts">
	import type { ServiceRequest } from '$lib/types';
	import { serviceRequests } from '$lib/stores/requests';
	import ServiceRequestsTable from '$lib/components/ServiceRequestsTable.svelte';

	let filter = $state('all');

	let filteredRequests = $derived(
		filter === 'all'
			? $serviceRequests
			: $serviceRequests.filter((r: ServiceRequest) => r.status === filter)
	);
</script>

<svelte:head>
	<title>Service Requests | Cassi</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-8">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-gray-900">Service Requests</h1>
		<!-- TODO: add sorting -->
		<div role="group" aria-label="Filter by status" class="flex gap-2">
			<button
				aria-pressed={filter === 'all'}
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'all'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'all')}
			>
				All
			</button>
			<button
				aria-pressed={filter === 'open'}
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'open'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'open')}
			>
				Open
			</button>
			<button
				aria-pressed={filter === 'in_progress'}
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'in_progress'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'in_progress')}
			>
				In Progress
			</button>
			<button
				aria-pressed={filter === 'resolved'}
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'resolved'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'resolved')}
			>
				Resolved
			</button>
		</div>
	</div>

	<ServiceRequestsTable filteredRequests={filteredRequests} />
</div>
