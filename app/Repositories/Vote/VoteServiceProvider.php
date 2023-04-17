<?php

namespace App\Repositories\Vote;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Vote\VoteInterface;
use App\Repositories\Vote\VoteRepository;

class VoteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(VoteInterface::class,VoteRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
