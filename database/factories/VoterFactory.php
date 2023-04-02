<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
Use \Carbon\Carbon;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Voter>
 */
class VoterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {  
    
       $date = Carbon::now();
        return [
                'sex' => $this->faker->randomElement(['male','female']),
                'role' => 'voter', 
                'status' => $this->faker->randomElement([true,false]),
                'approved_at' => $date,
                'deleted_at' =>  $date
        ];
    }
}
