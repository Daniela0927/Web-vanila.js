document.addEventListener('DOMContentLoaded', () => {
    const model = new HoroscopeModel();
    const view = new HoroscopeView();
    new HoroscopeController(model, view);
});