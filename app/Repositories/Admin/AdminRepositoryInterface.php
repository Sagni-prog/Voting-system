<?php

namespace App\Repositories\Admin;

Interface AdminRepositoryInterface{

  public function storeAdmin($data);
  public function updateAdmin($admin, $data);

}