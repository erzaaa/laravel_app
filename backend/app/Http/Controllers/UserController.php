<?php
namespace App\Http\Controllers;

use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::get();
        $response = [
            'users' => $users,
        ];

        // 修正前: return response()->view('index', $response);
        return response()->json($response);
    }
}