<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{$gs->title.'-'}}@yield('title')</title>
    <link rel="shortcut icon" type="image/png" href="{{getPhoto($gs->favicon)}}">
    
    <link rel="stylesheet" href="{{asset('assets/merchant/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/merchant/css/font-awsome.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/merchant/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/merchant/css/custom.css')}}">
    <link rel="stylesheet" href="{{asset('assets/merchant/css/components.css')}}">
    @stack('style')
    <!-- Favicon -->
</head>
<body>
     <div id="app">
        <section class="section">
            <div class="container-xl">
                <div class="row">
                    @yield('content')
                </div>
            </div>
        </section>     
    </div>
    <script src="{{asset('assets/merchant/js/jquery.min.js')}}"></script>
    <script src="{{asset('assets/merchant/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/merchant/js/scripts.js')}}"></script>
    @include('notify.alert')
    @stack('script')
</body>
</html>