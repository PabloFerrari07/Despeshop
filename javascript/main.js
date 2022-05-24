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
                        <a href="#" class="botonCompra" id="botonCompra">Comprar</a>
                        </ul>
                        </div>
                        `             


                        const botonCompra = document.getElementById('botonCompra');

                        class recojerYmostrarpais {

                            constructor(paiselejido){
                                this.pais = paiselejido
                            }

                            mostrarDatosenInput(){
                                const paisSelecct = document.querySelector('#paisSelecct');
                                paisSelecct.textContent = "";
                            };
                        }

                        class recojerYmostrarpaislocal{

                            constructor(paises){
                                this.pais = paises;
                                // this.email = email;
                            }
                            
                            pedirdatos(){
                                const mostrarco = document.getElementById('mostrarPais');
                                const mostrarpais = document.createElement('div');
                                mostrarpais.textContent = "Tu seleccion fue" + this.pais;
                                mostrarco.appendChild(mostrarpais)
                            };
                        };
                        

                        botonCompra.addEventListener('click',()=>{
                            const cotizador = document.querySelector('#cotizador');
                            cotizador.className = 'duplicar';

                            let pais = [];
                            let infoPais = localStorage.getItem('paises');

                            const paisseleccionado = buscador.value.toLowerCase();
                            pais.push(paisseleccionado);
                            localStorage.setItem('paises', JSON.stringify(paisseleccionado))
                        

                            const mostrarStorage = JSON.parse( localStorage.getItem('paises'));
                            const nuevoviaje = new recojerYmostrarpaislocal(mostrarStorage);
                            nuevoviaje.pedirdatos();

                        });
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