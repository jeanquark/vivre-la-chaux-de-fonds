<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\ContactForm;
use Illuminate\Support\Facades\Mail;
use App\ContactMessage;


class ContactMessageController extends Controller
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


    public function send(Request $request)
    {
        $senderAddress = env('MAIL_SENDING_ADDRESS');
        // $object = [
        //     'name' => 'abc',
        //     'email' => 'def',
        //     'object' => '',
        //     'message' => ''
        // ];

        $contactMessage = new ContactMessage;

        $contactMessage->name = $request->formData['name'];
        $contactMessage->email = $request->formData['email'];
        $contactMessage->object = $request->formData['object'];
        $contactMessage->message = $request->formData['message'];

        $contactMessage->save();

        Mail::to($senderAddress)->send(new ContactForm($contactMessage));

        return response()->json([
            'success' => true,
            'request' => $request,
            'request->formData' => $request->formData,
            'senderAddress' => $senderAddress,
            'object' => $object
        ], 200);
    }

    
}