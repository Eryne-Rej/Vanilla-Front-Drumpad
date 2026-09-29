window.addEventListener("keydown" , keydown)

function keydown(e){
   document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`).play()
   // sert a faire fonctionner l'audio
   
   document.querySelector(`div[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`).classList.add("playing")
   // animation de boutton activer

   document.querySelector(`div[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`).addEventListener("transitionend" , soundend)

   function soundend(){
    document.querySelector(`div[data-key="${e.key.toUpperCase().charCodeAt(0)}"]`).classList.remove("playing")
   }

}

let beatBix = document.getElementById("beatbox")
beatBix.addEventListener('click' , beatBox)

function beatBox(){

  function simulateKey (toucheAppuyer){
   window.dispatchEvent(new KeyboardEvent('keydown', {'key': toucheAppuyer}))
  }

  function playBeat (bonSon , timer){
   return new Promise((resolve, reject) => {
      simulateKey(bonSon)
      setTimeout(() => {
         resolve()
      }, timer)
   })
  }

  playBeat("c" , 1000)
   .then(() => playBeat("e", 200))
   .then(() => playBeat("a", 200))
   .then(() => playBeat("s", 200))
   .then(() => playBeat("q"))
}

let registered = document.getElementById("register")
registered.addEventListener('click' , registerSound)

function registerSound(){

   function simulateKey (toucher){
      window.dispatchEvent(new KeyboardEvent('keydown' , {'key': toucher}))
   }

   function regist (sonFait , timer){

   }
}

document.getElementsByClassName("key").addEventListener("keydown", function() {
   console.log("élément enclanché");
});
