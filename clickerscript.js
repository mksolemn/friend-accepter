(function ($) {
    console.log("clicker script runs");
    $(document).ready(function () {

        var acceptorModule = {}

        acceptorModule = {

            friendWrapper: '.friendRequestItem',
            randomNum: 12345,


            loopRequests: function () {

                var acceptedNum = 0; //counter for accepted
                var withoutImageNum = 0 // users without image
                var setIntCounter = 0; //counter for setInterval


                // add counter wrapper
                $('body').append('<div class="counter accepted">Accepted: 0</div>');
                $('body').append('<div class="counter rejected">Rejected: 0</div>');

                $(".friendRequestItem").each(function (index) {

                    console.log('for each is running');

                    var _this = this;
                    var previous;


                    randomNum = Math.floor(Math.random() * (2500 - 2000 + 1) + 2000);


                    var t = setTimeout(function () {

                        setIntCounter += 1;

                        console.log('set interval is running');

                        // highlight current target
                        $(_this).css({'position': 'relative'});

                        previous = $(_this);

                        if ($(_this).find('.uiScaledImageContainer').hasClass('silhouette')) {

                            withoutImageNum += 1;

                            $('.counter.rejected').text('Rejected: ' + withoutImageNum);

                            // change button color
                            $(_this).find('.ruResponseButtons').children('button:first-child').css('background', '#f00');

                            // add text to picture
                            $(_this).find('.silhouette').append('<p class="no-pic"> No pic no click </p>');

                            // click to reject
                            $(_this).find('.ruResponseButtons').children('button:last-child').click();

                        } else {

                            // add affect for currently scanned request
                            $(_this).append('<div class="dum-current"></div>').fadeOut('slow');


                            acceptedNum += 1;

                            $('.counter.accepted').text('Accepted: ' + acceptedNum);

                            // click to accept
                            //$(_this).find('.ruResponseButtons').children('button:first-child').click();

                            // get user name
                            console.log('User: ' + $(_this).children('div').children('div:last-child').children('div:first-child').children('a').html() + ' added.');

                        }


                    }, randomNum * index);
                });
            }

        }

        acceptorModule.loopRequests();

    });

})(jQuery);