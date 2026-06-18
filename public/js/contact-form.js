/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    // Verificar se deve ser desabilitado para páginas específicas
    if (window.DISABLE_GENERIC_CONTACT_FORM) {
        return;
    }
    
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_telefone = $('input[name=Telefone]').val();
        var user_assunto = $('input[name=assunto]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "" || user_name.length < 3) {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "" || !isValidEmail(user_email)) {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_telefone == "" || user_telefone.length < 10) {
            $('input[name=Telefone]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_assunto == "" || user_assunto.length < 3) {
            $('input[name=assunto]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            // Desabilitar botão e mostrar loading
            $("#submit_btn").prop('disabled', true).text('Enviando...');
            
            //data to be sent to server
            post_data = {
                'name': user_name,
                'email': user_email,
                'Telefone': user_telefone,
                'assunto': user_assunto,
                'message': user_message
            };
            
            //Ajax post data to server
            $.post('php/contact-form-handler.php', post_data, function(response){
            
                //load json data from server and output message     
                if (response.success == false) {
                    output = '<div class="alert alert-danger">' + response.message + '</div>';
                }
                else {
                    output = '<div class="alert alert-success">' + response.message + '</div>';
                    
                    //reset values in all input fields
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('');
                }
                
                $("#result").hide().html(output).slideDown();
                
            }, 'json')
            .fail(function() {
                output = '<div class="alert alert-danger">Erro ao enviar mensagem. Tente novamente mais tarde.</div>';
                $("#result").hide().html(output).slideDown();
            })
            .always(function() {
                // Reabilitar botão
                $("#submit_btn").prop('disabled', false).text('Enviar mensagem');
            });
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
    // Função para validar e-mail
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
});
