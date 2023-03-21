let rangeSlider = function () {
    let rateSlider = document.getElementById('range-slider');
    noUiSlider.create(rateSlider, {
        start: [75],
        connect: true,
        step: 1,
        range: {
            'min': 1,
            'max': 100
        },
        format: {
            from: function (value) {
                return parseInt(value);
            },
            to: function (value) {
                return parseInt(value);
            }
        }
    });

    rateSlider.noUiSlider.on('update', function (values, handle) {
        $('.range-slider__value').text(values[handle])
    });
}
rangeSlider()