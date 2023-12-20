function calcularprojeto(){
    var tipoproj = document.getElementById('tipoprojeto').value;
    var horasproj = document.getElementById('horasprojeto').value

    var precohora;
    switch(tipoproj){
        case'Website':
            precohora = 50;
            break;
        case 'LandingPage':
            precohora = 40;
            break;
        case 'WebApp':
            precohora = 60;
            break;
        default:
            precohora = 25;
            break  
    }

    var precototal = precohora*horasproj
    document.getElementById('preco').innerHTML = "Preço do Projeto: R$"+ precototal
}