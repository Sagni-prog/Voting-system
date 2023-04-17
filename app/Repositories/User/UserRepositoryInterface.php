<?php 

namespace App\Repositories\User;

Interface UserRepositoryInterface{
    
    public function findUserWhere($data);
    public function findUserById($id);
    public function findUser($id,$status);
    public function getAllActiveUsers();
    public function getAllUsers();
    public function getAllInactiveUsers();
    public function storeUser($data);
    public function getCurrentlyAuthenticatedUser();
    public function updateUserPassword($user, $data);
    
}