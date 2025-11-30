import { TaskPriorityBadge } from './TaskPriorityBadge';

export function TaskCard({ task }: { task: any }) {
    return (
        <div className="m-4 flex flex-col p-5 border rounded-md shadow-xl dark:bg-card-foreground">
            <li className="font-lexend uppercase dark:text-white">{task.title}</li>
            <li className="font-lexend text-secondary">{task.description}</li>
            <TaskPriorityBadge priority={task.priority} />
        </div>
    );
}