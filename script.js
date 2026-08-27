
<script>
    document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll('.testimonio-card');
        let currentIndex = 0;

        function resaltarSiguiente() {
            // Quitamos la clase 'active' de la tarjeta actual
            cards[currentIndex].classList.remove('active');
            
            // Calculamos el índice de la siguiente tarjeta
            currentIndex = (currentIndex + 1) % cards.length;
            
            // Añadimos la clase 'active' a la nueva tarjeta destacada
            cards[currentIndex].classList.add('active');
        }

        // Cambia de tarjeta automáticamente cada 15000 milisegundos (15 segundos)
        setInterval(resaltarSiguiente, 15000);
    });
</script>
