function converter(){
    let numero = document.getElementById('numero').value
    numero = parseInt(numero)

    console.log(numero)
    
    let opcao = document.getElementById('opcao').value
    console.log(opcao)

    let Tfahrenheit
    let Tcelsius
    let Tkelvin
    let Trankine

    if(opcao==='f')
    {
        Tfahrenheit = numero;
        Tcelsius = (Tfahrenheit - 32) / 1.8;
        Tkelvin = Tcelsius + 273.15;
        Trankine = Tkelvin * 1.8;
    }
    if(opcao==='c')
    {
        Tcelsius = numero;
        Tfahrenheit = (Tcelsius * 1.8) + 32
        Tkelvin = Tcelsius + 273.15
        Trankine = Tkelvin * 1.8
    }
    if(opcao==='k')
    {
        Tkelvin = numero;
        Tcelsius = Tkelvin - 273.15
        Tfahrenheit = (Tcelsius * 1.8) + 32
        Trankine = Tkelvin * 1.8
    }
    if(opcao==='r')
    {
        Trankine = numero;
        Tkelvin = Trankine / 1.8
        Tcelsius = Tkelvin - 273.15
        Tfahrenheit = (Tcelsius * 1.8) + 32
    }

    console.log(Tfahrenheit,Tcelsius,Tkelvin,Trankine)

    document.getElementById('fahrenheit').toFixed(2).innerText=Tfahrenheit;
    document.getElementById('celsius').innerText=Tcelsius;
    document.getElementById('kelvin').innerText=Tkelvin;
    document.getElementById('rankine').innerText=Trankine;
}