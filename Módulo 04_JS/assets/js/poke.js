//GET PokeAPI data
const fetchPokemon = () => {
    const pokename = document.getElementById("pokename");
    let pokeName = pokename.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
            pokeImage("./assets/img/pokeball.png");
            document.getElementById('datos_general').style.display= 'none' ;
            document.getElementById('notfoundpkm').style.display= 'block' ;
        }else if(!res.status){
            pokeImage("./assets/img/pokeball.png");
            document.getElementById('datos_general').style.display= 'none' ;
            document.getElementById('notfoundpkm').style.display= 'block' ;
        }else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            //console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeNamePKM = data.name;
            let pokeHT = data.height;
            let pokeWT = data.weight;
            let pokeNumber = data.id;
            let pokeType = data.types[0].type.name;
            let pokehp = data.stats[0].base_stat;
            let pokeATQ = data.stats[1].base_stat;
            let pokeDef = data.stats[2].base_stat;
            let pokeSPATQ = data.stats[3].base_stat;
            let pokeSPDef = data.stats[4].base_stat;
            let pokeSpeed = data.stats[5].base_stat;
            let move1 = data.moves[0].move.name;
            let move2 = data.moves[1].move.name;
            let move3 = data.moves[2].move.name;
            let move4 = data.moves[3].move.name;
            pokeImage(pokeImg);
            pokeData(pokeNumber, pokeNamePKM,pokeHT,pokeWT);
            pokeTipos(pokeType);
            pokeStatus(pokehp,pokeATQ,pokeDef,pokeSPATQ,pokeSPDef,pokeSpeed);
            pokeMovimientos(move1,move2,move3,move4);
            document.getElementById('datos_general').style.display= 'block' ;
            document.getElementById('notfoundpkm').style.display= 'none' ;
        }
    });
}
//SET image
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
//SET Name height, weight
const pokeData = (labelnum, labelName, labelHT, labelWT) => {
    const pokeNumero = document.getElementById("pokenum");
    const pokeNombre = document.getElementById("pokeNombreRes");
    const pokeHTDatos = document.getElementById("height");
    const pokeWTDatos = document.getElementById("weight");
    pokeNumero.innerHTML = '#'+labelnum+' ';
    pokeNombre.innerHTML = labelName;
    pokeHTDatos.innerHTML = labelHT;
    pokeWTDatos.innerHTML = labelWT;
}
//SET Stats PokeAPI
const pokeStatus = (labelhealth, labelATQ, labelDEF, labelSPATQ, labelSPDEF, labelSpeed) => {
    const pokeHealth = document.getElementById("hpvalue");
    const pokeAtaque = document.getElementById("atkvalue");
    const pokeSPAtque = document.getElementById("spatkvalue");
    const pokeDef = document.getElementById("defvalue");
    const pokeSPDef = document.getElementById("spdefvalue");
    const pokeVelocidad = document.getElementById("speedvalue");
    pokeHealth.innerHTML = labelhealth;
    pokeAtaque.innerHTML = labelATQ;
    pokeSPAtque.innerHTML = labelSPATQ;
    pokeDef.innerHTML = labelDEF;
    pokeSPDef.innerHTML = labelSPDEF;
    pokeVelocidad.innerHTML = labelSpeed;
}
//SET Moves PokeAPI
const pokeMovimientos = (labelmove1, labelmove2, labelmove3, labelmove4) => {
    const movimiento1 = document.getElementById("move1");
    const movimiento2 = document.getElementById("move2");
    const movimiento3 = document.getElementById("move3");
    const movimiento4 = document.getElementById("move4");
    movimiento1.innerHTML = labelmove1;
    movimiento2.innerHTML = labelmove2;
    movimiento3.innerHTML = labelmove3;
    movimiento4.innerHTML = labelmove4;
}
//SET Style PokeType
const pokeTipos = (labelTipo) => {
    const pokeTipo = document.getElementById("type1");
    //case for adding style depending to poketype
    switch(labelTipo){
        case "grass":
            this.className = '';
            pokeTipo.classList.add("grass");
            break;
        case "bug":
            this.className = '';
            pokeTipo.classList.add("bug");
            break;
        case "dark":
            this.className = '';
            pokeTipo.classList.add("dark");
            break;
        case "dragon":
            this.className = '';
            pokeTipo.classList.add("dragon");
            break;
        case "electric":
            this.className = '';
            pokeTipo.classList.add("electric");
            break;
        case "fairy":
            this.className = '';
            pokeTipo.classList.add("fairy");
            break;
        case "fighting":
            this.className = '';
            pokeTipo.classList.add("fighting");
            break;
        case "fire":
            this.className = '';
            pokeTipo.classList.add("fire");
            break;
        case "flying":
            this.className = '';
            pokeTipo.classList.add("flying");
            break;
        case "ghost":
            this.className = '';
            pokeTipo.classList.add("ghost");
            break;
        case "ground":
            this.className = '';
            pokeTipo.classList.add("ground");
            break;
        case "ice":
            this.className = '';
            pokeTipo.classList.add("ice");
            break;
        case "normal":
            this.className = '';
            pokeTipo.classList.add("normal");
            break;
        case "poison":
            this.className = '';
            pokeTipo.classList.add("poison");
            break;
        case "rock":
            this.className = '';
            pokeTipo.classList.add("rock");
            break;
        case "psychic":
            this.className = '';
            pokeTipo.classList.add("psychic");
            break;
        case "steel":
            this.className = '';
            pokeTipo.classList.add("steel");
            break;
        case "water":
            this.className = '';
            pokeTipo.classList.add("water");
            break;
        default:
            console.log("not found");
    }
    pokeTipo.innerHTML = labelTipo;
}

