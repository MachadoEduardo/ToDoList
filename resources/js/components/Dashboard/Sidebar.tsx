import { Sidebar } from 'lucide-react';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { logout } from '@/routes';
import { LogOut } from 'lucide-react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { router } from '@inertiajs/react';

export default function PageSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <div>
            <Sidebar
                className={`
                absolute left-4 top-4 cursor-pointer z-50
                text-primary dark:text-white
                ${isOpen ? 'dark:stroke-black' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            />

            <div
                className={`
                    fixed top-0 left-0 h-full w-64 text-black bg-white shadow-lg border-r border-primary
                    transform transition-transform duration-300 ease-in-out z-30
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className='text-left px-5 py-14'>
                    <h2 className='text-lg font-bold'>Suas tarefas</h2>
                    <div className="pl-6 flex flex-col">
                        <Link href={'/app'} className='hover:text-secondary dark:hover:text-chart-4'>Geral</Link>
                        <Link href={'/tasks/history'} className='hover:text-secondary dark:hover:text-chart-4'>Tarefas concluídas</Link>
                    </div>
                </div>
                
                <Link
                        className="w-full hover:cursor-pointer dark:text-black dark:hover:text-red-600 flex px-5 fixed bottom-10"
                        href={logout()}
                        as="button"
                        onClick={handleLogout}
                        data-test="logout-button"
                    >
                        <LogOut className="mr-2" />
                        Sair                      
                </Link>
            </div>

            <div className="flex flex-row max-w-32 w-20 mt-4 ml-auto">
                    
                </div>

            {isOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-20 z-10 lg:hidden'
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
