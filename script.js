//Aguarda o DOM pronto para executar o script

$(document).ready(function)(){

$('loginAluno').submit(function( evento ){})
  var usuario = $('#inputUsuario').val()
  var senha = $(#'inputSenha').val()


//comparar o usuario e a senha com os valores fixados
// usuario = root
// senha = cellep1234
  if(usuario == 'root' && senha == 'cellep1234'){
    $('#mensagem').addClass('alert alert-success alert-dismissible fade show')


    $('#mensagem').text('Usuario Logado !').show().fadeOut(3000)
  }else{
    $('#mensagem').addClass('alert alert-warning alert fade show')

    $('#mensagem').text('Usuario ou senha invalida!').show().fadeOut(3000)
    //bloqueia o evento de submit
    evento.preventDefault()
  }
  }
  
  })