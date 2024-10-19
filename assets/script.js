document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons span');
    const screen = document.querySelector('.result');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let screenText = screen.textContent;
            const buttonText = this.textContent;

            if (buttonText === '=') {
                try {
                    screenText = eval(screenText);
                } catch (error) {
                    screenText = 'Error';
                }
            } else if (buttonText === '⌫') {
                screenText = screenText.slice(0, -1);
            } else if (buttonText === '%') {
                screenText = eval(screenText) / 100;
            } else if (buttonText === 'sin') {
                screenText = Math.sin(eval(screenText));
            } else if (buttonText === 'cos') {
                screenText = Math.cos(eval(screenText));
            } else if (buttonText === 'C') {
                screenText = '0';
            } else {
                if (screenText === '0') {
                    screenText = buttonText;
                } else {
                    screenText += buttonText;
                }
            }

            screen.textContent = screenText;
        });
    });

    const clearButton = document.querySelector('.C');
    clearButton.addEventListener('click', function() {
        screen.textContent = '0';
    });
});