var playerdisplay= document.getElementById('playerdisplay')
var cpudisplay = document.getElementById('cpudisplay')
var board = document.getElementById('board')
var player ;
var playerscore = document.getElementById('playerscore')
var cpuscore  =document.getElementById('cpuscore')
var scorecpu= 0;
var scoreplayer= 0;
var remove = document.getElementById('stone')
var remove1= document.getElementById('paper')
var remove2 = document.getElementById('scisssor')
var restartb = document.getElementById('restart')
var sounddisplay= document.getElementById('sounddisplay')

const sound = new Audio ("HinaCC0_011_Fallen_leaves.mp3")
const lose =new Audio ("mixkit-retro-arcade-lose-2027.wav")
const win=new Audio ('mixkit-video-game-win-2016.wav')
sound.play()
sound.loop=true;




 function cpu(){
    var cpur= Math.ceil(Math.random()*3)
if(cpu==0 || cpur==1){
    cpudisplay.innerHTML='<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=">'
}else if(cpur==2){
    cpudisplay.innerHTML='<img src="https://media.istockphoto.com/vectors/crushed-paper-vector-id1141445221?k=20&m=1141445221&s=170667a&w=0&h=pDK58KeFJTxR0mMKAaQLHqhq6E9VaDrjUMLSJbgZOLU=" alt="">'

}else if(cpur==3){
   cpudisplay.innerHTML='<img src="https://www.ikea.com/in/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s">'

}if( cpur==1 && player==1 || cpur==2 && player==2 || cpur==3 && player==3){
    board.innerHTML='Tie'
}else if (cpur==1 && player==2 || cpur==2 && player==3 || cpur==3 && player==1){
    scoreplayer++
    board.innerHTML='you scored +1'
    playerscore.innerHTML="SCORE :"+scoreplayer
    if(scoreplayer==6){
        board.innerHTML='Congratulation You won'
    remove.style.display='none'
    remove1.style.display='none'
    remove2.style.display='none'
    restartb.style.justifyContent='center'
    restartb.style.position='relative'
    restartb.style.right='9%'
    win.play()
    
    }
}else if (cpur==1 && player==3 || cpur==2 && player==1 || cpur==3 && player==2 ){
    scorecpu++
    board.innerHTML='cpu scored +1'
    cpuscore.innerHTML='SCORE :'+scorecpu

    if(scorecpu==6){
        board.innerHTML='You lose please click retry button'
        remove.style.display='none'
    remove1.style.display='none'
    remove2.style.display='none'
    restartb.style.justifyContent='center'
    restartb.style.position='relative'
    restartb.style.right='9%'
    lose.play();
    
        
    
    }

}

 }


function stoneclick(){
    player= 1;
    playerdisplay.innerHTML='<img src="https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=">'
    cpu();
}
function paperclick(){
    player= 2
    playerdisplay.innerHTML='<img src="https://media.istockphoto.com/vectors/crushed-paper-vector-id1141445221?k=20&m=1141445221&s=170667a&w=0&h=pDK58KeFJTxR0mMKAaQLHqhq6E9VaDrjUMLSJbgZOLU=" alt="">'
    cpu();
}function scissorclick(){
    player= 3
    playerdisplay.innerHTML='<img src="https://www.ikea.com/in/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s">'
    cpu();
}
function restart(){
    document.location.reload()
}function  soundmute(){
    sound.pause();
    
}function unmute(){
    sound.play()
}
