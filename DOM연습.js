


function changeYellow(){
    let el = document.getElementById("loremTitle1");
    // 한번 더 클릭하면 다시 검은색으로 바꿔보세요. 왔다리갔다리
    if(el.style.color == 'yellow'){
        el.style.color = 'black';
    }else{
        el.style.color = 'yellow';
    }
}

//빨간색 배경으로 왔다리 갔다리
function toggleRed(){
    let el = document.getElementsByClassName("changeRed");
    for (let i of el){
        if(i.style.backgroundColor == 'red'){
            i.style.backgroundColor = null;
        }else{
            i.style.backgroundColor = 'red';
        }
    }
}

function useCssSelector(){
    let el = document.querySelector('#para1');
    el.style.color = "green";
}

function makeDom(){
    let heading = document.createElement("h1");
    let maked_text = document.createTextNode("동적으로로 만든 컨텐츠");
    heading.appendChild(maked_text);
    console.log(heading);
    document.getElementById("here").appendChild(heading);
}

function chSizeDouble(){
    let image = document.getElementsByTagName('img');
    for(let el of image){
        el.width *= 2;
    }
}

function chSizeHalf(){
    let image = document.getElementsByTagName('img');
    for(let el of image){
        el.width *= 0.5;
    }
}