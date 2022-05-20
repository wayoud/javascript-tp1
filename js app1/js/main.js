var countNumber = 4;
var counts = new Array;
for (let i = 0; i < countNumber; i++) {
    counts[i] = localStorage.getItem('count'+i);  
}

for (let i = 0; i < counts.length; i++) {
    if(counts[i] == null){
        localStorage.setItem('count'+i,0)
        counts[i] = localStorage.getItem('count'+i)
     }   
}

var results = new Array;
for (let i = 0; i < countNumber; i++) {
    results[i] = document.getElementById('result'+i)
    console.log('result');
    results[i].innerHTML = counts[i]
}

var btns = new Array;
for (let i = 0; i < countNumber; i++) {
    btns[i] = document.getElementById('btn'+i)
}

for (let i = 0; i < countNumber; i++) {
    btns[i].addEventListener('click',function(){
        counts[i] = parseInt(counts[i]) + 1
        results[i].innerHTML = counts[i]
        localStorage.setItem('count'+i,counts[i])
    })
}

reset.addEventListener('click', function(){
    localStorage.clear()
    window.location.href= "/"
})





