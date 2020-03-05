<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
// use App\Role;
use View;
use jeremykenedy\LaravelRoles\Models\Role;
use App\Http\Requests\StoreUser;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }


    public function getUsers()
    {
        $users = User::with(['roles'])->get();

        return response()->json($users, 200);
    }

    public function getUser(Request $request, $id)
    {
        $user = User::find($id);

        return response()->json([
            'success' => true,
            'user' => $user,
        ], 200);
    }

    protected function createUser(StoreUser $request) {

        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        // ], 201);

        // $user = json_decode($request->form);

        // $newUser = new User;

        // $newUser->firstname = $request->firstname;
        // $newUser->lastname = $request->lastname;
        // $newUser->email = $request->email;
        // $newUser->password = Hash::make($request->password);
        // $newUser->save();

        $newUser = User::create([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);
        
        // Attach user role
        $role = Role::where('name', '=', 'User')->first();
        $newUser->attachRole($role);
        

        return response()->json([
            'success' => true,
            'newUser' => $newUser,
        ], 201);
    }

    protected function update(Request $request, $id)
    {

        // $updatedUser = json_decode($request->form);
        $user = $request->user;
        $newRole = $request->newRole;
        $userToUpdate = User::find($id);

        // return response()->json([
        //     'success' => true,
        //     'updatedUser' => $updatedUser,
        //     'updatedUser["firstname"]' => $updatedUser['firstname'],
        //     'user' => $user,
        //     'id' => $id,
        //     'request->newRole' => $request->newRole
        // ], 201);

        if ($newRole) {
            // Update role
            $updatedRole = Role::where('slug', '=', $newRole)->first();
            $userToUpdate->syncRoles($updatedRole);        
        } else {
            $userToUpdate->updateOrInsert(
                ['id' => $id],
                [
                    'firstname' => $updatedUser['firstname'],
                    'lastname' => $updatedUser['lastname'],
                ]
            );
        }



        

        // Update users relationships
        // $showIdArray = [];
        // foreach($updatedUser->shows as $show) {
        //     array_push($showIdArray, $show->id);
        // }
        // $user->users()->sync($showIdArray);
        $updatedUser = User::with('roles')->find($id);

        return response()->json([
            'success' => true,
            'updatedUser' => $updatedUser,
        ], 201);
    }

    protected function delete(Request $request, $id)
    {
        $user = User::find($id);

        $user->delete();

        return response()->json([
            'success' => true,
            'user' => $user
        ], 204);
    }
}