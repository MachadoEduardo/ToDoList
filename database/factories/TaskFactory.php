<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return [
            'user_id' => User::factory(), 
            'title' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph(),
            'is_completed' => $this->faker->boolean(30),
            'due_date' => $this->faker->optional()->dateTimeBetween('now', '+1 week'),
            'priority' => $this->faker->randomElement(['low', 'medium', 'high']),
        ];
    }
}
