<?php

namespace App\Http\Controllers;

use App\Http\Requests\Settings\TaskStoreRequest;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::where('user_id', auth()->id())
                    ->where('is_completed', false)
                    ->get();

        if ($tasks->isEmpty()) {
            return Inertia::render('dashboard', [
                'tasks' => [],
                'message' => 'Nenhuma tarefa encontrada. Crie sua primeira tarefa!'
            ]);
        }

        return Inertia::render('dashboard', ['tasks' => $tasks], 'message', null);
    }

    public function history()
    {
        $tasks = Task::where('user_id', auth()->id())
                    ->where('is_completed', true)
                    ->get();

        if ($tasks->isEmpty()) {
            return Inertia::render('history', [
                'tasks' => [],
                'message' => 'Nenhuma tarefa encontrada. Complete sua primeira tarefa!'
            ]);
        }

        return Inertia::render('history', ['tasks' => $tasks], 'message', null);
    }

    public function store (TaskStoreRequest $request)
    {
        $validated = $request->validated();

        $task = Task::create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? null,
            'priority' => $validated['priority'] ?? 'low',
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('dashboard')->with('success', 'Tarefa criada com sucesso.');
    }   

    public function finish (Task $task)
    {
        $task->is_completed = true;
        $task->save();

        return redirect()->route('dashboard')->with('success', 'Tarefa marcada como concluída.');
    }

    public function destroy (Task $task)
    {
        $task->delete();

        return redirect()->route('dashboard')->with('success', 'Tarefa deletada com sucesso.');
    }
}
