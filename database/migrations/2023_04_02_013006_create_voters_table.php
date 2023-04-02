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
        Schema::create('voters', function (Blueprint $table) {
            $table->id();
            $table->string('sex');
            $table->string('role')->default('user');
            $table->boolean('status')->default(false);
            $table->integer('admin_id')->unsigned()->nullable();
            $table->timestamp('approved_at')->nullable();
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
        Schema::dropIfExists('voters');
    }
};
