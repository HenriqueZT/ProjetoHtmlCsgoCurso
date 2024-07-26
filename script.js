const team1 = "HENRIQUE";
const team2 = "FALLEN";
let turn = team1;

let mapPool = ['Train','Mirage','Cache','Inferno','Cobblestone'];

const turnText = document.querySelector("#turnText");

turnText.innerText=`É a vez da equipe ${turn} Banir o mapa`;

const maps = document.querySelectorAll(".card");


function choosemap(event) {
    if(turn == team1){
        turn = team2;
    }else{
        turn = team1;
    }
    turnText.innerText=`É a vez da equipe ${turn} Banir o mapa`;

    event.currentTarget.classList.add('selected');

    event.currentTarget.removeEventListener('click', choosemap);

    event.currentTarget.querySelector('.accept').innerText = 'VETADO'

    const clickedMap = event.currentTarget.querySelector('.map-name').innerText;

    mapPool = mapPool.filter(map => map != clickedMap);

    if (mapPool.length == 1){
        const lastMap = document.querySelector('.card:not(.selected)');
        console.log(lastMap);
        lastMap.classList.add('picked');
        lastMap.removeEventListener('click', choosemap);
        lastMap.classList.add('disable-hover');
        turnText.innerText=`O mapa da partida será ${mapPool[0]}`
    }

}



for(let index=0; index < maps.length; index++){
    maps[index].addEventListener("click", choosemap);
}

