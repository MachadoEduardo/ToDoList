import { Head, router } from '@inertiajs/react';
import { useState } from 'react';
import BackgroundBlobs from '@/components/background-circles';
import { PageLayout } from '@/layouts/page-layout';
import { DashboardHeader } from '@/components/Dashboard/DashboardHeader';
import { TaskList } from '@/components/Dashboard/TaskList';
import { CreateTaskModal } from '@/components/Dashboard/CreateTaskModal';
import { useFilteredTasks } from '@/hooks/use-filtered-tasks';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { Link } from '@inertiajs/react';
import { logout } from '@/routes';
import { LogOut } from 'lucide-react';

export default function Dashboard({ tasks }: { tasks: any[] }) {
    const [openModal, setOpenModal] = useState(false);
    const [search, setSearch] = useState('');

    const filteredTasks = useFilteredTasks(tasks, search);
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <Head title="Bem-vindo" />
            <BackgroundBlobs />
            <PageLayout>
                <span className="m-4 text-center font-lexend text-3xl dark:text-white">To Do List</span>

                <DashboardHeader
                    search={search}
                    onSearchChange={setSearch}
                    onAddClick={() => setOpenModal(true)}
                    className="top-0"
                />

                <TaskList tasks={filteredTasks} />

                <div className="flex flex-col max-w-32 w-20 mt-4 ml-auto">
                    <Link
                        className="block w-full hover:cursor-pointer dark:text-white dark:hover:text-secondary"
                        href={logout()}
                        as="button"
                        onClick={handleLogout}
                        data-test="logout-button"
                    >
                        Log out
                        <LogOut className="mr-2" />
                    </Link>
                </div>
            </PageLayout>

            <CreateTaskModal open={openModal} onClose={() => setOpenModal(false)} />
        </>
    );
}
