
//-------------------------------------------task1----------------------------------------------------
// В текстове поле вводиться рядок тексту. При натисканні на кнопку має
// виконатись функція. З допомогою методу test об’єкту RegExp функція
// визначає, що введений рядок завершується розширенням .txt, .html
// або .php. Після перевірки функція має вивести повідомлення типу
// «Введено правильне розширення» або «Введе помилкове розширення».
// Для реалізації завдання використати шаблон.
let input1=document.getElementById('input1');
let button1=document.getElementById('button1');
let patt = new RegExp("([a-zA-Z0-9\\s_\\\\.\\-\\(\\):])+(.txt|.html|.php)");

button1.onclick=(ev)=>{
    task1();
    ev.preventDefault();
}

function task1(){
    let res = patt.test(input1.value);
    if(res){
        alert('Введено правильне розширення')
    }else{
        alert('Введено помилкове розширення')
    }
}


//-------------------------------------------task2----------------------------------------------------
//В текстове поле вводиться рядок тексту типу 'aa aba abba abbba abbbbaaa aba abba abbba abbbba
// abbbbba'aa aba abba abbba abbbba. При натисканні на кнопку має виконатись функція. З
// допомогою методу match об’єкту String необхідно знайти всі слова типу
// abba, abbba, abbbba Jслова де є підряд від 2 до 4 символів b) вигляді
// масиву та вивести ці слова у вигляді стовпчика Jкожне слово з нового
// рядка). Для реалізації завдання використати шаблон.

let input2=document.getElementById('input2');
let button2=document.getElementById('button2');
let patt2 = /[a-zA-Z0-9]+([b]{2,4})+[a-zA-Z0-9]+/g;
let result2= document.getElementById('result2');


button2.onclick=(ev)=>{
    task2();
    ev.preventDefault();
}

function task2(){
    let res = input2.value.match(patt2);
    for(let el of res){
        let div=document.createElement('div');
        div.innerText=el;
        result2.appendChild(div);
    }

}

//-------------------------------------------task3----------------------------------------------------
//В текстове поле вводиться рядок тексту типу 'aa aba abba abbba abbbbaaa aba abba abbba abbbba
// abbbbba'aa aba abba abbba abbbba. При натисканні на кнопку має виконатись функція. З
// допомогою методу match об’єкту String необхідно знайти всі слова типу
// aba, в яких літера b зустрічається не менше 3 раз Jвключно). Вивести ці
// слова у вигляді стовпчика Jкожне слово з нового рядка). Для реалізації
// завдання використати шаблон.

let input3=document.getElementById('input3');
let button3=document.getElementById('button3');
const patt3 = /[a-zA-Z0-9]+([b]{2,})+[a-zA-Z0-9]+/g;
let result3= document.getElementById('result3');

button3.onclick=(ev)=>{
    task3();
    ev.preventDefault();
}

function task3(){
    let res = input3.value.match(patt3);
    for(let el of res){
        let div=document.createElement('div');
        div.innerText=el;
        result3.appendChild(div);
    }
}

//-------------------------------------------task4----------------------------------------------------
//В текстове поле вводиться рядок тексту. При натисканні на кнопку має
// виконатись функція. З допомогою методу test об’єкту RegExp функція
// визначає, що перша літера рядка є заголовною латинською JCAPS). Для
// реалізації завдання використати шаблон.

let input4=document.getElementById('input4');
let button4=document.getElementById('button4');
const patt4 = /^[A-Z]/

button4.onclick=(ev)=>{
    task4();
    ev.preventDefault();
}

function task4(){
    let res = patt4.test(input4.value);
    if(res){
        alert('Введено правильне речення')
    }else{
        alert('Введено помилкове речення')
    }}

//-------------------------------------------task5----------------------------------------------------
//В текстове поле вводиться рядок тексту. При натисканні на кнопку має
// виконатись функція. З допомогою методу test об’єкту RegExp функція
// визначає, чи введений рядок є IP-адресою (чотири числа від 0 до 255
// розділені крапками, наприклад, 000.000.000.000). Для реалізації завдання
// використати шаблон.

let input5=document.getElementById('input5');
let button5=document.getElementById('button5');
const patt5 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])$/

button5.onclick=(ev)=>{
    task5();
    ev.preventDefault();
}
function task5(){
    let res = patt5.test(input5.value);
    if(res){
        alert('Введена правильна IP-адреса')
    }else{
        alert('Введена помилкова IP-адреса')
    }
}







