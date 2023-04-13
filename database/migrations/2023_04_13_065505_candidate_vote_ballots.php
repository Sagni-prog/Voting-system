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
       Schema::create('candidate_vote_ballot',function(Blueprint $table){
       
           $table->id();
           $table->integer('candidate_id')->unsigned()->nullable();
           $table->integer('voteBallot_id')->unsigned()->nullable();
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
        //
    }
};
