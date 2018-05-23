/*
    Name: Mountain
    Description: Responsive Coming Soon
    Version: 2.0
    Author: MountainTheme

    TABLE OF CONTENTS
    ---------------------------
     1. Loading
     2. Backstretch Image Background
        2.1 Backstretch Slideshow Background
     3. Countdown
     4. Contact form
     5. Ajax mailchimp
     6. Video background
     7. Google map
*/

/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     $('#video').css({"opacity" : "0.0"});
  }

$(window).load(function() {

    $(".loader-icon").delay(500).fadeOut();
    $(".page-loader").delay(700).fadeOut("slow");

    setTimeout(function() {
        $(".logo").delay(1000).css({
            display: 'none'
        }).fadeIn(1000);
        $("h1").delay(1000).css({
            display: 'none'
        }).fadeIn(1000);
        $("p").delay(1000).css({
            display: 'none'
        }).fadeIn(1000);
        $(".countdown").delay(1000).css({
            display: 'none'
        }).fadeIn(1000);
        $(".mouse").delay(1000).css({
            display: 'none'
        }).fadeIn(1000);
    });


});


/* ================================= */
/* ::::::::: 2. Backstretch :::::::: */
/* ================================= */

/* Active Single Image Background  */

$("header").backstretch("images/background2.jpg");

// ==== SLIDESHOW BACKGROUND ====
// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// Variable fade = transition speed for fade animation, in milliseconds
// Variable duration = time each slide is shown for, in milliseconds


/* ↓ Remove comments if you want to use the slideshow  ↓  */

/*$("header").backstretch([
     "images/background1.jpg",
     "images/background2.jpg",
     "images/background3.jpg",
     "images/background4.jpg"
 ],{duration: 3000, fade: 750});  */


/* ================================= */
/* :::::::::: 3. Countdown ::::::::: */
/* ================================= */


// To change date, simply edit: var endDate = "Dec 01, 2015 20:39:00";

$(function() {
    var endDate = "Aug 01, 2018 00:00:00";
    $('.countdown').countdown({
        date: endDate,
        render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
        }
    });
});

/* ================================= */
/* :::::::: 4. Contact form :::::::: */
/* ================================= */

$(function() {
    $('#submit').click(function() {
        // validate and process form here
        $("#ajax-contact-form").validate({

            rules: {

                name: {
                    required: true,
                },

                email: {
                    required: true,
                    email: true,
                },

                msg: {
                    required: true,
                },
            },

            messages: {

                name: {
                    required: "<i class='fa fa-exclamation-triangle name'></i>",
                },

                email: {
                    required: "<i class='fa fa-exclamation-triangle email'></i>",
                    email: "<i class='fa fa-exclamation-triangle email'></i>",
                },

                msg: {
                    required: "<i class='fa fa-exclamation-triangle message'></i>",
                },

            },

            // JQuery's awesome submit handler.
            submitHandler: function(form) {

                // Create variables from the form
                var name = $('input#name').val();
                var email = $('input#email').val();
                var msg = $('textarea#msg').val();

                // Create variables that will be sent in a URL string to contact.php
                var dataString = '&name=' + name + '&email=' + email + '&msg=' + msg;

                $.ajax({
                    type: "POST",
                    url: "php/contact.php",
                    data: dataString,
                    success: function(data) {
                        if (data === 'OK') {
                            $("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val("");
                        }
                        if (data == 'OK') {
                            result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';

                        } else {
                            result = data;
                        }
                        $('#note').html(result);

                    }

                });
                return false;
            }
        });
    });
});

/* ================================= */
/* :::::::: 7. Google Map :::::::::: */
/* ================================= */

var map;

function initGoogleMap() {
  map = new google.maps.Map(document.getElementById('google-container'), {
    center: {lat: -27.4704073, lng: 153.0142954},
    zoom: 10
  });
}

/* ================================= */
/* :::::::: 8. Google Analytics :::::::::: */
/* ================================= */

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-119768889-1');

/* EOF */
