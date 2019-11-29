<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use View;

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
        $users = User::all();

        return response()->json($users, 200);
    }

    public function getUser(Request $request)
    {
        $userId = $request->id;
        $user = User::where('id', '=', $userId)->get();

        return response()->json($user, 200);
    }

    protected function addUser(Request $request) {
        // $newUser = $request->all();

        $form = json_decode($request->form);
        $user = User::create([
            'email' => 'abc',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User added successfully',
            'user' => $user
        ], 201);
    }

    protected function updateUser(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }

    protected function deleteUser(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }
}