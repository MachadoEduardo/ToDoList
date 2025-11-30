type Props = { priority: 'low' | 'medium' | 'high' };

export function TaskPriorityBadge({ priority }: Props) {
    const map = {
        high: 'bg-red-200 text-red-500',
        medium: 'bg-yellow-200 text-yellow-500',
        low: 'bg-green-200 text-green-800',
    };

    const labels = { high: 'Alta', medium: 'Média', low: 'Baixa' };

    return (
        <span className={`ml-auto px-2 rounded-xl ${map[priority]}`}>
            {labels[priority]}
        </span>
    );
}