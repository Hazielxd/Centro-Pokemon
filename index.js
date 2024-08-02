/*function nombre(value, miCallBack)
{
    setTimeout(() => {
    let dato = "Haziel"
    miCallBack(value, dato) 
    }, 500);

}

function apellido(value, miCallBack)
{
setTimeout(() => {
    let dato = "Sallas"
    miCallBack(value,dato)
}, 800);
}

nombre("Nombre", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);

apellido("Apellido", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);
    })
})

function Futbolista(value, miCallBack)
{
    setTimeout(() => {
    let dato = "Cristiano Ronaldo"
    miCallBack(value, dato) 
    }, 1500);

}

function Goles(value, miCallBack)
{
setTimeout(() => {
    let dato = 847
    miCallBack(value,dato)
}, 500);
}

Futbolista("Futbolista", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);

Goles("Goles", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);
    })
})

function Suma(value, miCallBack)
{
    setTimeout(() => {
    let dato = 535+897
    miCallBack(value, dato) 
    }, 2500);

}

function Resta(value, miCallBack)
{
setTimeout(() => {
    let dato = 897-535
    miCallBack(value,dato)
}, 500);
}

Suma("897 + 535", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);

Resta("897 - 535", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);
    })
})

function Fruta(value, miCallBack)
{
    setTimeout(() => {
    let dato = "1 KG Jitomate"
    miCallBack(value, dato) 
    }, 3500);

}

function Precio(value, miCallBack)
{
setTimeout(() => {
    let dato = "$15.97"
    miCallBack(value,dato)
}, 500);
}

Fruta("Fruta", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);

Precio("Precio $", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);
    })
})

function Verdura(value, miCallBack)
{
    setTimeout(() => {
    let dato = "Platano Chiapas"
    miCallBack(value, dato) 
    }, 4500);

}

function Dinero(value, miCallBack)
{
setTimeout(() => {
    let dato = "$7.90 KG"
    miCallBack(value,dato)
}, 500);
}

Verdura("Fruta", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);

Dinero("Precio $", (value, dato)=>{console.log(`VALOR: ${value} DATO: ${dato}`);
    })
})


let dato = 10

const PROM1 = new Promise((resolve, reject) => {
    if(dato > 5){
        resolve({
            dato,
            op: dato * 1000
        })
    }
    else{
        reject("Todo esta mal en PROM1")
    }
})

console.log(PROM1)

PROM1
    .then((d)=>{
        console.log(d);
    })
    .catch((e)=>{
        console.log(e);
    })

let datos = 10

function PROM2(x){
return new Promise((resolve, reject) => {
    if(x > 5){
        resolve({
            x,
            op: x * 1000
        })
    }
    else{
        reject("Todo esta mal en PROM1")
    }
})
}


PROM2(datos)
    .then((d)=>{
        console.log(d);
    })
    .catch((e)=>{
        console.log(e);
    })

let data = 11

function prom3(x){
    return new Promise((resolve, reject) => {
        if(x > 5){
            setTimeout(() => {
            resolve({
            x,
            op1: x + 5
            })
            }, Math.random ()*2000);
         
        }
        else{
            
            reject({
                ms : "Todo esta mal en PROM1",
            code: 400
    
            })
        }
    })
}
    
prom3(data)
    .then((d)=> {
        console.log(d);
        return d.op1
    })
    .then((element)=>{
        console.log(element);
    })
    .catch((e)=>{
        console.log(e);
    })

    function prom4(x){
        return new Promise((resolve, reject) => {
            if(x > 15){
                setTimeout(() => {
                resolve({
                id: "UNO",
                x,
                op1: x + 500
                })
                }, Math.random ()*1000);
             
            }
            else{
                
                reject({
                    ms : "Todo esta mal en PROM4",
                code: 405
        
                })
            }
        })
    }
        
    prom3(data)
        .then((d)=> {
            console.log(d);
            return prom4(d.op1)
        })
        .then((element)=>{
            console.log(element);
        })
        .catch((e)=>{
            console.log(e); 
        })

        function prom5(x){
            return new Promise((resolve, reject) => {
                if(x > 4){
                    setTimeout(() => {
                    resolve({
                    id: "DOS",
                    x,
                    op1: x + 1000
                    })
                    }, Math.random ()*2000);
                 
                }
                else{
                    
                    reject({
                        ms : "Todo esta mal en PROM4",
                    code: 405
            
                    })
                }
            })
        }
            
        prom3(data)
            .then((d)=> {
                console.log(d);
                return prom5(d.op1)
            })
            .then((element)=>{
                console.log(element);
            })
            .catch((e)=>{
                console.log(e); 
            })

            function prom6(x){
                return new Promise((resolve, reject) => {
                    if(x > 3){
                        setTimeout(() => {
                        resolve({
                        id: "tres",
                        x,
                        op1: x + 2000
                        })
                        }, Math.random ()*2000);
                     
                    }
                    else{
                        
                        reject({
                            ms : "Todo esta mal en PROM4",
                        code: 405
                
                        })
                    }
                })
            }
                
            prom3(data)
                .then((d)=> {
                    console.log(d);
                    return prom6(d.op1)
                })
                .then((element)=>{
                    console.log(element);
                })
                .catch((e)=>{
                    console.log(e); 
                })
                function prom7(x){
                    return new Promise((resolve, reject) => {
                        if(x > 1){
                            setTimeout(() => {
                            resolve({
                            id: "uno",
                            x,
                            op1: x + 3000
                            })
                            }, Math.random ()*2000);
                         
                        }
                        else{
                            
                            reject({
                                ms : "Todo esta mal en PROM4",
                            code: 405
                    
                            })
                        }
                    })
                }
                    
                prom3(data)
                    .then((d)=> {
                        console.log(d);
                        return prom7(d.op1)
                    })
                    .then((element)=>{
                        console.log(element);
                    })
                    .catch((e)=>{
                        console.log(e); 
                    })

async function test(){
    return 5
}

test()
    .then(data=>console.log(data))

async function test2(n){
    return new Promise((resolve, reject) => {
    if( n < 0){
    reject("El numero es negativo")
    }
    let x = n * 5
    resolve(x)
    })
}
    
test2(10)
    .then((d)=>console.log(d))
    
async function test3(n){
    return new Promise((resolve, reject) => {
    if( n < 0){
    reject("El numero es negativo")
    }
    let x = n + 5
    setTimeout(() => {
        resolve(x)
    }, 2000);
    })
}
        
async function resp(){
    let f = await test3(6)
    return f
}
https://pokeapi.co/
resp()
    .then(d=>console.log(d))

fetch("./test.json/test.json")
    .then((data)=>{return data.json()})
    .then((data=>{console.log(data)}))
    .catch(e=>console.log("Error ; ", e))*/

    document.getElementById('btn1').addEventListener('click', async () => {
        const pokemonNameOrId = document.getElementById('inputi').value.toLowerCase().trim();
        const pokemonInfoDiv = document.getElementById('pokemon-info');
    
        // Limpia el contenido anterior antes de realizar una nueva búsqueda
        pokemonInfoDiv.innerHTML = '';
    
        if (pokemonNameOrId) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`);
                if (!response.ok) {
                    throw new Error('No se encontró el Pokémon');
                }
                const pokemon = await response.json();
                
                // Mostrar la información del Pokémon
                pokemonInfoDiv.innerHTML = `
                    <h2 id="pokemon-name">${pokemon.name}</h2>
                    <img id="pokemon-image" src="${pokemon.sprites.front_default}" alt="Imagen del Pokémon">
                    <p>ID: <span id="pokemon-id">${pokemon.id}</span></p>
                    <p>Altura: <span id="pokemon-height">${pokemon.height}</span></p>
                    <p>Peso: <span id="pokemon-weight">${pokemon.weight}</span></p>
                    <p>Tipo(s): <span id="pokemon-types">${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</span></p>
                `;
                pokemonInfoDiv.classList.remove('hidden');
            } catch (error) {
                console.error('Error al obtener el Pokémon:', error);
                pokemonInfoDiv.innerHTML = '<p>No se encontró el Pokémon.</p>';
                pokemonInfoDiv.classList.remove('hidden');
            }
        } else {
            console.error('Por favor, ingresa un nombre o ID de Pokémon válido.');
            pokemonInfoDiv.innerHTML = '<p>Por favor, ingresa un nombre o ID de Pokémon válido.</p>';
            pokemonInfoDiv.classList.remove('hidden');
        }
    });
    