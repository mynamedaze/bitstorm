'use strict';
$(document).ready(function () {
  /*общие данные */
  var tubeInputName = document.getElementById('tube-input-name');
  var tubeInputPhone = document.getElementById('tube-input-phone');

  var inlawInputName = document.getElementById('inlaw-input-name');
  var inlawInputMail = document.getElementById('inlaw-input-mail');

  var stagesInputName = document.getElementById('stages-input-name');
  var stagesInputPhone = document.getElementById('stages-input-phone');

  var popupOkupInputName = document.getElementById('popup-okup-input-name');
  var popupOkupInputPhone = document.getElementById('popup-okup-input-phone');

  var popupCallbackInputName = document.getElementById('popup-callback-input-name');
  var popupCallbackInputPhone = document.getElementById('popup-callback-input-phone');

  var overlay = document.getElementsByClassName('overlay');
  /* */
  /* слайдер utp */
  $(".stages__list-m").owlCarousel({
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false
      }
    }
  });
  /* */
  /*валидация форм*/
  $(tubeInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(stagesInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(popupOkupInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  $(popupCallbackInputPhone).inputmask("+9 (999) 999-9999"); //specifying options
  /* */
  /* запуск видео в intro по нажатию на play */
  var introVideoField = document.getElementsByClassName('intro__video-field');
  var introPlayBtn = document.getElementsByClassName('intro__play-btn');

  $(introPlayBtn).click(function () {
    $(introVideoField).addClass('intro__video-field--active');
    var $video = $('#video'),
      src = $video.attr('src');

    $video.attr('src', src + '&autoplay=1');
  });
  /* */
  /* inlaw получить документы */
  var inlawShowFormBtnText = document.getElementsByClassName('inlaw__show-form-btn');
  var inlawForm = document.getElementsByClassName('inlaw__form');

  $(inlawShowFormBtnText).click(function () {
    $(inlawForm).removeClass('inlaw__form--mobile');
    $(inlawShowFormBtnText).addClass('disable');
  });
  /* */
  /* объявление функции для открытия попапов */
  var popupOkup = document.getElementsByClassName('popup-okup');
  var popupCallback = document.getElementsByClassName('popup-callback');

  function showPopup(popupName) {
    $(overlay).fadeIn(300);
    setTimeout(function () {
      $(popupName).fadeIn(300);
    }, 300);
  };
  /* */
  /* объявление функции для закрытия попапов */
  function hidePopup(popupName) {
    $(popupName).fadeOut(300);
    setTimeout(function () {
      $(overlay).fadeOut(300);
    }, 300);
  }
  /* */
  /* отрабатываем открытие попапов */
  var introRaschetBtn = document.getElementsByClassName('intro__raschet-btn');

  $(introRaschetBtn).click(function () {
    showPopup(popupOkup);
  });

  var pageHeaderCallbackBtn = document.getElementsByClassName('page-header__callback-btn');
  var contactCallbackBtn = document.getElementsByClassName('contact__callback-btn');

  $(pageHeaderCallbackBtn).click(function () {
    showPopup(popupCallback);
  });

  $(contactCallbackBtn).click(function () {
    showPopup(popupCallback);
  });

  /* */
  /* отрабатываем закрытие попапов */
  var popupOkupCloseBtn = document.getElementsByClassName('popup-okup__close-btn');
  var popupCallbackCloseBtn = document.getElementsByClassName('popup-callback__close-btn');
  var popupSuccessCloseBtn = document.getElementsByClassName('popup-success__close-btn');
  var popupSuccess = document.getElementsByClassName('popup-success');
  var popupAlarm = document.getElementsByClassName('popup-alarm');
  var popupAlarmCloseBtn = document.getElementsByClassName('popup-alarm__close-btn');

  setTimeout(function() {
    $(overlay).fadeIn(300);
    setTimeout(function() {
      $(popupAlarm).fadeIn(300);
    }, 300);
  }, 20000);

  $(popupOkupCloseBtn).click(function () {
    hidePopup(popupOkup);
  });

  $(popupCallbackCloseBtn).click(function () {
    hidePopup(popupCallback);
  });

  $(popupSuccessCloseBtn).click(function () {
    hidePopup(popupSuccess);
  });

  $(popupAlarmCloseBtn).click(function () {
    hidePopup(popupAlarm);
  });
  /* */
  /* отправка tube формы */
  var formTube = $('#form-tube');

  formTube.submit(function (ev) {
    $.ajax({
      type: formTube.attr('method'),
      url: formTube.attr('action'),
      data: formTube.serialize(),
      success: function (data) {
        setTimeout(function () {
          $(tubeInputName).val('');
          $(tubeInputPhone).val('');
          $(overlay).fadeIn(300);
          setTimeout(function() {
            $(popupSuccess).fadeIn(300);
          }, 300);
        }, 300);
        yaCounter48676268.reachGoal('form-getplace-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка inlaw формы */
  var inlawForm = $('#inlaw-form');

  inlawForm.submit(function (ev) {
    $.ajax({
      type: inlawForm.attr('method'),
      url: inlawForm.attr('action'),
      data: inlawForm.serialize(),
      success: function (data) {
        setTimeout(function () {
          $(inlawInputName).val('');
          $(inlawInputMail).val('');
          $(overlay).fadeIn(300);
          setTimeout(function() {
            $(popupSuccess).fadeIn(300);
          }, 300);
        }, 300);
        yaCounter48676268.reachGoal('form-getdocs-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка stages формы */
  var stagesForm = $('#stages-form');

  stagesForm.submit(function (ev) {
    $.ajax({
      type: stagesForm.attr('method'),
      url: stagesForm.attr('action'),
      data: stagesForm.serialize(),
      success: function (data) {
        setTimeout(function () {
          $(stagesInputName).val('');
          $(stagesInputPhone).val('');
          $(overlay).fadeIn(300);
          setTimeout(function() {
            $(popupSuccess).fadeIn(300);
          }, 300);
        }, 300);
        yaCounter48676268.reachGoal('form-callback-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка Okup формы */
  var popupOkupForm = $('#popup-okup-form');

  popupOkupForm.submit(function (ev) {
    $.ajax({
      type: popupOkupForm.attr('method'),
      url: popupOkupForm.attr('action'),
      data: popupOkupForm.serialize(),
      success: function (data) {
        $(popupOkup).fadeOut(300);
        setTimeout(function () {
          $(popupOkupInputName).val('');
          $(popupOkupInputPhone).val('');
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter48676268.reachGoal('form-okup-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
  /* отправка Okup формы */
  var popupCallbackForm = $('#popup-callback-form');

  popupCallbackForm.submit(function (ev) {
    $.ajax({
      type: popupCallbackForm.attr('method'),
      url: popupCallbackForm.attr('action'),
      data: popupCallbackForm.serialize(),
      success: function (data) {
        $(popupCallback).fadeOut(300);
        setTimeout(function () {
          $(popupCallbackInputName).val('');
          $(popupCallbackInputPhone).val('');
          $(popupSuccess).fadeIn(300);
        }, 300);
        yaCounter48676268.reachGoal('form-callback-submit');
      }
    });
    ev.preventDefault();
  });
  /* */
});