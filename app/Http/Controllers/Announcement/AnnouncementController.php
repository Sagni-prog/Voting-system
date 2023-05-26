<?php

namespace App\Http\Controllers\Announcement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Http\Requests\AnnouncementRequest;

class AnnouncementController extends Controller
{
    public function index(){
       
         $announcement = Announcement::with('author')->get();
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
