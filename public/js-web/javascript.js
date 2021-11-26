//маски телефонов
$("#exampleInputPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#AppPhone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$("#request-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
$(".phone-mask").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_series").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#wu_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$("#passport_number").mask("999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-year").mask("9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-date").mask("99.99.9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".type-phone").mask("+7 (999) 999 - 99 - 99", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".card-bank").mask("9999 9999 9999 9999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});

$(".monthly-payment1").mask("99999999", {
    // completed: function(){ alert("Вы ввели номер: " + this.val()); }
});


//слайдер занятий
$(document).ready(function() {
    var owl = $('.owl-carousel.job');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: false,
        loop: true,
        responsive: {
            0: {
                items: 2.5
            },
            600: {
                items: 3.5
            },
            1000: {
                items: 5
            }
        }
    })
});

//слайдер логотипов
$(document).ready(function() {
    var owl = $('.owl-carousel.logo-company');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
});

//слайдер адресов офисов
$(document).ready(function() {
    var owl = $('.owl-carousel.addressMobile');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});

//слайдер вопросов и ответов блок №1
$(document).ready(function() {
    var owl = $('.owl-carousel.questions-block-1');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//слайдер вопросов и ответов блок №1
$(document).ready(function() {
    var owl = $('.owl-carousel.questions-block-2');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//слайдер продуктов
$(document).ready(function() {
    var owl = $('.owl-carousel.product');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1.5
            }
        }
    })
});

//слайдер отзывов-1
$(document).ready(function() {
    var owl = $('.owl-carousel.reviews-1');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});
//слайдер отзывов-2
$(document).ready(function() {
    var owl = $('.owl-carousel.reviews-2');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});
//слайдер отзывов-3
$(document).ready(function() {
    var owl = $('.owl-carousel.reviews-3');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//слайдер отзывов-4
$(document).ready(function() {
    var owl = $('.owl-carousel.reviews-4');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//слайдер документов 1
$(document).ready(function() {
    var owl = $('.owl-carousel.documents-1');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});

//слайдер документов 2
$(document).ready(function() {
    var owl = $('.owl-carousel.documents-2');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});

//слайдер преимуществ
$(document).ready(function() {
    var owl = $('.owl-carousel.advantages-1');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
			400: {
                items: 2
            }
        }
    })
});

//слайдер преимуществ
$(document).ready(function() {
    var owl = $('.owl-carousel.advantages-2');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
			400: {
                items: 3
            }
        }
    })
});

//слайдер прослойка 7
$(document).ready(function() {
    var owl = $('.owl-carousel.interlayer-7');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//слайдер получение денег 2
$(document).ready(function() {
    var owl = $('.owl-carousel.receipt-of-money-2');
    owl.owlCarousel({
        margin: 30,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            }
        }
    })
});

//слайдер получение денег 2
$(document).ready(function() {
    var owl = $('.owl-carousel.showcase-1');
    owl.owlCarousel({
        margin: 10,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1.2
            },
			500: {
                items: 2
            },
			800: {
                items: 4
            }
        }
    })
});

//слайдер занятий
$(document).ready(function() {
    var owl = $('.owl-carousel.example-loan');
    owl.owlCarousel({
        margin: 20,
        dots: false,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 1
            }
        }
    })
});

