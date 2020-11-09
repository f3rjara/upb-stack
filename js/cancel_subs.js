import { dom_datasubs  } from './dom.js'
import { showMensaje } from './load.js'



const cancel_subs = (() => {
    if ( localStorage.getItem("usuario") !== null ) {
        dom_datasubs.sus_delete.addEventListener('click', function() {
            localStorage.removeItem("usuario");
            showMensaje( 'Tu suscripción ha sido cancelada!', 'red' , 1500 );
            setTimeout(() => {
                location.reload(true);
            }, 1500);
        });
    }
});



export { cancel_subs }