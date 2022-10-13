$(document).ready(function () {

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
            if($(this).next('.select2-container').find('.select2-selection__rendered').attr('title')) {
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

    if($('.ps').length > 0) {
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
  $('.checkbox-main').click(function(){
      var pos = $(this).parents('.swiper-slide').offset();
      $('.tt').offset(pos);
      $('.swiper-slide').removeClass('slide-act');
      $(this).parents('.swiper-slide').addClass('slide-act');
  });

  $('.profile-tab').click(function(){
    var pos = $(this).offset();
    $('.outs').offset(pos);
  });

  $('.h-search').click(function(){
    var sr = $('.search-box').offset();
    $(this).offset(sr);
    $('.search-box').addClass('search-box-active');
    $('body').addClass('search-act');
  });

  $('.close-search-bar').click(function(){
    $('.h-search').css('left','0');
    $('.search-box').removeClass('search-box-active');
    $('body').removeClass('search-act');
  });
});