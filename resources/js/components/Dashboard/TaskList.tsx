import { TaskCard } from './TaskCard';

export function TaskList({ tasks }: { tasks: any[] }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <TaskCard task={task} />
                    <hr className="h-0.5 bg-primary opacity-50" />
                </li>
            ))}
        </ul>
    );
}