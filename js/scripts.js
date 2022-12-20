$(document).ready(function () {
    $('.scroll-rect').on('click', function () {
        $('body').addClass('hide-home');
    });

    $('.catalogue-filter').on('click', function () { 
        $('body').toggleClass('show-catalogue-inside', 1000);
        swiper.slideTo(0);
        cataloguetest.slideTo(0);
        $('.catalogue-swiper .swiper-slide:first-child').css('opacity','1');
        $('.catalogue-swiper .swiper-slide:nth-child(2)').css('opacity','1');
        $('.catalogue-swiper .swiper-slide:first-child').css('transition','all .7s ease');
        $('.catalogue-swiper .swiper-slide:nth-child(2)').css('transition','all .7s ease');
        $('body').toggleClass('showe');
        if($('body').hasClass('showe')) {
            setTimeout(() => {
                $('.catalogue-swiper1 .swiper-slide:first-child').css('opacity','1');
                $('.catalogue-swiper1 .swiper-slide:nth-child(3)').css('opacity','1');
            }, 700);
        } else {
            $('.catalogue-swiper1 .swiper-slide:first-child').css('opacity','0');
            $('.catalogue-swiper1 .swiper-slide:nth-child(3)').css('opacity','0');
        }
        var k = $('.catalogue-swiper1 .swiper-slide:first-child').width();
        var b = $('.catalogue-swiper1 .swiper-slide:first-child').height();
        var c = $('.catalogue-swiper .swiper-slide:nth-child(3)').width();
        var j = $('.catalogue-swiper .swiper-slide:nth-child(3)').height();
        if($('body').hasClass('showe')) {
            myTimeout =  setTimeout(() => {
               $('.catalogue-swiper .swiper-slide:first-child').css('width',k);
               $('.catalogue-swiper .swiper-slide:first-child').css('height',b);
               $('.catalogue-swiper .swiper-slide:nth-child(2)').css('width',k);
               $('.catalogue-swiper .swiper-slide:nth-child(2)').css('height',b);
           }, 20);

       } else {
        myTimeout1 = setTimeout(() => {
              $('.catalogue-swiper .swiper-slide:first-child').css('width',c);
              $('.catalogue-swiper .swiper-slide:first-child').css('height',j);
              $('.catalogue-swiper .swiper-slide:nth-child(2)').css('width',c);
              $('.catalogue-swiper .swiper-slide:nth-child(2)').css('height',j);
          }, 20);
       }
        // resizesize();
    });


    $('.share-btn').on('click', function () {
        $(this).toggleClass('show-social');
    });

    $('.burger-menu').on('click', function () {
        $('.main-menu').addClass('show-main-menu');
    });

    $('.close-menu').on('click', function () {
        $('.main-menu').removeClass('show-main-menu');
    });
    // $('.pass-field input').on('input', function () {
    //     if ($('.pass-field input').val().length === 0) {
    //         $('.pass-field input').parents('.pass-field').removeClass('filled-input');
    //     } else {
    //         $('.pass-field input').parents('.pass-field').addClass('filled-input');
    //     }
    // });

    // $('.forgot-pass').on('click', function() {
    //     $('.sign-container').addClass('hide-sign');
    //     $('.reset-pass-container').addClass('show-resetpass');
    // });

    // $('.back-to-sign').on('click', function() {
    //     $('.sign-container').removeClass('hide-sign');
    //     $('.reset-pass-container').removeClass('show-resetpass');
    // });

    $('.show-pass').on('click', function () {
        $(this).parents('.pass-field').find('input').prop('type', 'text');
        $(this).hide();
        $(this).next('.hide-pass').show();
    });

    // $('.hide-pass').on('click', function () {
    //     $(this).parents('.pass-field').find('input').prop('type', 'password');
    //     $(this).hide();
    //     $(this).prev('.show-pass').show();
    // });

    if ($('.select2').length > 0) {
        $('.select2').select2({
            minimumResultsForSearch: -1
        });

        $('.select2').on('change', function (e) {
            if ($(this).next('.select2-container').find('.select2-selection__rendered').attr('title') !== '') {
                $(this).next('.select2-container').next('.hide-label').addClass('active-label');
            }
        });

        $('.select2').on('select2:opening', function (e) {
            $(this).next('.select2-container').next('.select-label').addClass('active-label');
        });

        $('.select2').on('select2:closing', function (e) {
            if ($(this).next('.select2-container').find('.select2-selection__rendered').attr('title')) {
            } else {
                $(this).next('.select2-container').next('.select-label').removeClass('active-label');
            }
        });
    }
    if ($('.datepicker').length > 0) {

        $.datepicker._updateDatepicker_original = $.datepicker._updateDatepicker;
        $.datepicker._updateDatepicker = function (inst) {
            $.datepicker._updateDatepicker_original(inst);
            var afterShow = this._get(inst, 'afterShow');
            if (afterShow)
                afterShow.apply((inst.input ? inst.input[0] : null));  // trigger custom callback
        }
        $(".datepicker").datepicker({
            changeMonth: true,
            changeYear: true,
            dayNames: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
            monthNames: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო"],
            dayNamesMin: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
            monthNamesShort: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
            firstDay: 1,
            afterShow: function () {
                $('#ui-datepicker-div').addClass('show');
                $('.ui-datepicker select').select2({
                    minimumResultsForSearch: -1,
                    theme: "datepicker"
                });
                $('.ui-datepicker select').on("select2:open", function () {
                    $('.select2-results').perfectScrollbar();
                });
            },
        });
    }

    if ($('.ps').length > 0) {
        $('.ps').perfectScrollbar();
    }

    const $tabs = document.querySelectorAll(".profile-tab"),
        setActive = (e, $tabs) => {
            e.preventDefault();
            const divId = e.currentTarget.getAttribute("href");

            $tabs.forEach(($tab) => {
                $tab.classList.remove("ai-tabs--active");
            });

            document.querySelectorAll(".profile-info-r").forEach(($content) => {
                $content.classList.remove("ai-tabs__content--active");
            });

            e.currentTarget.classList.add("ai-tabs--active");
            document.querySelector(divId).classList.add("ai-tabs__content--active");
        };

    $tabs.forEach(($tab) => {
        $tab.addEventListener("click", (e) => {
            setActive(e, $tabs);
        });
    });
    $('.checkbox-main').click(function () {
        var pos = $(this).parents('.swiper-slide').offset();
        $('.tt').offset(pos);
        $('.swiper-slide').removeClass('slide-act');
        $(this).parents('.swiper-slide').addClass('slide-act');
    });

    $('.profile-tab').click(function () {
        var pos = $(this).offset();
        $('.outs').offset(pos);
    });

    $('.h-search').click(function () {
        var sr = $('.search-box').offset();
        $(this).offset(sr);
        $('.search-box').addClass('search-box-active');
        $('body').addClass('search-act');
    });

    $('.close-search-bar').click(function () {
        $('.h-search').css('left', '0');
        $('.search-box').removeClass('search-box-active');
        $('body').removeClass('search-act');
    });

    //for catalogue swipers

    // $('.catalogue-filter').click(function () {
    //     $('body').toggleClass('show-catalogue-inside', 1000);
    // });

    function mainSwiper() {
        return new Swiper(".catalogue-swiper", {
            slidesPerView: 1.3,
            spaceBetween: 74,

            direction: 'horizontal',
            mousewheel: {
                enabled: true,
                sensitivity: 5.5,
            },
            init: true,
            on: {
                afterInit: function () {
                    $('.pagenum-last').html('0' + this.slides.length)

                },
                slideChange: function () {
                    if (this.activeIndex == this.slides.length - 1) {
                        $('.pagenum-first').addClass('first-slide-dis')
                        $('.pagenum-last').addClass('last-slide-act')
                    } else {
                        $('.pagenum-last').removeClass('last-slide-act')
                        $('.pagenum-first').removeClass('first-slide-dis')
                    }
                },
            },
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    // function secondSwiper() {
    //     return new Swiper(".catalogue-swiper", {
    //         slidesPerView: 3.4,
    //         grid: {
    //             rows: 2,
    //         },
    //         breakpoints: {
    //             1023: {
    //                 slidesPerView: 2.5,
    //             },
    //             1399: {
    //                 slidesPerView: 3.4,
    //             }
    //         },
    //         spaceBetween: 60,
    //         direction: 'horizontal',
    //         mousewheel: {
    //             enabled: true,
    //             sensitivity: 5.5,
    //         },
    //     })
    // }
    var swiper = mainSwiper();
    // $('.catalogue-filter').click(function () {
    //     swiper.destroy();
    //     if ($('body').hasClass('show-catalogue-inside')) {
    //         swiper = secondSwiper();
    //         function changeOnSlideChange() {
    //             var sliderCount = (100 / swiper.snapGrid.length) * (swiper.activeIndex + 1);
    //             var input = $('input[type="range"]');
    //             input.val(sliderCount);
    //             input.rangeslider('update', true);
    //         }
    //         var sliderCount = (100 / swiper.snapGrid.length) * (swiper.activeIndex + 1);
        
    //         $('input[type="range"]').val(sliderCount).change();
        
    //         $('input[type="range"]').rangeslider({
    //             polyfill: false,
    //             onSlideEnd: function (position, value) {
    //                 var sliderCount = swiper.snapGrid.length;
    //                 swiper.slideTo(Math.ceil(value * sliderCount / 100) - 1, 500, 0)
    //                 changeOnSlideChange();
    //             }
    //         });
            
    //         swiper.on('slideChange', function () {
    //             changeOnSlideChange();
    //         });

    //         $('.swiper-slide').css('width','440px');
    //     }
    //     else {
    //         swiper = mainSwiper();
    //     }
    //     swiper.update();

    // })

    var cataloguetest = new Swiper(".catalogue-swiper1", {
        slidesPerView: 3.4,
        grid: {
            rows: 2,
        },
        breakpoints: {
            // 1023: {
            //     slidesPerView: 2.5,
            // },
            // 1399: {
            //     slidesPerView: 3.4,
            // }
        },
        spaceBetween: 60,
        direction: 'horizontal',
        mousewheel: {
            enabled: true,
            sensitivity: 5.5,
        },
        init: true,
        on: {
            slideChange: function () {
                $('.catalogue-swiper .swiper-slide:first-child').css('transition','none');
                $('.catalogue-swiper .swiper-slide:nth-child(2)').css('transition','none');
                $('.catalogue-swiper .swiper-slide:first-child').css('opacity','0');
                $('.catalogue-swiper .swiper-slide:nth-child(2)').css('opacity','0');
            },
        },
    })

    
    function changeOnSlideChange1() {
        var sliderCount = (100 / cataloguetest.snapGrid.length) * (cataloguetest.activeIndex + 1);
        var input = $('input[type="range"]');
        input.val(sliderCount);
        input.rangeslider('update', true);
    }

    var sliderCount = (100 / cataloguetest.snapGrid.length) * (cataloguetest.activeIndex + 1);

    $('input[type="range"]').val(sliderCount).change();

    $('input[type="range"]').rangeslider({
        polyfill: false,
        onSlideEnd: function (position, value) {
            var sliderCount = cataloguetest.snapGrid.length;
            cataloguetest.slideTo(Math.ceil(value * sliderCount / 100) - 1, 500, 0)
            changeOnSlideChange1();
        },
        onInit: function() {
            var k =$('.rangeslider__handle').position().left;
          
           $('.kak').css('left',k)
        },
    });
    cataloguetest.on('slideChange', function () {
        changeOnSlideChange1();
    });

//     function resizesize() {
        
//     var k = $('.catalogue-swiper1 .swiper-slide:first-child').width();
//     var b = $('.catalogue-swiper1 .swiper-slide:first-child').height();
//     var c = $('.catalogue-swiper .swiper-slide:nth-child(3)').width();
//     var j = $('.catalogue-swiper .swiper-slide:nth-child(3)').height();
//     console.log(k,b,c,j)
//     if($('body').hasClass('showe')) {
//             console.log(233)
//         setTimeout(() => {
//            $('.catalogue-swiper .swiper-slide:first-child').css('width',k);
//            $('.catalogue-swiper .swiper-slide:first-child').css('height',b);
//            $('.catalogue-swiper .swiper-slide:nth-child(2)').css('width',k);
//            $('.catalogue-swiper .swiper-slide:nth-child(2)').css('height',b);
//        }, 20);
//    } else {
//             console.log(555)
//        setTimeout(() => {
//           $('.catalogue-swiper .swiper-slide:first-child').css('width',c);
//           $('.catalogue-swiper .swiper-slide:first-child').css('height',j);
//           $('.catalogue-swiper .swiper-slide:nth-child(2)').css('width',c);
//           $('.catalogue-swiper .swiper-slide:nth-child(2)').css('height',j);
//       }, 20);
//    }
//     }

// $(window).resize(function() {
//     resizesize();
//   });

   $(window).resize(function() {
        if($('body').hasClass('showe')) {
            $('.catalogue-swiper .swiper-slide:first-child').css('transition','none');
            $('.catalogue-swiper .swiper-slide:nth-child(2)').css('transition','none');
            $('.catalogue-swiper .swiper-slide:first-child').css('opacity','0');
            $('.catalogue-swiper .swiper-slide:nth-child(2)').css('opacity','0');
        }
    });
});