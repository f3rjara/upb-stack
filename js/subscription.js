function subscription ({ name, email, news, city, aceptOffers, aceptTerms }) {
    this.name = name;
    this.email = email;
    this.news = news;
    this.city = city;
    this.aceptOffers = aceptOffers;
    this.aceptTerms = aceptTerms;
    this.dateCreate = (new Date().toISOString());
};

subscription.prototype = { 
    ShowConf() {
        console.log("Sus configuraciones son las siguientes");
        console.log("Nombre: " + this.name );
        console.log("Correo: " + this.email );
        console.log("Tipo de Noticia: " + this.news );
        console.log("Ciudad: " + this.city );
        console.log("Acepta recibir ofertas?: " + this.aceptOffers );
        console.log("Acepta Terminos y condiciones?: " + this.aceptTerms );
        console.log("Fecha Subscripcion: " + this.dateCreate );
    },

    SaveUser() {
        if (typeof(Storage) !== "undefined") {
            const data = {
                name: this.name,
                email: this.email,
                news: this.news,
                city: this.city,
                aceptOffers: this.aceptOffers,
                aceptTerms: this.aceptTerms,
                date_create: this.dateCreate
            }
            localStorage.setItem("usuario", JSON.stringify(data));
            return { res: true, msj: "Los datos fueron grabados con exito", color:'green' }
        } else {
            return { res: false, msj: "LocalStorage no soportado en este navegador", color:'red' }
        }
        
    }
}

export { subscription }