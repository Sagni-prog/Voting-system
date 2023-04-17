<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\VoteInterface;
use App\Repositories\VoteRepository;

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
