import { dom_components, form_components } from './dom.js'

const loading = (() => {
    M.FormSelect.init(dom_components.selectF, {});
    M.Modal.init(dom_components.modalT, {});
    M.toast({
        html: 'Welcome to PlayTIC',
        classes: 'blue darken-1 rounded',
        displayLength: 2000
    });
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




export { loading , listenerEvent }