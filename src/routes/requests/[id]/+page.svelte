<script lang="ts">
	import { serviceRequests } from '$lib/stores/requests';
	import { formatDate, getStatusLabel } from '$lib/utils/format';
	import { STATUS_OPTIONS } from '$lib/types';

	// Getting id param from page.ts load() function
	let { data } = $props();

	let request = $derived($serviceRequests.find((r) => r.id === data.id));

	function getStatusClass(status: string): string {
		if (status === 'open') return 'bg-amber-100 text-amber-800';
		if (status === 'in_progress') return 'bg-blue-100 text-blue-800';
		if (status === 'resolved') return 'bg-green-100 text-green-800';
		return 'bg-gray-100 text-gray-800';
	}

	function updateStatus(newStatus: string) {
		serviceRequests.update((requests) =>
			requests.map((r) => (r.id === data.id ? { ...r, status: newStatus } : r))
		);
	}
</script>

<svelte:head>
	<title>{request?.title ?? 'Service Request'} | Cassi</title>
</svelte:head>

{#if request}
	<div class="mx-auto max-w-4xl px-4 py-8">
		<div class="mb-6">
			<a href="/" class="text-sm text-gray-500 hover:text-gray-700">← Back to Service Requests</a>
		</div>

		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<div class="mb-6 flex items-start justify-between">
				<h1 class="text-2xl font-bold text-gray-900">{request.title}</h1>
				<span
					class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold {getStatusClass(
						request.status
					)}"
				>
					{getStatusLabel(request.status)}
				</span>
			</div>

			<div class="mb-6 grid grid-cols-2 gap-6 text-sm">
				<div>
					<p class="font-medium text-gray-500">Property</p>
					<p class="text-gray-900">{request.property.address}</p>
				</div>
				<div>
					<p class="font-medium text-gray-500">Priority</p>
					<span
						class="inline-flex rounded-full px-2 text-xs leading-5 font-semibold capitalize"
					>
						{request.priority}
					</span>
				</div>
				<div>
					<p class="font-medium text-gray-500">Submitted</p>
					<p class="text-gray-900">{formatDate(request.submitted_at)}</p>
				</div>
				<div>
					<p class="font-medium text-gray-500">Last Updated</p>
					<p class="text-gray-900">{formatDate(request.updated_at)}</p>
				</div>
				<div>
					<p class="font-medium text-gray-500">Assignee</p>
					<p class="text-gray-900">{request.assignee?.name ?? 'Unassigned'}</p>
				</div>
			</div>

			<div class="mb-6">
				<p class="mb-1 font-medium text-gray-500">Description</p>
				<p class="text-gray-900">{request.description}</p>
			</div>

			{#if request.notes.length > 0}
				<div class="mb-6">
					<p class="mb-2 font-medium text-gray-500">Notes</p>
					<ul class="space-y-3">
						{#each request.notes as note (note.created_at)}
							<li class="rounded-md bg-gray-50 p-3 text-sm">
								<div class="mb-1 flex justify-between text-xs text-gray-500">
									<span>{note.author}</span>
									<span>{formatDate(note.created_at)}</span>
								</div>
								<p class="text-gray-900">{note.text}</p>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			<fieldset class="border-t border-gray-200 pt-6">
				<legend class="mb-3 text-sm font-medium text-gray-500">Update Status</legend>
				<div class="flex gap-2">
					{#each STATUS_OPTIONS as status (status)}
						<button
							type="button"
							aria-pressed={request.status === status}
							onclick={() => updateStatus(status)}
							class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors
							focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1
							{request.status === status
								? 'bg-gray-900 text-white'
								: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
						>
							{getStatusLabel(status)}
						</button>
					{/each}
				</div>
			</fieldset>
		</div>
	</div>
{:else}
	<div class="mx-auto max-w-4xl px-4 py-8">
		<p class="text-gray-500">Service request not found.</p>
	</div>
{/if}
