class HoroscopeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.timeoutId = null;

        // Vincular eventos correctamente
        this.view.bindValidateDate(this.handleValidateDate.bind(this));
        this.view.bindConsultHoroscope(this.handleConsultHoroscope.bind(this));
        
        // Inicializar el botón como deshabilitado
        this.view.toggleButton(false);
    }

    handleValidateDate(dateString) {
        const isValid = this.model.validateDate(dateString);
        this.view.toggleButton(isValid);
        this.view.showDateError(isValid ? '' : 'Por favor ingresa una fecha válida en formato DD-MM-AAAA');
    }

    handleConsultHoroscope(dateString) {
        // Validar nuevamente por seguridad
        if (!this.model.validateDate(dateString)) {
            this.view.showDateError('Fecha inválida');
            return;
        }

        // Deshabilitar el botón durante la consulta
        this.view.toggleButton(false);
        
        // Obtener el horóscopo
        const horoscope = this.model.getHoroscope(dateString);
        this.view.showHoroscope(horoscope);
        
        // Limpiar timeout anterior si existe
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        
        // Configurar timeout para ocultar el horóscopo después de 15 segundos
        this.timeoutId = setTimeout(() => {
            this.view.hideHoroscope();
            this.view.toggleButton(true);
            this.timeoutId = null;
        }, 15000);
    }
}