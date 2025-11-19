import { useState, useEffect } from 'react';
import AddButton from '@/components/add-button';
import BackgroundBlobs from '@/components/background-circles';
import SearchBar from '@/components/search-bar';
import { Head } from '@inertiajs/react';
import Modal from '@/components/modal';

export default function Dashboard({ tasks }) {
    const [openModal, setOpenModal] = useState(false);

    const [search, setSearch] = useState("");
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        const lower = search.toLowerCase();

        setFilteredTasks(
            tasks.filter(task =>
                task.title.toLowerCase().includes(lower)
            )
        );

    }, [search, tasks]);


    const listTasks = filteredTasks.map(task => (
        <div key={task.id}>
            <div className="flex justify-start p-5">
                <li className="px-2 font-lexend uppercase">
                    {task.title}
                </li>
            </div>
            <hr className="h-0.5 bg-primary opacity-50" />
        </div>
    ));

    function SearchTasks(value) {
        setSearch(value);
    }

    return (
        <>
            <Head title="Bem-vindo" />

            <BackgroundBlobs />

            <div className="z-10 m-5 flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">

                <div className="flex flex-col p-2">
                    <span className="font-lexend text-3xl text-center m-4">To Do List</span>

                    <SearchBar onChange={SearchTasks} />

                    <ul>{listTasks}</ul>
                </div>

                <AddButton onClick={() => setOpenModal(true)} />
                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <h2 className="text-xl font-bold mb-4">Criar nova anotação</h2>

                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Título"
                        className="border p-2 rounded"
                    />

                    <textarea
                        placeholder="Descrição"
                        className="border p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded"
                    >
                        Salvar
                    </button>
                </form>
            </Modal>
            </div>
        </>
    );
}
