import { Sidebar } from 'lucide-react';
import { useState } from 'react';

export default function PageSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Ícone para abrir/fechar */}
            <Sidebar
                className='absolute left-4 top-4 text-primary dark:text-chart-4 cursor-pointer z-40'
                onClick={() => setIsOpen(!isOpen)}
            />

            {/* Sidebar */}
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
                        <a href='' className='hover:text-secondary dark:hover:text-chart-4'>Geral</a>
                        <a href='' className='hover:text-secondary dark:hover:text-chart-4'>Tarefas concluídas</a>
                    </div>
                </div>
            </div>

            {/* Overlay opcional para fechar clicando fora */}
            {isOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-20 z-10 lg:hidden'
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}
