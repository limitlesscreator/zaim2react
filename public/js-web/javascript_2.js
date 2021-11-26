//ползунок
(function() {

    if ($('*').is('#slider-range-thousands-2') === false) {
        return true;
    }

    var
        result_outptut = $("#revenue-2"),
        sliderMin = $("#slider-range-thousands-2"),
        sliderMin2 = $("#slider-range-months-2"),
        thousands = $('#amount-thousands-2'),
        months = $('#amount-months-2'),
        inputAmount = $('#input-thousands-2'),
        inputAmount2 = $('#input-months-2'),
        inputAmountClass = $('.input-thousands-2'),
        inputMonthsClass = $('.input-months-2'),
        resultAmount = $('#result-amount-2'),
        resultMonths = $('#result-months-2');

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
        let type = 'revenue-2';
        let fullSummaZaima = (summaZaima * 1000);
        
		var htmlPrice = type == 'revenue-2' ? calculateParts(srokZaima, fullSummaZaima) : calculatePercents(srokZaima, fullSummaZaima);

		document.getElementById('revenue-2').value = htmlPrice + ' ₽';
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
    $("#amount-thousands-2").inputFilter(function(value) {
        return /^\d*$/.test(value) && (parseInt(value) >= 30 && parseInt(value) <= 3000);
    });
    $("#amount-months-2").inputFilter(function(value) {
        return /^\d*$/.test(value)  && (parseInt(value) >= 2 && parseInt(value) <= 60);;
    });
    $('#amount-thousands-2').on('keydown keyup', function () {
        sliderMin.slider('value', $(this).html());
        inputAmount.val($(this).html())
        //thousands.html($(this).val());;

        сalculate(sliderMin2.slider('value'), $(this).html());
    });
    $('#amount-months-2').on('keydown keyup', function () {
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