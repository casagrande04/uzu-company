//LIGHT MODE/ DARK MODE
/* var estiloAtual = 1;

function trocarCSS() {
    var estilo = document.getElementById('estilo');

    // Troca entre os estilos ao clicar no botão
    if (estiloAtual === 1) {
        estilo.href = '../style/style.css';
        estiloAtual = 2;
        // trocar imagem claro / escuro
        var img = document.querySelector("#cdg");
        img.setAttribute('src', '../img/cdg.png');

        var img = document.querySelector("#mode");
        img.setAttribute('src', '../img/darkmode.png');
    } else {
        estilo.href = '../style/lightmode.css';
        estiloAtual = 1;
        // trocar imagem claro / escuro
        var img = document.querySelector("#cdg");
        img.setAttribute('src', '../img/cdg-light.png');

        var img = document.querySelector("#mode");
        img.setAttribute('src', '../img/lightmode.png');
    }
} */

function trocarCSS() {
    var estilo = document.getElementById('estilo');

    if (estilo.getAttribute('href') === 'style/style.css') {
        estilo.setAttribute('href', 'style/lightmode.css');

        // trocar imagem claro / escuro
/*         var img = document.querySelector("#cdg");
        img.setAttribute('src', '../img/cdg-light.png');

        var img = document.querySelector("#krueger");
        img.setAttribute('src', '../img/krueger-light.png');

        var img = document.querySelector("#jordan4");
        img.setAttribute('src', '../img/jordan4PG-light.png'); */
    } else {
        estilo.setAttribute('href', 'style/style.css');

        // trocar imagem claro / escuro
/*         var img = document.querySelector("#cdg");
        img.setAttribute('src', '../img/cdg.png');

        var img = document.querySelector("#krueger");
        img.setAttribute('src', '../img/krueger.png');

        var img = document.querySelector("#jordan4");
        img.setAttribute('src', '../img/jordan4PG.png'); */
    }
}
