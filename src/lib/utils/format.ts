export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();

	const diffMs = now.getTime() - date.getTime();
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

	if (diffDays === 0) {
		return 'Today';
	} else if (diffDays === 1) {
		return 'Yesterday';
	}

	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	const formatted = month + '/' + day + '/' + year;
	return formatted;
}

export function getStatusLabel(status: string): string {
	if (status === 'in_progress') {
		return 'In Progress';
	}
	return status.charAt(0).toUpperCase() + status.slice(1);
}