//ползунок
(function() {

    if ($('*').is('#slider-range-thousands') === false) {
        return true;
    }

    var
        result_outptut = $("#revenue"),
        sliderMin = $("#slider-range-thousands"),
        sliderMin2 = $("#slider-range-months"),
        thousands = $('#amount-thousands'),
        months = $('#amount-months'),
        inputAmount = $('#input-thousands'),
        inputAmount2 = $('#input-months'),
        inputAmountClass = $('.input-thousands'),
        inputMonthsClass = $('.input-months'),
        resultAmount = $('#result-amount'),
        resultMonths = $('#result-months');

    var defaultAmount = sliderMin.data('init') || 340,
        defaultMonths = sliderMin2.data('init') || 36;


    var init = function() {
        var
            value1 = parseInt(sliderAmountMap[sliderMin.slider('value')]),
            value2 = parseInt(sliderMin2.slider('value'));
        inputAmount.val(value1);
        inputAmount2.val(value2);

        inputAmountClass.each(function (value1) {
            $(this).val(value1);
        });
        inputMonthsClass.each(function (value2) {
            $(this).val(value2);
        });

        // inputAmountClass.val(value1);
        // inputMonthsClass.val(value2);
        thousands.html(value1 + " 000");
        months.html(value2);
        //$('#current-thousands').html(parseInt(sliderAmountMap[sliderMin.slider('value')]));
        сalculate(value2, value1);
    }



    var calculateParts = function(srokZaima, summaZaima)
    {
        let stavka = $('#calculator').data('stavka-parts') || 30;
        //let stavka = $('#calculator').data('stavka-parts') || 22;
        let mps =  stavka / 100 / 12;
        //return parseInt(summaZaima * (mps / (1 - Math.pow((1 + mps), -srokZaima))));
        return Math.ceil(summaZaima * (mps / (1 - Math.pow((1 + mps), -srokZaima))));
    };

    var calculatePercents = function(srokZaima, summaZaima)
    {
        summ = 0;
        let godovaiaStavka = $('#calculator').data('stavka-percents') || 0.3; //P
        let osnovnoiPlatej = summaZaima / srokZaima; //b
        for (let i = 0; i < srokZaima; i++) {
            ostatokDolga = summaZaima - (osnovnoiPlatej * i);
            min = osnovnoiPlatej + (ostatokDolga) * godovaiaStavka / 12;
            summ += osnovnoiPlatej + (ostatokDolga) * godovaiaStavka / 12;
        }

        return parseInt(min);
    };

    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.innerHTML)) {
                this.oldValue = this.innerHTML;
            } else if (this.hasOwnProperty("oldValue")) {
                this.innerHTML = this.oldValue;
            }
        });
    };
	/*
    var сalculate = function(srokZaima, summaZaima) {
        let type = $('#type-loan').find('.selected').attr('id');
        let fullSummaZaima = (summaZaima * 1000);
        //var htmlPrice = type == 'type-parts' ? calculateParts(srokZaima, fullSummaZaima) : calculatePercents(srokZaima, fullSummaZaima);
        
		var htmlPrice = type == 'type-parts' ? calculateParts(srokZaima, fullSummaZaima) : calculatePercents(srokZaima, fullSummaZaima);
        //htmlPrice += "&nbsp;" + '<span class="ruble"><img src="images/ruble.svg" alt="" /></span>';
        
		/*result_outptut.html(
            htmlPrice
        );*
        
		$('form.application-form input[name="amount_credit"]').val(summaZaima);
        $('form.application-form input[name="loan_term"]').val(srokZaima);
    }
	*/
	
	var сalculate = function(srokZaima, summaZaima) {
        let type = 'revenue';
        let fullSummaZaima = (summaZaima * 1000);
        
		var htmlPrice = type == 'revenue' ? calculateParts(srokZaima, fullSummaZaima) : calculatePercents(srokZaima, fullSummaZaima);

		document.getElementById('revenue').value = htmlPrice + ' ₽';
    }

    // Сформируем набор значений, из того расчета, чтобы 1000 была примерно посередине
    var sliderAmountMap = initSliderRanges(30, 1000, 10, 1000, 3000, 20);;

    sliderMin.slider({
        range: "min",
        //value: defaultAmount,
        value: sliderAmountMap.indexOf(defaultAmount), //array index of onload selected default value on slider, for example, 45000 in same array will be selected as default on load
        min: 0, //the values will be from 0 to array length-1
        max: sliderAmountMap.length-1, //the max length, slider will snap until this point in equal width increments

        slide: function(event, ui) {
            var selectedValue = sliderAmountMap[ui.value];

            thousands.html(selectedValue + " 000");
            inputAmount.val(selectedValue);
            inputAmountClass.each(function (item) {
                $(this).val(selectedValue);
            });
            сalculate(sliderMin2.slider('value'), selectedValue)
        }
    });
    $("#amount-thousands").inputFilter(function(value) {
        return /^\d*$/.test(value) && (parseInt(value) >= 30 && parseInt(value) <= 3000);
    });
    $("#amount-months").inputFilter(function(value) {
        return /^\d*$/.test(value)  && (parseInt(value) >= 2 && parseInt(value) <= 60);;
    });
    $('#amount-thousands').on('keydown keyup', function () {
        sliderMin.slider('value', $(this).html());
        inputAmount.val($(this).html())
        //thousands.html($(this).val());;

        сalculate(sliderMin2.slider('value'), $(this).html());
    });
    $('#amount-months').on('keydown keyup', function () {
        sliderMin2.slider('value', $(this).html());
        inputAmount.val($(this).html())

        сalculate($(this).html(), sliderMin.slider('value'));
    });
    sliderMin2.slider({
        range: "min",
        value: defaultMonths,
        min: 2,
        max: 60,
        step: 1,
        slide: function(event, ui) {
            months.html(ui.value);
            inputAmount2.val(ui.value);
            inputMonthsClass.each(function (item) {
                $(this).val(ui.value);
            });
            сalculate(ui.value, sliderAmountMap[sliderMin.slider('value')]);
        }
    });

    init();


    $('#type-loan').click(function () {
        сalculate(sliderMin2.slider('value'), sliderAmountMap[sliderMin.slider('value')]);
    })

    // sliderMin.slider('option', 'slide').call(init);
})();


