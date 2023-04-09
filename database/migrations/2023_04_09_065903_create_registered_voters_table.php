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
        Schema::create('registered_voters', function (Blueprint $table) {
            $table->id();
            $table->integer('vote_id')->unsigned();
            $table->integer('voter_id')->unsigned();
            $table->boolean('isBanned')->nullable();
            $table->timestamp('banned_at')->nullable();
            $table->text('ban_cause')->nullable();
            $table->integer('bannedBy')->unsigned()->nullable();
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
        Schema::dropIfExists('registered_voters');
    }
};
