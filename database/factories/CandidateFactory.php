<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
Use \Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CandidateFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $date = Carbon::now();
        $gpa = mt_rand(3.00,4.00);
        $score = mt_rand(20.00,50.00);
        $id = mt_rand(1,10);
        return [
            'chairman_id' => $id,
            'sex' => $this->faker->randomElement(['male','female']),
            'role' => 'voter', 
            'status' => $this->faker->randomElement([true,false]),
            'approved_at' => $date,
            'deleted_at' =>  $date,
            'admission_year' => $date,
            'educational_year' => $date,
            'department' => 'SE',
            'gpa' => $gpa,
            'exam_score' => $score,
            'candidates_description' => $this->faker->text(500),
            'strategic_plan' => $this->faker->text(300)

        ];
    }
}