//переключатель
jQuery(function($) {
    var $links, $switcher;
    $links = $('[data-show]');
    $switcher = $('.switch-js');
    $switcher.children().not(':first').hide();
    $links.click(function() {
        var id;
        id = '[data-switch="' + $(this).data('show') + '"]';
        $switcher.children(id).show();
        $switcher.children().not(id).hide();
    });
});

$(document).ready(function() {
    $('.switcher li').on('click', changeClass);
});
function changeClass() {
    $('.switcher li').removeClass('selected');
    $(this).addClass('selected');
}


//переключатель2
jQuery(function ($) {
    var $links2, $switcher2;
    $links2 = $('[data-show-2]');
    $switcher2 = $('.switch-js-2');
    $switcher2.children().not(':first').hide();
    $links2.click(function () {
        var id2;
        id2 = '[data-switch-2="' + $(this).data('show-2') + '"]';
        $switcher2.children(id2).show();
        $switcher2.children().not(id2).hide();
    });
});
$(document).ready(function () {
    $('.switcher-2 li').on('click', changeClass2);
});
function changeClass2() {
    $('.switcher-2 li').removeClass('selected');
    $(this).addClass('selected');
}
///////////////////////
//переключатель3самыйнижний
jQuery(function ($) {
    var $links3, $switcher3;
    $links3 = $('[data-show-3]');
    $switcher3 = $('.switch-js-3');
    $switcher3.children().not(':first').hide();
    $links3.click(function () {
        var id3;
        id3 = '[data-switch-3="' + $(this).data('show-3') + '"]';
        $switcher3.children(id3).show();
        $switcher3.children().not(id3).hide();
    });
});
$(document).ready(function () {
    $('.switcher-3 li').on('click', changeClass3);
});
function changeClass3() {
    $('.switcher-3 li').removeClass('selected');
    $(this).addClass('selected');
}


/**
 * **************************************
 * ****** ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ************
 * *********************************
 */
[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});
[].forEach.call(document.querySelectorAll('[data-bg-src]'),    function(img) {
    cssString = "background-image: url("+ img.getAttribute('data-bg-src') +");";
    img.style.cssText = cssString;
    img.onload = function() {
        img.removeAttribute('data-bg-src');
    };
});
/************************************************/
$(document).ready(function() {
    $(".chl").click(function() {
        $(".cities-wrap-3,.cities-main").fadeToggle(500), $(".cities-wrapper").toggleClass("cities-wrapper-2")
    }),

        $(".city-text").click(function() {
            $(".cities-wrapper").fadeToggle(500)
        }),

        $('.cities-a').click(function() {
            $('.cities-a').removeClass("active");
            $(this).addClass("active");
            $(".cities-wrapper").fadeToggle(500)
        }),

        $(".mob-menu-but-h-2").click(function() {
            $(".cities-wrapper").fadeToggle(500)
        })
});
/************************************************/
$(document).ready(function() {
    $('.switcher li').on('click', function() {
        var targetData = $(this).data('modal-id');
        switch (targetData) {
            case "paymentsInfo":
                $('#paymentsInfo').modal().show();
                break;
            case "paymentsCB":
                $('#paymentsCB').modal().show();
                break;
            case "paymentsGrafModal":
                showGraf();
                break;
        }
    });
});
/**
 * График платежей
 */
