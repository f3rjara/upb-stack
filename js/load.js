import { dom_components, form_components } from './dom.js'
import { load_data } from './load_data.js'
import { cancel_subs } from './cancel_subs.js'



const loading = (() => {
    M.FormSelect.init(dom_components.selectF, {});
    M.Modal.init(dom_components.modalT, {});
    moment.locale('es');   

    const input = document.getElementById("fr_name");
   
    input.addEventListener("keydown", ev => {
        var code = ev.keyCode || ev.which;
        if(code == 32 && ev.repeat){         
          ev.preventDefault();
        }
    });
    
    input.addEventListener('input', () => {
        var text = input.value;
        input.value = text.replace(/ {2,}/g, ' ');
    });    

    if( localStorage.getItem("usuario") !== null ){
        dom_components.col_form.classList.add("d-none");
        dom_components.col_user.classList.toggle("d-none");
        load_data();
        cancel_subs();
        M.toast({
            html: 'Hola de nuevo! Bienvenido a PlayTIC',
            classes: 'orange darken-1 rounded',
            displayLength: 2000
        });
    }
    else {
        M.toast({
            html: 'Bienvenido a PlayTIC',
            classes: 'blue darken-1 rounded',
            displayLength: 2000
        });
        dom_components.col_form.classList.remove("d-none");

    }

      
});

const listenerEvent = ( () => {
    dom_components.btn_acept.addEventListener('click', () => {
        const modalTerm = M.Modal.init(dom_components.modalT, {});
        modalTerm[0].close();
        form_components.fr_terms.checked = true;
    });
    
    dom_components.btn_cancel.addEventListener('click', () => {
        const modalTerm = M.Modal.init(dom_components.modalT, {});
        modalTerm[0].close();
        form_components.fr_terms.checked = false;
    });
})();


function showMensaje ( msj , color , time)  {
    M.toast({
        html: msj,
        classes: color + ' darken-1 rounded',
        displayLength: time
    });
}

export { loading , listenerEvent, showMensaje }