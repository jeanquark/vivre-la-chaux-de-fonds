<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Auth\Notifications\ResetPassword as Notification;

class ResetPassword extends Notification
{
    /**
     * Build the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            // ->line('You are receiving this email because we received a password reset request for your account.')
            // ->action('Reset Password', url(config('app.url').'/password/reset/'.$this->token).'?email='.urlencode($notifiable->email))
            // ->line('If you did not request a password reset, no further action is required.');
            // ->greeting('Bonjour,')
            ->subject('Réinitialiser votre mot de passe')
            ->from('info@vlcf.ch')
            ->line(trans('email.intro'))
            ->action(trans('email.button'), url(config('app.url').'/password/reset/'.$this->token).'?email='.urlencode($notifiable->email))
            ->line(trans('email.outro'));
    }
}
