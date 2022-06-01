const buscador = document.querySelector('#buscador');
const boton = document.getElementById('boton');
const mostrar = document.getElementById('mostrar');



const paises = async()=>{
    const responsepaises = await fetch("/javascript/jsons/main.json");
    const pais = await responsepaises.json();
    
    function buscarPais(){
        
       
        pais.forEach((paises)=>{
        
            const filtrarPais = ()=>{
                mostrar.innerHTML = '';

                const texto = buscador.value.toLowerCase();

                
                for(let paisbuscar of pais){

                    if(texto === ''){
                 
                    }else{

                        const nombrePais = paisbuscar.nombre;
                        const precioPais = paisbuscar.valor;
                        const imagenPais = paisbuscar.imagen;

                   

                        if(nombrePais.indexOf(texto) !== -1){
 
             
             
               
              
                  
                            mostrar.innerHTML += `
                            <div class="card" id="card">
                            <ul>
                            <li>${nombrePais}</li>
                            <li>valor: $${precioPais} </li>
                            <li><img src="${imagenPais}" class="chico"></li>
                            <a href="#" class="botonCompra" id="botonCompra">Comprar</a>
                            </ul>
                            </div>
                            `             
    
    
                            const botonCompra = document.getElementById('botonCompra');
    
    
                            // STORAGE

                            function guardarStorage(){
                    
                                 localStorage.setItem('dato1',nombrePais)
                                 localStorage.setItem('dato2',precioPais)
                                 localStorage.setItem('dato3',imagenPais)
                               
                                
                                 const nombrepais = localStorage.getItem('dato1');

                                 Toastify({

                                         text:'Seleccionaste ' + nombrepais,
                                                
                                         duration: 3000
                                                
                                        }).showToast();
                                
                            }


                            function mostrarStorage(){

                                const mostrate = document.getElementById('cargarImg');
                                const nombrepais = localStorage.getItem('dato1');
                                const preciopais = localStorage.getItem('dato2');
                                const imagenpais = localStorage.getItem('dato3');
                                const mostrarPais = document.querySelector('#mostrarPais');
                                mostrarPais.innerHTML = `
                                <ul class="listaPublicar">
                                <div class="textosul">
                                <li> ${nombrepais}</li>
                                <li>   ${preciopais}</li>
                                </div>
                                <li>  <img src="${imagenpais}" class="chicoDos"> </li>
                              
                                </ul>
                                   
                                 
                                `
                                     
                        

                            }
                            
                            // COMPRA
                            
                          
                            function realizarComprar(){
                                const precio = paisbuscar.valor;
                                if(precio === paisbuscar.valor){
                               
                                    const select = document.getElementById('seleccion');
                                    const perciofinal =parseInt(precio/select.value);
                                    const tarjeta = document.getElementById('tarjeta');
    
                                   switch(tarjeta.value){
                                       case 'visa':
                                           Swal.fire({
                                               title: 'Su compra fue realizada!',
                                               text: 'Su precio final es de $'+perciofinal + ' al mes' + ' con tu tarjeta: ' + tarjeta.value,
                                               icon: 'success',
                                               confirmButtonText: 'Viajar!'
                                             })
                                             break;
                                      case 'mastercard':
                                           Swal.fire({
                                               title: 'Su compra fue realizada!',
                                               text: 'Su precio final es de $'+perciofinal + ' al mes' + ' con tu tarjeta: ' + tarjeta.value,
                                               icon: 'success',
                                               confirmButtonText: 'Viajar!'
                                             })
                                             break;         
                                             
                                             
                                            }
                                  
    
                                }

                                const cotizador = document.querySelector('#cotizador');
                                cotizador.className = 'nolugar';

                            }
                            
                            
                            // BOTON
                            
                            botonCompra.addEventListener('click',()=>{
                        
    
                                    const cotizador = document.querySelector('#cotizador');
                            
                                    cotizador.className = 'duplicar';


                                    guardarStorage();
                                    mostrarStorage();
                           
                                    
                                    
                                    const pagar = document.getElementById('pagar');
        
                                    pagar.addEventListener('click',realizarComprar)
                                   
                                
    
                              
                                 
                            });
                        }
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

    // localStorage.clear()

