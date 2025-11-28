import AddButton from '@/components/add-button';
import BackgroundBlobs from '@/components/background-circles';
import Modal from '@/components/modal';
import SearchBar from '@/components/search-bar';
import { Input } from '@/components/ui/input';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ tasks }) {
    const [openModal, setOpenModal] = useState(false);
    const [message, setMessage] = useState('');

    const [search, setSearch] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        const lower = search.toLowerCase();

        setFilteredTasks(
            tasks.filter((task) => task.title.toLowerCase().includes(lower)),
        );
    }, [search, tasks]);

    const listTasks = filteredTasks.map((task) => (
        <div key={task.id}>
            <div className="m-4 flex flex-col justify-start gap-1 rounded-md border p-5 shadow-xl">
                <li className="px-2 font-lexend uppercase">{task.title}</li>
                <li className="px-2 font-lexend text-secondary">
                    {task.description}
                </li>
                <li
                    className={
                        'ml-auto w-fit rounded-xl px-2 font-lexend' +
                        (task.priority === 'high'
                            ? ' bg-red-200 text-red-500'
                            : task.priority === 'medium'
                              ? ' bg-yellow-200 text-yellow-500'
                              : ' bg-green-200 text-green-800')
                    }
                >
                    {task.priority === 'high'
                        ? 'Alta'
                        : task.priority === 'medium'
                          ? 'Média'
                          : 'Baixa'}
                </li>
            </div>
            <hr className="h-0.5 bg-primary opacity-50" />
        </div>
    ));

    function SearchTasks(value) {
        setSearch(value);
    }

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        priority: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/tasks');
        setMessage('Tarefa adicionada com sucesso!');

        setTimeout(() => {
            setMessage('');
        }, 3000);
    }

    return (
        <>
            <Head title="Bem-vindo" />

            <BackgroundBlobs />

            <div className="z-10 m-5 flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex flex-col p-2">
                    <span className="m-4 text-center font-lexend text-3xl">
                        To Do List
                    </span>

                    <div className="flex">
                        <SearchBar onChange={SearchTasks} />
                        <div className="ml-auto px-2">
                            <AddButton onClick={() => setOpenModal(true)} />
                        </div>
                    </div>

                    <ul>{listTasks}</ul>
                </div>

                <Modal open={openModal} onClose={() => setOpenModal(false)}>
                    <h2 className="mb-4 text-xl font-bold">
                        Criar nova tarefa
                    </h2>

                    <form onSubmit={submit} className="flex flex-col gap-2">
                        <label htmlFor="title">Título</label>
                        <Input
                            type="text"
                            placeholder="Título"
                            className="px-1"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <label htmlFor="description">Descrição</label>
                        <Input
                            type="text"
                            placeholder="Descrição"
                            className="px-1"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                        />
                        <label htmlFor="description">Prioridade</label>
                        <select
                            value={data.priority}
                            className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs shadow-primary transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:scale-99 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            onChange={(e) =>
                                setData('priority', e.target.value)
                            }
                        >
                            <option value="" className="">
                                Selecione a prioridade
                            </option>
                            <option value="low">Baixa</option>
                            <option value="medium">Média</option>
                            <option value="high">Alta</option>
                        </select>
                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-4 rounded-sm bg-primary p-2 font-lexend text-white hover:cursor-pointer hover:bg-primary-foreground disabled:opacity-50"
                        >
                            Criar
                        </button>
                        {message && (
                            <div className="rounded-md p-3 text-green-600">
                                {message}
                            </div>
                        )}
                    </form>
                </Modal>
            </div>
        </>
    );
}
