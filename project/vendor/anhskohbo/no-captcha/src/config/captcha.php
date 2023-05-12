<?php

use App\Models\Generalsetting;

$gs = Generalsetting::first(['recaptcha_key','recaptcha_secret']);

return [
    'secret' => env('NOCAPTCHA_SECRET'),
    'sitekey' => env('NOCAPTCHA_SITEKEY'),
    'options' => [
        'timeout' => 30,
    ],
];
