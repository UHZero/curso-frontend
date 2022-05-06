document.querySelectorAll('[wm-nav]').forEach(link => {
    const conteudo = document.getElementById('conteudo')
    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)

    }
})

$('button.btn.btn-light').click(function(){
    $('body').addClass('light-theme')
    $('h1').css('color', 'black')
    $('h1').css('text-shadow', '-5px 3px 4px #3a0080')
    $('.nav-link').css('color', 'black')
    $('.container').css('color', 'black')
    $('a.btn').css('background-color', '#3a0080')
    $('a.btn').css('border-color', '#3a0080')
    $('button.btn:nth-child(4)').css('background-color', '#3a0080')
    $('button.btn:nth-child(4)').css('border-color', '#3a0080')
})


$('button.btn.btn-dark').click(function(){
    $('body').removeClass('light-theme')
    $('h1').css('color', 'white')
    $('h1').css('text-shadow', '-5px 3px 4px #ffd800')
    $('.nav-link').css('color', '#e9ecef')
    $('.container').css('color', '#ffd800')
    $('a.btn').css('background-color', '#ffd800')
    $('a.btn').css('border-color', '#ffd800')
    $('button.btn:nth-child(4)').css('background-color', '#ffd800')
    $('button.btn:nth-child(4)').css('border-color', '#ffd800')
})