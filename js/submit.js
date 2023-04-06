$(document).ready(function () {
    $('#luas-segitiga').submit(function () {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            beforeSend: function () {
                $('#loading-luas-segitiga').show();
                $('#result-luas-segitiga').hide();
            },
            success: function (data) {
                $('#loading-luas-segitiga').hide();
                $('#result-luas-segitiga').fadeIn('slow').html(data);
            }
        });
        return false;
    });
})

$(document).ready(function () {
    $('#keliling-segitiga').submit(function () {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            beforeSend: function () {
                $('#loading-keliling-segitiga').show();
                $('#result-keliling-segitiga').hide();
            },
            success: function (data) {
                $('#loading-keliling-segitiga').hide();
                $('#result-keliling-segitiga').fadeIn('slow').html(data);
            }
        });
        return false;
    });
})

$(document).ready(function () {
    $('#luas-jajargenjang').submit(function () {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            beforeSend: function () {
                $('#loading-luas-jajargenjang').show();
                $('#result-luas-jajargenjang').hide();
            },
            success: function (data) {
                $('#loading-luas-jajargenjang').hide();
                $('#result-luas-jajargenjang').fadeIn('slow').html(data);
            }
        });
        return false;
    });
})

$(document).ready(function () {
    $('#keliling-jajargenjang').submit(function () {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            beforeSend: function () {
                $('#loading-keliling-jajargenjang').show();
                $('#result-keliling-jajargenjang').hide();
            },
            success: function (data) {
                $('#loading-keliling-jajargenjang').hide();
                $('#result-keliling-jajargenjang').fadeIn('slow').html(data);
            }
        });
        return false;
    });
})