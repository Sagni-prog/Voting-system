<?php

namespace App\Http\Controllers\Announcement;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\User;
use App\Http\Requests\AnnouncementRequest;


class AnnouncementController extends Controller
{
    public function index(){
                 
      try {   
         $announcement = Announcement::orderBy('created_at','desc')->get();
         
         if(!$announcement){
           return response()->json(
                   [
                      'status' => 'failed',
                      'message' => 'Oops! something went wrong'
                   ], 400);
         }
         
         return response()->json(
                     [
                        'status' => 'success',
                        'data' => $announcement
                     ], 200);
               } catch (\Exception $exception) {
                  
                  return $exception->getMessage();
               } 
      }
   
    
    public function store(AnnouncementRequest $request){
       
       $data = $request->validated();
       $announcement = Announcement::create($data);
       if(!$announcement){
         
         return response()->json(
                 [
                    'status' => 'failed',
                    'message' => 'Oops! something went wrong'
                 ], 400);
       }
       
       return response()->json(
                   [
                      'status' => 'success',
                      'message' => 'Announcement successfully created'
                   ], 200);
    }
}
