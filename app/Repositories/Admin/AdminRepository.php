<?php

namespace App\Repositories\Admin;
use App\Repositories\Admin\AdminRepositoryInterface;
use App\Models\Admin;

class AdminRepository implements AdminRepositoryInterface{

 private $admin;
 
 public function __construct(Admin $admin){
    
    $this->admin = $admin;
 }

    public function storeAdmin($data){
       
        return $this->admin->create([
             'phone_number' => $data['phone_number'],
             'role' => 'admin'
        ]);
        
    }
    
    public function updateAdmin($admin, $data){
        
         return $admin->update([
                    'phone_number' => $data['phone_number'],
                    'role' => 'admin'
        ]);
    }
}