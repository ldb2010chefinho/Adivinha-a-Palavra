function addUser(){
    player1Name = document.getElementById("Player1NameINput").value;
    player2Name = document.getElementById("Player2NameINput").value;
    localStorage.setItem("player1Name",player1Name);
    localStorage.setItem("player2Name",player2Name);
    window.location ="game_page.html"
};