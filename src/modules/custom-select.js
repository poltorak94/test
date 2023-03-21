$(document).ready(function () {
    $('.custom-select').each(function () {
        let select = $(this);
        let selectField = select.find('.custom-select__field');
        selectField.select2({
            minimumResultsForSearch: -1,
        });
    });
})