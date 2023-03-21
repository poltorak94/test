import './index.html';
import './index.scss';
$(document).ready(function () {
    $('.custom-select').each(function () {
        let select = $(this);
        let selectField = select.find('.custom-select__field');
        selectField.select2({
            minimumResultsForSearch: -1,
        });
    });
    $(".range-slider__field").slider({
        min: 0,
        max: 100,
        values: [75],
        slide: function (event, ui) {
            $('.range-slider__value').text(ui.values[0])
        }
    });

    $('.order__form-input-file').on('click', function (e) {
        e.preventDefault();
        $('.order__form-file-hidden').trigger('click');
    })
    $('.order__form-file-hidden').on('change', function () {
        var inputValue = $(this).val();
        var inputValueStr = inputValue.lastIndexOf('\\');
        var fileName = inputValue.substring(inputValueStr + 1);

        let fileSize = parseFloat(this.files[0].size);
        function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) {
                return '0';
            } else {
                var k = 1024;
                var dm = decimals < 0 ? 0 : decimals;
                var sizes = ['байт', 'КБ', 'МБ', 'ГБ', 'ТБ'];
                var i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            }
        }
        $('.order__form-input-file-name').text(fileName + ' ' + formatBytes(fileSize))
    });
    $('.header__burger').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.header').toggleClass('header--active');
    })
})