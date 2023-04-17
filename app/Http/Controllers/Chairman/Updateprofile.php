<?php

namespace App\Http\Controllers\Chairman;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Storage;
use Validator;

class Updateprofile extends Controller
{
    public function update(Request $request){
    
        try {
            if(!Auth::user()){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Authentication is required'
                ],401);
            }
            
            $uservalidator=Validator::make($request->all(),[
                'first_name' => ['string', 'max:255'],
                'last_name' => ['string', 'max:255'],
                'email' => ['string', 'email', 'max:255'],
                // 'phone_number' => ['required','integer','max:10']
            ]);
    
            if($uservalidator->fails()){
                return response()->json([
                    "status"=>'fail',
                    "message"=>"valitor error",
                    "error"=>$uservalidator->errors()
                ],404);
            }
            
            $user =  Auth::user();
            
            $userUpdated = $user->update([
                            'first_name'=>$request->first_name,
                            'last_name'=>$request->last_name,
                            'email'=>$request->email,
                   ]);
                
                if(!$userUpdated){
                   
                   return response()->json([
                      'status' => 'fail',
                      'message' => 'Oops! something went wrong'
                   ],400);
                
                }
                
                if($request->hasFile('photo')){
    
                    $ext = $request->file('photo')->extension();
                    $image_name = 'image';
                    $filename = 'image-' . time() . '.' . $ext;
                    $path = $request->file('photo')->storeAs('profile-photo', $filename);
                    $image_url = Storage::url($path);
    
                    $data = $this->getDimension($path);
                    $width = $data['width'];
                    $height = $data['height'];
    
             
                if(!$user->photos->count()){
    
                    $user->photos()->create([
                        "photo_name" => $filename,
                        "photo_path" => $path,
                        "photo_url" => $image_url,
                        "photo_width" => $width,
                        "photo_height" => $height
                            ]);
                }
                else{
    
                    $user->photos()->update([
                            "photo_name" => $filename,
                            "photo_path" => $path,
                            "photo_url" => $image_url,
                            "photo_width" => $width,
                            "photo_height" => $height
                                ]);
                        }
                }
                
            $adminUpdated = $user->role->roleable()->update([
                            'phone_number' => $request->phone_number,
                            'role' => 'admin'
            ]);
            if(!$adminUpdated){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Oops! something went wrong'
                 ],400);
            }
            
            return response()->json([
               'status' => 'sucess',
               'message' => 'You have sucessfully changed your profile'
            ],200);
            
        } catch (\Exception $exception) {
             return response()->json([
                 'status' => 'fail',
                 'message' => 'Oops! sonthing went wrong',
                 'error' => $exception->getMessage()
             ]);
           }
        }
        
        public static function getDimension($path){
    
            [$width,$height] = getimagesize(Storage::path($path));
    
            $data = [
                "width" => $width,
                "height" => $height
            ];
             return $data;
        }

}
