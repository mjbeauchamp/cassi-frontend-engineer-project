<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-50">
	<header class="border-b border-gray-200 bg-white">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<div class="flex items-center gap-2">
				<span class="text-xl font-bold text-gray-900">Cassi</span>
				<span class="text-sm text-gray-400">Property Dashboard</span>
			</div>
		</div>
	</header>

	{@render children()}
</div>
