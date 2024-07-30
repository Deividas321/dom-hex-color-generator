document.addEventListener('DOMContentLoaded', () => {
    const hexElement = document.querySelector('.hex');
    const generateButton = document.querySelector('.generate');

    function generateHexColor() {
        const hexChars = '0123456789ABCDEF';
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hexChars[Math.floor(Math.random() * 16)];
        }
        return hexColor;
    }

    generateButton.addEventListener('click', () => {
        const newHexColor = generateHexColor();
        hexElement.textContent = newHexColor;
        document.body.style.backgroundColor = newHexColor;
    });
});