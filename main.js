$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        
        const listaDeTarefas = $('#nome-tarefa-input').val()
        const novaTarefa = $('<li style = "font-weight:bold;color: blue; font-size: 22px"> </li>');
        $(`<li> ${listaDeTarefas} </li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(2000);
        $('#nome-tarefa-input').val('');
        
    })

    $('ul').on('click','li', function(){
$(this).css('text-decoration', 'line-through')
$(this).css('color','#075515')
    })

    $('#botao-cancelar').click(function(){
        $('li').remove()
    })
    })