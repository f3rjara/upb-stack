document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    M.toast({
        html: 'Data updated Successfully',
        classes: 'red darken-1 rounded'
    });

});
