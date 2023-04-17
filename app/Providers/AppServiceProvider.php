<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\VoteInterface;
use App\Repositories\VoteRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(VoteInterface::class,VoteRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
