var player1Name=localStorage.getItem("player1Name");
var player2Name=localStorage.getItem("player2Name");
var player1Score = 0;
var player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name + ": ";
document.getElementById("player2_name").innerHTML = player2Name + ": ";

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("player_question").innerHTML = "turno de pergunta- " + player1Name;
document.getElementById("player_answer").innerHTML = "turno de resposta- " + player2Name;


function send(){
    //pegar a palavra inserida pelo usuario e deixar minuscula caso tenha alguma palavra maiuscula
    getWord = document.getElementById("word").value;
    word=getWord.toLowerCase();

    //pegar e substituir as letras
    letra1=word.charAt(1);

    //pegar a letra do meio e se for numero quebrado arredonda para baixo
    meio =Math.floor(word.length/2);
    letra2 =word.charAt(meio);
    //ultima letra da palavra
    fim =word.length-1
    letra3 =word.charAt(fim);

    //substituir letra por traçinho
    remover1 =word.replace(letra1, "_");
    remover2 =remover1.replace(letra2, "_");
    remover3 =remover2.replace(letra3, "_");

    //elementos dinamicos
    question_word="<h4 id='mostrarPalavra'>"+ remover3 + "</h4>";
    input_box="<br>respostas: <input type='text'id='checkBox'>";
    botao="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row= question_word + input_box + botao;
    document.getElementById("output").innerHTML =row;
    document.getElementById("word").value = "";
};

//Aula 92
//Botão checar
var answer_turn = "player2";
var question_turn = "player1";

function check(){
get_answer = document.getElementById("checkBox").value;
resposta=get_answer.toLowerCase();
console.log(resposta);
console.log(word);
if(word == resposta){
    console.log("entrei");
    if(question_turn == "player1"){
        player2Score = player2Score + 1;
        document.getElementById("player2_score").innerHTML = player2Score;
    } else {
     player1Score = player1Score + 1;
     document.getElementById("player1_score").innerHTML = player1Score;   
    };
};
// trocar quem pergunta
if(question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "turno de pergunta- " +player2Name;
} else {
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "turno de pergunta- " +player1Name;  
};
//trocar quem responde
if(answer_turn == "player1"){
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "turno de resposta- " +player2Name;
} else {
    answer_turn = "player1"
    document.getElementById("player_answer").innerHTML = "turno de resposta- " +player1Name;  
};
document.getElementById("output").innerHTML = "";
};
