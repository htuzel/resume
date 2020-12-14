<?php

namespace App\Http\Controllers;

use Mail;
use Storage;
use App\User;
use Illuminate\Http\Request;


class SendMailController extends Controller
{

    public function html_email(Request $request){

        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255',
        ]);

        $data = array('name'=>$request->input('name'),'email'=>$request->input('email'),'description'=>$request->input('description'));
        if ($request->hasFile('image')) {
            $file = $request->image;
            $extension =$file->getClientOriginalExtension();

            Storage::disk('local')->putFileAs('public', $file, "deneme." . $extension);

            if($extension == "pdf")
            {
                Mail::send('mail', $data, function($message) {
                    $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                        ('New Job Proposal');
                    $message->attach("storage/deneme.pdf");
                    $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

                });
            } else if($extension == "doc")
            {
                Mail::send('mail', $data, function($message) {
                    $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                        ('New Job Proposal');
                    $message->attach("storage/deneme.doc");
                    $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

                });
            } else if($extension == "docx")
            {
                Mail::send('mail', $data, function($message) {
                    $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                        ('New Job Proposal');
                    $message->attach("storage/deneme.docx");
                    $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

                });
            }
        } else {

            Mail::send('mail', $data, function($message) {
                $message->to('hayreddintuzel@gmail.com', 'Tutorials Point')->subject
                    ('New Job Proposal');
                $message->from('me@hayreddintuzel.com','Hayreddin Tüzel');

            });
        }


        return "success";
    }

}
