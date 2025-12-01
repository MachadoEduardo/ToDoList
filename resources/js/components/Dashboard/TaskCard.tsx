import { router } from '@inertiajs/react';
import { TaskPriorityBadge } from './TaskPriorityBadge';
import { useState } from 'react';

export function TaskCard({ task }: { task: any }) {
    const [isFinished, setIsFinished] = useState(task.completed);

    function taskFinished(e: React.FormEvent) {
        e.preventDefault();
        setIsFinished(true); // atualiza UI imediatamente
        setTimeout(() => {
            router.patch(`/tasks/${task.id}/finish`);
        }, 1700); // aguarda 2 segundos antes de enviar a requisição
    }

    return (
        <div className={`my-4 relative flex flex-col p-5 border rounded-md shadow-xl dark:bg-card-foreground
        ${isFinished ? 'animate-fadeout' : ''}`}>
            <li className="font-lexend uppercase dark:text-white">{task.title}</li>
            <li className="font-lexend text-secondary">{task.description}</li>
            <TaskPriorityBadge priority={task.priority} />
            <button
                onClick={taskFinished}
                className={`absolute right-5 rounded-full h-4 w-4 border-2 ${
                    isFinished ? 'bg-green-500 border-green-700' : 'border-gray-400'
                }`}
            />
        </div>
    );
}