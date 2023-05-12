@if (@$gs->cookie->status)
<div class="cookie-section">
    <div class="container">
        <div class="js-cookie-consent cookie-consent">
            <span class="cookie-consent__message m-2">
                @lang(@$gs->cookie->cookie_text)
            </span>

            <button class="js-cookie-consent-agree cookie-consent__agree cmn--btn m-2">
                @lang(@$gs->cookie->button_text)
            </button>

        </div>
    </div>
</div>   
@endif