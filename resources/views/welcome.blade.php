<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
    <!-- <link rel="manifest" href="/manifest.json"> -->
    <link rel="shortcut icon" href="/images/resume.png">
    <!-- Fonts -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet">
    <!-- Animations -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <!-- Styles -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" >
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <meta name="description" content="It includes the resume and freelance works of Hayreddin Tüzel. You can also contact Hayreddin Tüzel via this website.  Hayreddin Tüzel serves in Web design, Web programming, SEO and digital marketing.">
    <meta name="keywords" content="Hayreddin Tüzel, Freelance, Freelance Web Developer, Developer, PHP, Laravel, Reactjs, Javascript, Web Design, SEO, Digital Marketing">
    <meta name="author" content="Hayreddin Tüzel">


    <title>Hayreddin Tüzel's Website</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>

    <script src="{{mix('js/app.js')}}" ></script>
    <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"c0cea04b11d01b6101b4f424b","lid":"c3f4c86000"}) })</script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-104615836-2"></script>
    <script type="application/ld+json">
        {
          "@context": "https://hayreddintuzel.com",
          "@type": "Personal",
          "url": "http://www.hayreddintuzel.com",
          "name": "Hayreddin Tuzel",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-531-790-88-74",
            "contactType": "Personal"
          }
        }
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-104615836-2');
      var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};

var menuItems = document.querySelectorAll('.luxbar-item');
forEach(menuItems, function (index, item) {
	item.addEventListener('click', function () {
		document.querySelector('#luxbar-checkbox').checked = false;
	});
});
    </script>

</body>

</html>
