function setupColorHandlers() {
    const bodyColorInput = document.getElementById('bodyColor');
    const headColorInput = document.getElementById('headColor');

    bodyColorInput.addEventListener('input', () => {
        document.querySelectorAll('.emojiman-body, .emojiman-arm, .emojiman-leg').forEach(el => {
            el.style.backgroundColor = bodyColorInput.value;
        });
        document.querySelector('.emojiman-mouth').style.backgroundColor = bodyColorInput.value;
        const tongueColor = lightenColor(bodyColorInput.value, 20);
        document.querySelector('.emojiman-tongue').style.backgroundColor = tongueColor;
    });

    headColorInput.addEventListener('input', () => {
        document.querySelector('.emojiman-head').style.backgroundColor = headColorInput.value;
    });

    // Function to lighten a color
    function lightenColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => {
            const num = Math.min(255, Math.floor(parseInt(color, 16) + amount));
            return num.toString(16).padStart(2, '0');
        });
    }

    // Function to darken a color
    function darkenColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => {
            const num = Math.max(0, Math.floor(parseInt(color, 16) - amount));
            return num.toString(16).padStart(2, '0');
        });
    }
}