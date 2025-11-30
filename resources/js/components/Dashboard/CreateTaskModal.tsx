import { useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import Modal from '@/components/modal';
import { useState } from 'react';

export function CreateTaskModal({ open, onClose }: any) {
    const { data, setData, post, processing } = useForm({
        title: '',
        description: '',
        priority: '',
    });

    const [message, setMessage] = useState('');

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/tasks', {
            onSuccess: () => {
                setMessage('Tarefa adicionada com sucesso!');
                setTimeout(() => setMessage(''), 3000);
            },
        });
    }

    return (
        <Modal open={open} onClose={onClose}>
            <h2 className="mb-4 text-xl font-bold dark:text-white">
                Criar nova tarefa
            </h2>

            <form onSubmit={submit} className="flex flex-col gap-2 dark:text-white font-lexend">
                <label>Título</label>
                <Input
                    type="text"
                    placeholder="Título"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                />
                <label>Descrição</label>
                <Input
                    type="text"
                    placeholder="Descrição"
                    value={data.description}
                    onChange={e => setData('description', e.target.value)}
                />
                <label>Prioridade</label>
                <select
                    value={data.priority}
                    onChange={e => setData('priority', e.target.value)}
                    className="flex h-9 w-full rounded-md border dark:border-white px-3 py-1 text-base dark:bg-card-foreground"
                >
                    <option value="">Selecione a prioridade</option>
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                </select>

                <button
                    type="submit"
                    disabled={processing}
                    className="mt-4 rounded-sm bg-primary p-2 text-white hover:bg-primary-foreground disabled:opacity-50 dark:bg-primary dark:hover:bg-secondary dark:text-black
                    dark:hover:scale-97 dark:hover:cursor-pointer"
                >
                    Criar
                </button>

                {message && <div className="rounded-md p-3 text-green-600 text-center">{message}</div>}
            </form>
        </Modal>
    );
}
