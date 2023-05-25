<?php

namespace App\Repositories\Role;

use App\Repositories\Role\RoleRepositoryInterface;
use App\Models\Role;

class RoleRepository implements RoleRepositoryInterface{

   
    public function storeRole($model, $id){
    
        return $model->roles()->create([
            'user_id' => $id
        ]);
    }
}