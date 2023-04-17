<?php 

namespace App\Repositories\User;

Interface UserRepositoryInterface{
    
    public function findUserWhere($data);
    public function findUser($id,$status);
    public function getAllActiveUsers();
    public function getAllUsers();
    public function getAllInactiveUsers();
    
}