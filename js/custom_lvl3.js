$(document).ready(function() {
    const HEAD = '/head/';
    const BODY = '/body/';
    const FORMS = '/forms/';
    const ATOMS = '/atoms/';

    //IF HEAD
    if ($('#head').find) {
        $('#head').load('.././components' + HEAD + 'head.html');
    } else {
        console.error('Cabeçalho não encontrado!');
    }

    //IF SIDEBAR
    if ($('#side-bar').find) {
        $('#side-bar').load('.././components' + HEAD + 'sidebar.html');
    } else {
        console.error('Não carregou!');
    }

    //IF MAIN
    if ($('#main').find) {
        $('#main').load('.././components' + BODY + 'main_lvl3.html');
    } else {
        console.error('Não carregou!');
    }

    //IF FOOTER
    if ($('#footer').find) {
        $('#footer').load('.././components' + BODY + 'footer.html');
    } else {
        console.error('Não carregou!');
    }

    //IF PRELOADER
    if ($('#preloader').find) {
        $('#preloader').load('.././components' + ATOMS + 'preloader.html');
    } else {
        console.error('Não carregou!');
    }

});