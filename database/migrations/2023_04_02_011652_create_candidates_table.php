<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->integer('chairman_id')->unsigned()->nullable()->default(12);
            $table->string('sex');
            $table->timestamp('admission_year')->nullable();
            $table->timestamp('graduation_year')->nullable();
            $table->timestamp('educational_year')->nullable();
            $table->string('department');
            $table->double('gpa');
            $table->double('exam_score');
            $table->longText('candidates_description');
            $table->longText('strategic_plan');
            $table->string('role')->default('user');
            $table->boolean('status')->default(false);
            $table->integer('admin_id')->unsigned()->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('canditates');
    }
};
