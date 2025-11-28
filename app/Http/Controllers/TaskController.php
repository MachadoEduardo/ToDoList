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
        $tasks = Task::where('user_id', auth()->id())->get();
        return Inertia::render('dashboard', [
            'tasks' => $tasks
        ]);
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

        return redirect()->route('dashboard');
    }   
}
