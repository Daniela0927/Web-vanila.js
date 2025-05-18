class HoroscopeView {
    constructor() {
        // 1. Verifica que estos IDs coincidan con tu HTML
        this.birthDateInput = document.getElementById('birthDate');
        this.consultBtn = document.getElementById('consultBtn');
        this.dateError = document.getElementById('dateError');
        this.resultContainer = document.getElementById('horoscopeResult');
        this.resultText = document.getElementById('horoscopeText');
        this.emojiDisplay = document.getElementById('horoscopeEmoji');
        
        // 2. Inicializa el botón como deshabilitado
        if (this.consultBtn) {
            this.consultBtn.disabled = true;
        } else {
            console.error("No se encontró el botón con ID 'consultBtn'");
        }
    }

    // 3. Vinculación segura de eventos
    bindValidateDate(handler) {
        if (this.birthDateInput) {
            this.birthDateInput.addEventListener('input', (e) => {
                handler(e.target.value);
            });
        }
    }

    bindConsultHoroscope(handler) {
        if (this.consultBtn) {
            this.consultBtn.addEventListener('click', () => {
                if (!this.consultBtn.disabled) {
                    handler(this.birthDateInput.value);
                }
            });
        }
    }

    // ... (resto de métodos)
}