document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const searchTerm = document.getElementById('searchInput').value;
        // Aquí podrías realizar la lógica de búsqueda, por ejemplo, redirigir a una página de resultados:
        window.location.href = '/buscar?q=' + encodeURIComponent(searchTerm);
        // o mostrar resultados usando AJAX y manipulación del DOM
    });
});
