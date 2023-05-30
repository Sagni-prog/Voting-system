<?php

namespace App\Http\Controllers\Candidate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Candidate;
use App\Models\User;

use Auth;

class AddStrategicPlanCotroller extends Controller
{
  
    public function __invoke(Request $request)
    {
        $user = User::where('id',Auth::user()->id)->with('role.roleable')->first();

        $user->role->roleable->strategic_plan = $request->strategic_plan;
        $res = $user->role->roleable->save();
        if(!$res){
           
           return response()->json([
              'status' => 'fail',
              'message' => 'Oops! something went wrong'
           ], 400);
        }
        
        return response()->json(
                [
                  'status' => 'succcess',
                  'message' => 'Successfully added description'
                ], 200);
    }
}
