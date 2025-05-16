class HoroscopeView {
    constructor() {
        this.birthDateInput = document.getElementById('birthDate');
        this.consultBtn = document.getElementById('consultBtn');
        this.dateError = document.getElementById('dateError');
        this.horoscopeResult = document.getElementById('horoscopeResult');
        this.horoscopeText = document.getElementById('horoscopeText');
        this.horoscopeEmoji = document.getElementById('horoscopeEmoji');
        
        // Inicializar el resultado como oculto
        this.horoscopeResult.classList.add('hidden');
    }

    bindValidateDate(handler) {
        this.birthDateInput.addEventListener('input', (event) => {
            handler(event.target.value);
        });
    }

    bindConsultHoroscope(handler) {
        this.consultBtn.addEventListener('click', () => {
            handler(this.birthDateInput.value);
        });
    }

    toggleButton(enabled) {
        this.consultBtn.disabled = !enabled;
    }

    showDateError(message) {
        this.dateError.textContent = message;
        this.dateError.style.display = message ? 'block' : 'none';
    }

    showHoroscope(result) {
        this.horoscopeText.textContent = result.message;
        this.horoscopeEmoji.textContent = result.emoji;
        this.horoscopeResult.classList.remove('hidden');
        this.horoscopeResult.classList.add('visible');
    }

    hideHoroscope() {
        this.horoscopeResult.classList.remove('visible');
        this.horoscopeResult.classList.add('hidden');
    }
}