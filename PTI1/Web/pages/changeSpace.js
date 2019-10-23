(function ($){
    function changeSpace(e){
        var index = $('#id_space').val();
        $.ajax({
            url: "http://192.168.223.65:8080/spaces"+'/'+index,
            type:'PUT',
            dataType:'json',
            contentType: "application/json; charset=utf-8",
            data:JSON.stringify({"name":$('#name').val(), "description":$('#description').val(),"map_path":$('#path').val(), "map_width":$('#larg').val(),"map_length":$('#compr').val(),"id_user":$('#id_user').val()}),
            processData: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer "+Cookies.get('token'));
             },
            success:function(response){
                console.log(JSON.stringify(response));
                alert(response);
                window.location.href = "espacevisual.html";
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
              }
        });
        e.preventDefault();
    }
    $('#alt').click( changeSpace );
}(jQuery));
    