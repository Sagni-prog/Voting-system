<?php

namespace App\Repositories\Chairman;

Interface ChairmanRepositoryInterface{


  public function getAllChairmans();
  public function storeChairman($data);
  public function updateChairman($chairman, $data);
}