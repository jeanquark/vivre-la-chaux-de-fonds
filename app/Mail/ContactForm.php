<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\ContactMessage;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    // public $data;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ContactMessage $data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $from = 'www.vlcf.ch/contact';
        $subject = "vlcf.ch - Formulaire de contact";

        return $this->from($from)->subject($subject)->view('emails.contact');
    }
}
