import { Head } from '@inertiajs/react';
import { useState } from 'react';
import BackgroundBlobs from '@/components/background-circles';
import { PageLayout } from '@/layouts/page-layout';
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader';
import { TaskList } from '@/components/Dashboard/TaskList';
import { CreateTaskModal } from '@/components/Dashboard/CreateTaskModal';
import { useFilteredTasks } from '@/hooks/use-filtered-tasks';
import PageSidebar from '@/components/Dashboard/Sidebar';

export default function Dashboard({ tasks, message }: { tasks: any[], message?: string }) {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');

    const filteredTasks = useFilteredTasks(tasks, search);

    return (
        <>
            <Head title="Bem-vindo" />
            <BackgroundBlobs />
            <PageSidebar/>

            <PageLayout>
                <span className="mt-10 mb-5 text-center font-lexend text-3xl dark:text-white">To Do List</span>

                {message && (
                <div className="dark:text-white my-4 text-center">
                    {message}
                </div>
                )}

                <TaskList tasks={filteredTasks} />
            </PageLayout>

            <CreateTaskModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}
