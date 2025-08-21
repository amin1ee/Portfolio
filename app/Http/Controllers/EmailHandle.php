<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use App\Notifications\EmailSender;
use Inertia\Inertia;

class EmailHandle extends Controller
{
    public function email(Request $request)
    {
        $data = $request->validate(
            [
                "name" => "required|string|max:100",
                "email" => "required|string|max:100",
                "message" => "required|string|max:100"
            ]
        );

        Notification::route("mail", "amine.p8t@gmail.com")->notify((new EmailSender($data)));
        session(["order_submitted" => true]);
        return redirect()->route("thanks");
    }
    public function success()
    {
        if (!session('order_submitted')) {
            return redirect('/');
        }

        session()->forget('order_submitted');
        return Inertia::render('thanks');
    }
}
