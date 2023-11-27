let container=document.getElementById("imageContainer")
var aud=document.createElement("audio")
let game_score;
let score=document.createElement("h2");
score.setAttribute("class","score");
let game_pic=document.createElement("img");
let img_index=0;
let buttons= document.getElementsByClassName("bnt_answer");
let num=[
    { nom:"number1",img:"./images/number/number1.jpeg" ,audi:""   },
    { nom:"number2",img:"./images/number/number2.jpeg" ,audi:""   },
    { nom:"number3",img:"./images/number/number3.jpeg" ,audi:""   },
    { nom:"number4",img:"./images/number/number4.jpeg" ,audi:""   },
    { nom:"number5",img:"./images/number/number5.jpeg" ,audi:""   },
    { nom:"number6",img:"./images/number/number6.jpeg" ,audi:""   },
    { nom:"number7",img:"./images/number/number7.jpeg" ,audi:""   },
    { nom:"number8",img:"./images/number/number8.jpeg" ,audi:""   },
    { nom:"number9",img:"./images/number/number9.jpeg" ,audi:""   },
    { nom:"number10",img:"./images/number/number10.jpeg" ,audi:""   }
] 
let animals=[
    { nom:"bata",img:"./images/animals/bata.jpeg" ,audi:"./audio/animals/bata.mp3"   },
    { nom:"chicken",img:"./images/animals/chicken.png" ,audi:"./audio/animals/chicken.aac"   },
    { nom:"difda3a",img:"./images/animals/difda3a.jpeg" ,audi:"./audio/animals/difda3.mpeg"   },
    { nom:"dog",img:"./images/animals/dog.jpg" ,audi:"./audio/animals/dog.aac"   },
    { nom:"elephant",img:"./images/animals/elephant.jpg" ,audi:"./audio/animals/elephant.mpeg"   },
    { nom:"fox",img:"./images/animals/fox.jpeg" ,audi:"./audio/animals/wolf.aac"   },
    { nom:"horse",img:"./images/animals/horse.jpeg" ,audi:"./audio/animals/horse.aac"   },
    { nom:"kitty",img:"./images/animals/kitty.png" ,audi:"./audio/animals/catvoice.aac"   },
    { nom:"lion",img:"./images/animals/lion.jpg" ,audi:"./audio/animals/lion.aac"   },
    { nom:"monkey",img:"./images/animals/monkey.jpeg" ,audi:"./audio/animals/monkey.aac"   },
    
]
let fruits=[
    { nom:"apple",img:"./images/fruits/apple.jpeg" ,audi:""   },
    { nom:"avocado",img:"./images/fruits/avocado.jpeg" ,audi:""   },
    { nom:"cheery",img:"./images/fruits/cheery.jpeg" ,audi:""   },
    { nom:"grapes",img:"./images/fruits/grapes.jpeg" ,audi:""   },
    { nom:"kiwi",img:"./images/fruits/kiwi.jpeg" ,audi:""   },
    { nom:"lemon",img:"./images/fruits/lemon.jpeg" ,audi:""   },
    { nom:"mango",img:"./images/fruits/mango.jpg" ,audi:""   },
    { nom:"pomegranate",img:"./images/fruits/pomegranate.jpeg" ,audi:""   },
    { nom:"watermelon",img:"./images/fruits/watermelon.jpeg" ,audi:""   },
    { nom:"banana",img:"./images/fruits/banana.jpeg" ,audi:""   },

]
let alphabitique=[
    { nom:"a",img:"./images/vegetables/btata.jpeg" ,audi:""   },
    { nom:"b",img:"./images/vegetables/brinjal.jpeg" ,audi:""   },
    { nom:"c",img:"./images/vegetables/chemandar.jpeg" ,audi:""   },
    { nom:"d",img:"./images/vegetables/dera.jpeg" ,audi:""   },
    { nom:"e",img:"./images/vegetables/felfela.jpeg" ,audi:""   },
    { nom:"f",img:"./images/vegetables/ja3da.jpeg" ,audi:""   },
    { nom:"g",img:"./images/vegetables/jelbana.jpeg" ,audi:""   },
    { nom:"h",img:"./images/vegetables/khes.jpeg" ,audi:""   },
    { nom:"i",img:"./images/vegetables/maticha.jpeg" ,audi:""   },
    { nom:"j",img:"./images/vegetables/toma.jpeg" ,audi:""   }
    
]
let image_array=[...animals]
let btn_array=[...animals]


function implimentaion(arra){
    container.innerHTML=""
    arra.forEach(x=>{
        let pucture=document.createElement("img")
        pucture.setAttribute("src",x.img)
        pucture.setAttribute("class","images")
        pucture.setAttribute("onclick",`play_sound("${x.audi}")`)
        container.appendChild(pucture)
    })
}


function play_sound(sound){
    aud.setAttribute("src",sound);
    if(aud.paused){
        aud.play();
    }
    else {
        aud.pause();
    }

}

function game(){
    game_score =10;
    img_index=0;
    container.innerHTML=""
    khlet(image_array);
//add first immage
    remplissage_image(img_index);
//score for kids
    score.textContent="Score :"+game_score +" XP";
//add buttons
    khlet(btn_array);
    let dv_names=document.createElement("div");
    dv_names.setAttribute("class","dv_names")
    btn_array.forEach(x=>{
        let btn=document.createElement("button")
        btn.setAttribute("class","bnt_answer");
        btn.setAttribute("onclick",`check(event)`);
        btn.textContent=x.nom;
        dv_names.appendChild(btn)
    })
    container.appendChild(game_pic)
    container.appendChild(score)
    container.appendChild(dv_names)
}

function remplissage_image(){
    
    game_pic.setAttribute("src",image_array[img_index].img)
    game_pic.setAttribute("id",image_array[img_index].nom)
    game_pic.setAttribute("class","img_game");
    img_index++;
    for(i=0;i<buttons.length;i++){
        buttons[i].disabled=false;
        buttons[i].style.backgroundColor="white"
        buttons[i].style.color="black"
    }
}


function khlet(arra){
    for(let i=0;i<arra.length;i++){
        let ran_index=Math.floor(Math.random()*arra.length);
        [arra[i],arra[ran_index]]=[arra[ran_index],arra[i]]
    } 
}

function check(e){
    let identifiant=e.target.textContent
    let image_id=container.firstChild.id;
   
    if(identifiant==image_id){
        e.target.style.color="white";
        e.target.style.backgroundColor="green";
        game_score+=10;
     
        for(i=0;i<buttons.length;i++){
            buttons[i].disabled=true;
        }
        if(img_index<image_array.length){
        setTimeout(remplissage_image)
         }else{
            congrate_message();
         }
        
    }else{
        e.target.style.color="white";
        e.target.style.backgroundColor="red";
        game_score-=1;

    }
   
    score.textContent="Score :"+game_score +" XP";

}
function congrate_message(){
    let message=document.createElement("h2");
    message.setAttribute("class","message")
   if(game_score>100){

    }else{
        message.textContent="Oops you faild the test ur score is :"+game_score;
        container.innerHTML=message.textContent;
        let try_again=document.createElement("button")
        try_again.setAttribute("class","btn_retry")
        try_again.textContent="try again"
        try_again.setAttribute("onclick","game()")
        container.appendChild(try_again)
    }

}
function start(){
    document.getElementsByClassName("dv_contenu")[0].style.display="flex"
    document.getElementsByClassName("acceuil")[0].style.display="none"
}
// function games(){
//     for(i=0;i<4;i++)
//     {
//         let dv_game=document.createElement("div")
//         dv_game.
//     }
// }
