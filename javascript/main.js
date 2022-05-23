const buscador = document.querySelector('#buscador');
const boton = document.getElementById('boton');
const mostrar = document.getElementById('mostrar');

const paises = async()=>{
    const responsepaises = await fetch("/javascript/jsons/main.json")
    const pais = await responsepaises.json();
    
    function buscarPais(){

        pais.forEach((paises)=>{
        
            const filtrarPais = ()=>{
                mostrar.innerHTML = '';

                const texto = buscador.value.toLowerCase();
                for(let paisbuscar of pais){
                    let nombrePais = paisbuscar.nombre.toLowerCase();

                    if(nombrePais.indexOf(texto) !== -1){
                        mostrar.innerHTML += `
                        <div class="card">
                        <ul>
                        <li>${paisbuscar.nombre}</li>
                        <li>valor: $${paisbuscar.valor}  </li>
                        <li><img src="${paisbuscar.imagen}" class="chico"></li>
                        <a href="#" class="botonCompra">Comprar</a>
                        </ul>
                        </div>
                        `             
                    }
                }
                if(mostrar.innerHTML === ''){
                    mostrar.innerHTML += `
                    <ul class="errorlista">
                    <li class="error">Pais no encontrado  </li>
                    </ul>
                    ` 
                }
            }
                
               
    
    
         
            
            
            filtrarPais()
        });
    }
        boton.addEventListener('click', buscarPais)

}

paises();