let data = []; 
$(document).ready(function() {
    $('#button').click(function() {
        if($('#pass').val() === $('#confirm-pass').val()){
            $('input').each(function() {
                data.push($(this).val());
                data = data.filter(function(v){
                    return v!==''
                })
            });
            console.log(data); 
        } else {
            alert("Passwords should be the same!");
        }
    });
});
