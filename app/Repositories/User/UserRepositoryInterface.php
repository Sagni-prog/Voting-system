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
    public function getActiveNotBannedWhereRole();
    public function getActiveNotBannedWhereRoleChairman();
    // public function getActiveNotBannedWhereRoleWith($role);
    public function findActiveNotBannedWhereRole($id);
    public function findActiveNotBannedWhereRoleChairman($id);
    // public function findActiveNotBannedWhereRoleWith($id, $role);
    public function updateUser($user, $data);
    public function verifyUser($user);
    public function banUser($user);
    public function unBanUser($user);
    public function destroyUser($user);
}