function showGraf () {
    var paymentGrafModal = $('#paymentsGrafModal');
    paymentGrafModal.find('.payment-table tbody').html("");
    // ежемесячный платеж
    var monthlyPayment = $('#revenue').html();
    var amountMonths = $('#amount-months').html();
    var amountThousands = $('#amount-thousands').html();
    var percent = parseFloat($('#c-percent').html());
    var is = percent / 100;

    // остаток
    var residue = (amountThousands * 1000);

    paymentGrafModal.find('#c-sum').html(amountThousands + " 000");
    paymentGrafModal.find('#c-period').html(amountMonths);

    /*
    Заполним таблицу - график платежей
     */
    var currentResidue = residue;
    var sumPayments = sumPaymentsByPercent = sumPaymentsByDebt = 0;
    for(i=1; i <= amountMonths; i++) {
        /*
         Плата по процентам. сумма в аннуитетном платеже,
         которая идёт на погашение процентов по кредиту;
         */
        var percentPayment = Math.round(currentResidue * is);
        // Расчёт доли тела кредита в аннуитетных платежах
        var debtPayment = Math.round(monthlyPayment - percentPayment);
        // рассчитаем долг на конец месяца в графике аннуитетных платежей
        currentResidue = (currentResidue - debtPayment) >= 0 ? currentResidue - debtPayment : 0;



        /*
        Суммарные значения
         */
        //sumPayments+= Math.ceil(parseFloat(monthlyPayment));
        sumPayments+= Math.round((monthlyPayment));
        sumPaymentsByPercent+= percentPayment;
        sumPaymentsByDebt+= debtPayment;



        var tr = $('<tr></tr>');
        // номер месяца
        tr.append($('<td  class="min-w">'+ i +'</td>'));
        // ежемесячный платеж
        tr.append($('<td>'+ (monthlyPayment) +'</td>'));
        // платеж по процентам
        var dataPercentpp = (percentPayment / monthlyPayment) * 100;
        tr.append($('<td>' +
            '<div style="width: '+dataPercentpp+'%; background: rgba(0,1,177,0.3); height: 25px; float: left; margin-right:-100%;"></div>' +
            '<div style="padding-left:3px;">'
            + ((percentPayment)) +
            '</div>' +
            '</td>'
            )
        );
        // основной платеж
        var dataPercentdp = (debtPayment / monthlyPayment) * 100;
        tr.append($('<td>'  +
            '<div style="width: '+dataPercentdp+'%; background: rgba(15,200,43,0.5); height: 25px; float: left; margin-right:-100%;"></div>' +
            '<div style="padding-left:3px;">'
            + ((debtPayment)) +
            '</div>' +
            '</td>'
            )
        );
        // остаток
        var dataPercentCR = (currentResidue / residue) * 100;
        tr.append($('<td>'+
            '<div style="width: '+dataPercentCR+'%; background: rgba(250,9,6,0.4); height: 25px; float: left; margin-right:-100%;"></div>' +
            '<div style="padding-left:3px;">'
            + ((currentResidue)) +
            '</div>' +
            '</td>'
            )
        );
        paymentGrafModal.find('.payment-table tbody').append(tr);
    }
    // сумма
    var trSum = $('<tr class="font-weight-bolder"></tr>');
    trSum.append($('<td>#</td>'));
    trSum.append($('<td>' + addCommas(mathRounding(sumPayments)) + '</td>'));
    trSum.append($('<td>' + addCommas(mathRounding(sumPaymentsByPercent)) + '</td>'));
    trSum.append($('<td>' + residue + '</td>'));
    trSum.append($('<td></td>'));
    paymentGrafModal.find('.payment-table tbody').append(trSum);

    paymentGrafModal.modal().show();

}

/**
 * Округление до сотых
 * @param num
 * @returns {number}
 */
function mathRounding(num) {
    return Math.ceil((num)*100)/100;
}

/**
 * Добавить разделители в число
 * @param nStr
 * @returns {string}
 */
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ', ' + '$2');
    }
    return x1 + x2;
}

/**
 * Переключение как взять займ
 */
$('#how-get-loan .how-switcher').on('click', function(e){
    e.preventDefault();
    var sectionHowGet = $('#how-get-loan');
    sectionHowGet.find('.how-switcher').toggleClass('selected');
    sectionHowGet.find('.get-step-text').toggleClass('hidden');

});


/**
 * Скрытие раскрытие блока отзывов
 */
$('#rolling-reviews').on('click', function (e) {
    e.preventDefault();
    $('.reviews-rooll').toggleClass('rolled');
    $(this).find('.variant').toggleClass('hidden');

    if(!$('.reviews-rooll').hasClass('rolled')) {
        this.scrollIntoView(false);
    }
});


/**
 * Нажатие открыть/закрыть на аккордионе факов
 */
