const chuvasMeteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoro - hemisferio sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for (let chuva of chuvasMeteoros){
    let nomeChuva = chuva.nome;
    let picoChuva = chuva.pico;
    let velocidadeChuva = chuva.velocidade;

    let picoMesDia = picoChuva.split(" ");

    let picoDia = picoMesDia[1];
    let picoMes = picoMesDia[0];

    let picoMesNome = " ";

    switch(picoMes){
        case "Jan":     picoMesNome = "Janeiro";     break;
        case "Mar":     picoMesNome = "Março";     break;
        case "Fev":     picoMesNome = "Fevereiro";     break;
        case "Abr":     picoMesNome = "Abril";     break;
        case "Mai":     picoMesNome = "Maio";     break;
        case "Jul":     picoMesNome = "Julho";     break;
        case "Jun":     picoMesNome = "Junho";     break;
        case "Ago":     picoMesNome = "Agosto";     break;
        case "Set":     picoMesNome = "Setembro";     break;
        case "Out":     picoMesNome = "Outubro";     break;
        case "Nov":     picoMesNome = "Novembro";     break;
        case "Dez":     picoMesNome = "Dezembro";     break;
        default:        picoMesNome = "Mês inválido";    break;
    }

    let picoDataChuvaFormatada = picoDia + " de " + picoMesNome;
    let velocidadeFormatada = velocidadeChuva.replace("km/s", "quilômetros por segundo");


    console.log("Nome: ".padEnd(30, ".") + nomeChuva);
    console.log("Pico: ".padEnd(30, ".") + picoDataChuvaFormatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidadeFormatada);
    console.log("\n")
}
