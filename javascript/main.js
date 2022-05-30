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

                        class recojerYmostrarpaislocal{

                            constructor(paises, imagenes){
                                this.pais = paises;
                                this.imagen = imagenes;
                            }
                            
                            pedirdatos(){
                                const mostrarco = document.getElementById('mostrarPais');
                                // const mostrarpais = document.createElement('div');

                                // mostrarpais.className = "Modificar_div";
                                // mostrarpais.textContent = "Asique vas a " + this.pais;
                                // mostrarco.appendChild(mostrarpais);
                                mostrarco.innerHTML = `
                                <input type="text" id="viaje" placeholder="${this.pais}" disabled="" ">
                                `
                                // if(mostrarco.contains(input) ){

                                //     setTimeout(()=>{
                                //         mostrarpais.textContent = '';
                                //        },3000);

                                       const mostrarImagen = document.getElementById('cargarImg');
                                       mostrarImagen.innerHTML = `
                                       <ul class="listaPublicar">
                                       <div class="caja_hover">
                                       <li class="limostrar">${paisbuscar.nombre}</li>
                                       </div>
                                       <li class="liimg"><img src="${paisbuscar.imagen}" class="chico"></li>
                                       </ul>
                                       `
                                
                 
                            };

                            
                            // cuentas(){
                            //     const select = document.getElementById('seleccion');
                            //     select.innerHTML = `
                            //     <option value="">Cuotas</option>
                            //     <option value="">3</option>
                            //     <option value="">6</option>
                            //     <option value="">12</option>
                            //     `
                            // }
                        };

                    

                        // const select = document.getElementById('seleccion');
                        const opcion = document.querySelectorAll('#opcion');
                      
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
                        }
                        

                        botonCompra.addEventListener('click',()=>{
              
                            const cotizador = document.querySelector('#cotizador');
                    
                            cotizador.className = 'duplicar';

                            let pais = [];
                            // let infoPais = localStorage.getItem('paises');

                            const paisseleccionado = buscador.value.toLowerCase();
                            pais.push(paisseleccionado);
                            localStorage.setItem('paises', JSON.stringify(paisseleccionado))
                        

                            const mostrarStorage = JSON.parse( localStorage.getItem('paises'));
                            const nuevoviaje = new recojerYmostrarpaislocal(mostrarStorage);
                            nuevoviaje.pedirdatos();
                            // nuevoviaje.cuentas();
                            const pagar = document.getElementById('pagar');

                            pagar.addEventListener('click',realizarComprar)
                           
                            // const mostrarImagen = document.getElementById('cargarImg');
                            // mostrarImagen.innerHTML = `
                            // <img src="${paisbuscar.imagen}" class="chico">
                            // `
                
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