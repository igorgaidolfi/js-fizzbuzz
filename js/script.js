const list = document.querySelector('ul')
for(let i=1; i<=100; i++){
    if(i%15==0){
        let li = `<li style="list-style: none">FizzBuzz</li>`
        list.innerHTML += li
    }
    else if(i%3 == 0){
        let li = `<li style="list-style: none">Fizz</li>`
        list.innerHTML += li
    }else if(i%5==0){
        let li = `<li style="list-style: none">Buzz</li>`
        list.innerHTML += li
    }else{
        let li = `<li style="list-style: none"> ${i} </li>`
        list.innerHTML += li
    }
}