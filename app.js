
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado");
    
    try {
        const model = new HoroscopeModel();
        const view = new HoroscopeView();
        new HoroscopeController(model, view);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
        alert("Error crítico: " + error.message);
    }
});