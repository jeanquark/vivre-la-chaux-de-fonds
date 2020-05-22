<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
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

        $user = User::create([
            'firstname' => $request['firstname'],
            'lastname' => $request['lastname'],
            'email' => $request['email'],
            'password' => bcrypt($request['password']),
        ]);
        
        // Attach user role
        $role = Role::where('name', '=', 'User')->first();
        $user->attachRole($role);
        
        $newUser = User::with('roles')->find($user->id);

        return response()->json([
            'success' => true,
            'newUser' => $newUser,
        ], 201);
    }

    protected function update(Request $request, $id)
    {
        $user = $request->user;
        $newRole = $request->newRole;
        $userToUpdate = User::find($id);

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