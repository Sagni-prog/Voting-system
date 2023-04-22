<?php

namespace App\Helpers;

use Illuminate\Http\Request;

class GetFaceId{

private $request;
public function __construct(Request $request){
    $this->request = $request;
}
   
   public function getFaceId(){
      
      return $this->request->header('X-Face-Id');
   }
}