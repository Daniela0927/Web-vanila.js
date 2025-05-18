class HoroscopeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        // 4. Añade logs para depuración
        console.log("Inicializando controlador...");
        console.log("Modelo:", this.model);
        console.log("Vista:", this.view);

        try {
            this.view.bindValidateDate(this.handleDateValidation.bind(this));
            this.view.bindConsultHoroscope(this.handleConsultation.bind(this));
            console.log("Eventos vinculados correctamente");
        } catch (error) {
            console.error("Error al vincular eventos:", error);
        }
    }

    // ... (resto de métodos)
}
