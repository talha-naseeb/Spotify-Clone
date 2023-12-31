console.log("Welcome to Juttbhadar Spotify");
// console.log(alert('nach punjaban nach'))

//intialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3 ");
let masterPlay= document.getElementById('masterPlay');
let myprogressbar =document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName: "Mortal-Audio", filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songName: "SO Happy-Audio ", filepath: "songs/2.mp3",coverpath: "covers/2.jpg"},
    {songName: "Rubicon Drill-Audio", filepath: "songs/3.mp3",coverpath: "covers/3.jpg"},
    {songName: "waliyaan-Audio", filepath: "songs/4    .mp3",coverpath: "covers/4.jpg"},
    {songName: "Cute-Audio", filepath: "songs/5.mp3",coverpath: "covers/5.jpg"},
    {songName: "Cutevolume1-Audio", filepath: "songs/6.mp3",coverpath: "covers/6.jpg"},

]

songItem.forEach((element ,i) =>{
    // console.log(element, i); 
    element.getElementsByTagName("img")[0].src = songs[i] .coverpath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
} )

// audioElement.play(); 

// Handle play/pause click
masterPlay.addEventListener( 'click',()=>{
    if (audioElement.paused ||  audioElement.currentTime <= 0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})


// Listen to events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar 

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
} )

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
}
)


const makeAllPlays = ()=>{
    Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');  
         element.classList.add('fa-play-circle');   
    })
}


Array.from( document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
     makeAllPlays();
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');  
     e.target.classList.add('fa-pause-circle'); 
     audioElement.src = `songs/${songIndex+1}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex +=1;  
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');    
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0 ){
        songIndex=0;
    }
    else{
        songIndex -=1;  
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');    
})