$('#faq .accordion .collapser').on('click', function(e){
    var card = $(this).parents('.card:first');
    var elId = card.find('.answer').attr('id');
    var icon = $(this).find('.arrow:first');
    icon.toggleClass('down-arrow');
    icon.toggleClass('up-arrow');

    // Пройдем по всем элементам и сделаем иконки выключеными
    var accordion = $(this).parents('.accordion:first');
    $.each(accordion.find('.card'), function(i, val) {
        var currentCard = $(this);
        console.log(elId + " ==" + currentCard.find('.answer').attr('id'));
        if(elId != currentCard.find('.answer').attr('id')) {
            var icon = currentCard.find('.arrow:first');
            icon.addClass('down-arrow');
            icon.removeClass('up-arrow');
        }
    });


});

/**
 * Формирование массива значений, для слайдера суммы. Задача такая:
 * слайдер имеет левые значения и правые, у них могут быть разные шаги
 * @param leftMin минимальное значение
 * @param leftMax максимальное значение до условного разделения
 * @param leftStep шаг левой части
 * @param rightMin мин левое
 * @param rightMax макс правое значение
 * @param rightStep шаг правой части
 * @returns {[]}
 */
function initSliderRanges (leftMin = 30, leftMax = 1000, leftStep = 10, rightMin = 1000, rightMax = 3000, rightStep = 50)
{
    var steps = [];

    for(i = leftMin; i < leftMax; i+=leftStep)
        steps.push(i);

    for(i = rightMin; i <= rightMax; i+=rightStep)
        steps.push(i);
    return steps;
}


$('.orders #rolling-items').on('click', function (e) {
   e.preventDefault();
    $('.orders table tr.other').toggleClass('hidden');
    $('.orders .request-history-item.other').toggleClass('hidden');
    $(this).find('.variant').toggleClass('hidden');
});


// вывод ошибок валидации в модальном окне
if($('.password-recover .errors-list').length) {
    let modalError = $('#error-modal');
    let errorItem = $('.password-recover .errors-list').find('ul li:first');
    modalError.find('.modal-title:first').html(errorItem.html());
    modalError.find('.modal-body:first').html('<p>\n' +
        '                        Проверьте введенные данные или пройдите быструю процедуру\n' +
        '                        <a href="http://lk.avtozaim.loc/registration">регистрации.</a>\n' +
        '                    </p>');
    modalError.modal('show');
}
// вывод сообщения в модальном окне
if($('#modal-alert-message').length) {
    let modalError = $('#error-modal');
    modalError.find('.modal-title:first').html($('#modal-alert-message').html());
    modalError.find('.modal-body:first').html("");
    modalError.modal('show');
}

if($('.container-tooltip').length)
    $('[data-toggle="popover"]').popover(
        {
            container: '.container-tooltip'
        }
    );
else
    $('[data-toggle="popover"]').popover();



if ( $.isFunction($.fn.chosen) ) {
    $(".chzn-selects").chosen();
}

/***
 number - число
 decimals - количество знаков после разделителя
 dec_point - символ разделителя
 separator - разделитель тысячных
 ***/
function number_format(number, decimals, dec_point, separator ) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof separator === 'undefined') ? ',' : separator ,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + (Math.round(n * k) / k)
                .toFixed(prec);
        };
    // Фиксим баг в IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
        .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
        .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
            .join('0');
    }
    return s.join(dec);
}

//знак рубля в input
function addRub (val) {
	return val + " ₽";
}
function removeRub (val) {
	val = val.replace(" ₽", "");
	val = val.replace("₽", "");
	val = val.replace(" ", "");
	return val;
}
$(".monthly-payment").on("input", function () {
	var $this = $(this);
    var val = $this.prop("value");
    var newVal = removeRub(val);
    newVal = addRub(newVal);
    $this.prop("value", newVal);
});


//Недавние сделки
$(function () {
    function nextMsg(i) {
        if (messages.length == i) {
            i = 0;
        }
        $('#deals').html(messages[i]).fadeIn(500).delay(2500).fadeOut(500, function () {
            nextMsg(i + 1);
        });
    };
    let messages = [
        "<img src='images/icon/sedan.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, новая заявка",
        "<img src='images/icon/wagon.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, проверка документов",
        "<img src='images/icon/hatchback.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, новая заявка",
        "<img src='images/icon/crossover.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, проверка документов",
        "<img src='images/icon/bike.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, новая заявка",
        "<img src='images/icon/truck.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, проверка документов",
        "<img src='images/icon/tractor.svg' alt=''> <span class='text-bold text-blue'>Toyota Camry 2015</span>, Новороссийск, выдано 300 000 ₽, новая заявка",
    ];
    $('#deals').hide();
    nextMsg(0);
});

