<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SubscriptionToNewsletterConfirmation;
use App\Mail\NewsletterMessage;
// use DB;

class NewslettersController extends Controller
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

    public function getNewsletters()
    {
        $newsletters = Newsletter::all();

        return response()->json($newsletters, 200);
    }

    public function addSubscriptionToNewsletter(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:newsletters',
        ]);

        // 1) Add new subscription to database
        $newSubscription = new Newsletter;

        $newSubscription->email = $request->email;

        $newSubscription->save();

        // 2) Send confirmation as email
        Mail::to($newSubscription->email)->send(new SubscriptionToNewsletterConfirmation($newSubscription));

        // $content = [
        //     'title' => 'Mail from ItSolutionStuff.com',
        //     'body' => 'This is for <b>testing</b> email using smtp'
        // ];

        // foreach (['jm.kleger@gmail.com', 'jm.kleger@web-toucan.com'] as $recipient) {
        //     Mail::to($recipient)->send(new NewsletterMessage($content));
        // }


        // $mgClient = Mail::create('6986156f0b484115f801123be503938e', 'smtp.eu.mailgun.org');
        // $domain = "YOUR_DOMAIN_NAME";
        // $params = array(
        //     'from' => 'Excited User <YOU@YOUR_DOMAIN_NAME>',
        //     'to' => array('jm.kleger@gmail.com'),
        //     'subject' => 'Hey %recipient.first%',
        //     'text' => 'If you wish to unsubscribe, click http://example.com/unsubscribe/%recipient.id%',
        //     'recipient-variables' => '{"jm.kleger@gmail.com": {"first":"Jean-Marc", "id":1}}',
        // );

        // # Make the call to the client.
        // $result = $mgClient->messages()-send($domain, $params);

        return response()->json([
            'success' => true,
        ], 200);
    }

    protected function sendNewsletter(Request $request)
    {

        $subscribers = $request['subscribers'];
        $newsletterContent = $request['newsletter'];
        

        // 1) Send bulk emails
        // $content = [
        //     'title' => 'Mail from ItSolutionStuff.com',
        //     'body' => 'This is for <b>testing</b> email using smtp'
        // ];
        foreach (['jm.kleger@web-toucan.com'] as $recipient) {
            // Mail::to($recipient)->send(new NewsletterMessage($newsletterContent));
            $data = array();
            // $data['recipient'] = $recipient;
            $data['email_encoded'] = rtrim(strtr(base64_encode($recipient), '+/', '-_'), '=');
            // $data['decode'] = base64_decode(strtr($email_encoded, '-_', '+/'));
            $data['content'] = $newsletterContent;
            Mail::to($recipient)->send(new NewsletterMessage($data));
        }


        // 2) Update database entries
        foreach ($subscribers as $subscriber) {
            Newsletter::where('id', $subscriber['id'])->increment('emails_sent', 1, ['last_sent_email' => now()]);
        }

        return response()->json([
            'success' => true,
            // '$request->all()' => $request->all(),
            // '$request->subscribers' => $request->subscribers,
            '$subscribers' => $subscribers,
            '$newsletterContent' => $newsletterContent
        ], 200);
    }

    protected function deleteNewsletter(Request $request, $id)
    {
        $newsletter = Newsletter::find($id);

        $newsletter->delete();

        return response()->json([
            'success' => true,
            'newsletter' => $newsletter
        ], 204);
    }
}
