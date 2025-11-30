import { useMemo } from 'react';

export function useFilteredTasks(tasks: any[], search: string) {
    return useMemo(() => {
        const lower = search.toLowerCase();
        return tasks.filter(task => task.title.toLowerCase().includes(lower));
    }, [tasks, search]);
}