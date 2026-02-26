<script lang="ts">
	import type { ServiceRequest } from '$lib/types';
	import { formatDate, getStatusLabel } from '$lib/utils/format';
	import { goto } from '$app/navigation';
	import { serviceRequests } from '$lib/stores/requests';

	let filter = $state('all');

	let filteredRequests = $derived(
		filter === 'all'
			? $serviceRequests
			: $serviceRequests.filter((r: ServiceRequest) => r.status === filter)
	);

	function getStatusClass(status: string): string {
		if (status === 'open') return 'bg-amber-100 text-amber-800';
		if (status === 'in_progress') return 'bg-blue-100 text-blue-800';
		if (status === 'resolved') return 'bg-green-100 text-green-800';
		return 'bg-gray-100 text-gray-800';
	}
</script>

<svelte:head>
	<title>Service Requests | Cassi</title>
</svelte:head>

<div class="mx-auto max-w-6xl px-4 py-8">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold text-gray-900">Service Requests</h1>
		<!-- TODO: add sorting -->
		<div class="flex gap-2">
			<button
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'all'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'all')}
			>
				All
			</button>
			<button
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'open'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'open')}
			>
				Open
			</button>
			<button
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'in_progress'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'in_progress')}
			>
				In Progress
			</button>
			<button
				class="rounded-md px-3 py-1.5 text-sm font-medium {filter === 'resolved'
					? 'bg-gray-900 text-white'
					: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
				onclick={() => (filter = 'resolved')}
			>
				Resolved
			</button>
		</div>
	</div>

	<div class="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						Property
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						Title
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						Status
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						Priority
					</th>
					<th
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
					>
						Submitted
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each filteredRequests as request (request.id)}
					<tr
						class="cursor-pointer hover:bg-gray-50"
						tabindex="0"
						role="link"
						onclick={() => goto(`/requests/${request.id}`)}
						onkeydown={(e) => e.key === 'Enter' && goto(`/requests/${request.id}`)}
					>
						<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
							{request.property.address}
						</td>
						<td class="px-6 py-4 text-sm font-medium text-gray-900">{request.title}</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold {getStatusClass(
									request.status
								)}"
							>
								{getStatusLabel(request.status)}
							</span>
						</td>
						<td
							class="px-6 py-4 text-sm whitespace-nowrap text-gray-500"
							style="text-transform: capitalize"
						>
							{request.priority}
						</td>
						<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
							{formatDate(request.submitted_at)}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!-- TODO: handle empty states -->
</div>
