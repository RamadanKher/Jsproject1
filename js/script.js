var mainButtom=document.getElementById("mainBotton")
var outbout=document.getElementById("outbot")
var qutos=[

    '"Beware of what you become in pursuit of what you want."</br>--Jim Rohn',
    '"It\'s not what happens to you, but how you react to it that matters."</br>--Epictetus',
    '"The best revenge is massive success."</br>--Frank Sinatra  ',
    '"You miss 100% of the shots you don\'t take."</br>--Wayne Gretzy',
    '"Resentment is like drinking poison and waiting for your enemies to die."</br>--Nelson Mandela',
    '"Do not take life too seriously. You will not get out alive."</br>--Elbert Hubbard',
    
    
]
mainButtom.addEventListener("click",function () {
   var random=qutos[Math.floor(Math.random()*qutos.length)]
   outbout.innerHTML=random
})