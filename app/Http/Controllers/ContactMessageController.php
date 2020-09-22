<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Mail\ContactForm;
use App\Mail\ContactFormSentConfirmation;
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
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required|max:1000'
        ]);

        $senderAddress = env('MAIL_SENDING_ADDRESS');
        // $object = [
        //     'name' => 'abc',
        //     'email' => 'def',
        //     'object' => '',
        //     'message' => ''
        // ];
        
        // 1) Save message in database
        $contactMessage = new ContactMessage;

        // $contactMessage->name = $request->formData['name'];
        // $contactMessage->email = $request->formData['email'];
        // $contactMessage->object = $request->formData['object'];
        // $contactMessage->message = $request->formData['message'];

        $contactMessage->name = $request->name;
        $contactMessage->email = $request->email;
        $contactMessage->object = $request->object;
        $contactMessage->message = $request->message;

        $contactMessage->save();
        
        // 2) Send message as email
        // Mail::to($senderAddress)->send(new ContactForm($contactMessage));
        Mail::to('jm.kleger@gmail.com')->send(new ContactForm($contactMessage));
        Mail::to($contactMessage->email)->send(new ContactFormSentConfirmation($contactMessage));

        return response()->json([
            'success' => true,
            'request' => $request,
            'name' => $request->name,
            'request->formData' => $request->formData,
            'senderAddress' => $senderAddress,
            // 'object' => $object
        ], 200);
    }

    
}