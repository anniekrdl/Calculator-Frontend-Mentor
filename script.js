//Default theme
setTheme(1);

function setTheme(themeNumber) {
    if (themeNumber === 1) {
        document.documentElement.style.setProperty('--button-color-primary', 'var(--theme-1-secondary-key-background)');
        document.documentElement.style.setProperty('--button-color-shadow-primary', 'var(--theme-1-secondary-key-shadow)');
        document.documentElement.style.setProperty('--button-color-toggle-key', 'var(--theme-1-toggle-key-background)');
        document.documentElement.style.setProperty('--button-color-toggle-key-shadow', 'var(--theme-1-toggle-key-shadow)');
        document.documentElement.style.setProperty('--button-color-secondary', 'var(--theme-1-key-background)');
        document.documentElement.style.setProperty('--button-color-secondary-shadow', 'var(--theme-1-key-shadow)');
        document.documentElement.style.setProperty('--keypad-background', 'var(--theme-1-keypad-background)');
        document.documentElement.style.setProperty('--screen-background', 'var(--theme-1-screen-background)');
        document.documentElement.style.setProperty('--toggle-background', 'var(--theme-1-toggle-background)');
        document.documentElement.style.setProperty('--main-background', 'var(--theme-1-main-background)');
        document.documentElement.style.setProperty('--text-color-primary', 'var(--theme-1-text-primary)');
        document.documentElement.style.setProperty('--text-color-secondary', 'var(--theme-1-text-secondary)');
        document.documentElement.style.setProperty('--text-color-tertiary', 'var(--theme-1-text-secondary)');

        document.documentElement.style.setProperty('--text-color-all', 'var(--theme-1-text-secondary)');

        document.getElementById('btn-1').style.opacity = 1; // Toon knop 1
        document.getElementById('btn-2').style.opacity = 0; // Verberg knop 2
        document.getElementById('btn-3').style.opacity = 0; //



    } else if (themeNumber === 2) {

        document.documentElement.style.setProperty('--button-color-primary', 'var(--theme-2-secondary-key-background)');
        document.documentElement.style.setProperty('--button-color-shadow-primary', 'var(--theme-2-secondary-key-shadow)');
        document.documentElement.style.setProperty('--button-color-toggle-key', 'var(--theme-2-toggle-key-background)');
        document.documentElement.style.setProperty('--button-color-toggle-key-shadow', 'var(--theme-2-toggle-key-shadow)');
        document.documentElement.style.setProperty('--button-color-secondary', 'var(--theme-2-key-background)');
        document.documentElement.style.setProperty('--button-color-secondary-shadow', 'var(--theme-2-key-shadow)');
        document.documentElement.style.setProperty('--keypad-background', 'var(--theme-2-keypad-background)');
        document.documentElement.style.setProperty('--screen-background', 'var(--theme-2-screen-background)');
        document.documentElement.style.setProperty('--toggle-background', 'var(--theme-2-toggle-background)');
        document.documentElement.style.setProperty('--main-background', 'var(--theme-2-main-background)');
        document.documentElement.style.setProperty('--text-color-primary', 'var(--theme-2-text-primary)');
        document.documentElement.style.setProperty('--text-color-secondary', 'var(--theme-2-text-secondary)');
        document.documentElement.style.setProperty('--text-color-tertiary', 'var(--theme-2-text-secondary)');

        document.documentElement.style.setProperty('--text-color-all', 'var(--theme-2-text-primary)');

        document.getElementById('btn-1').style.opacity = 0; // Verberg knop 1
        document.getElementById('btn-2').style.opacity = 1; // Toon knop 2
        document.getElementById('btn-3').style.opacity = 0; // Verberg knop 3

    } else if (themeNumber === 3) {

        document.documentElement.style.setProperty('--button-color-primary', 'var(--theme-3-secondary-key-background)');
        document.documentElement.style.setProperty('--button-color-shadow-primary', 'var(--theme-3-secondary-key-shadow)');
        document.documentElement.style.setProperty('--button-color-toggle-key', 'var(--theme-3-toggle-key-background)');
        document.documentElement.style.setProperty('--button-color-toggle-key-shadow', 'var(--theme-3-toggle-key-shadow)');
        document.documentElement.style.setProperty('--button-color-secondary', 'var(--theme-3-key-background)');
        document.documentElement.style.setProperty('--button-color-secondary-shadow', 'var(--theme-3-key-shadow)');
        document.documentElement.style.setProperty('--keypad-background', 'var(--theme-3-keypad-background)');
        document.documentElement.style.setProperty('--screen-background', 'var(--theme-3-screen-background)');
        document.documentElement.style.setProperty('--toggle-background', 'var(--theme-3-toggle-background)');
        document.documentElement.style.setProperty('--main-background', 'var(--theme-3-main-background)');
        document.documentElement.style.setProperty('--text-color-primary', 'var(--theme-3-text-primary)');
        document.documentElement.style.setProperty('--text-color-secondary', 'var(--theme-3-text-secondary)');
        document.documentElement.style.setProperty('--text-color-tertiary', 'var(--theme-3-text-tertiary)');

        document.documentElement.style.setProperty('--text-color-all', 'var(--theme-3-text-primary)');

        document.getElementById('btn-1').style.opacity = 0; // Verberg knop 1
        document.getElementById('btn-2').style.opacity = 0; // Verberg knop 2
        document.getElementById('btn-3').style.opacity = 1; // Toon knop 3

    }

}


function onThemeNumberClicked(id) {


    console.log("Parent div ID:", id);
    if (id == "btn-1") {
        setTheme(1);
    } else if (id == "btn-2") {
        setTheme(2);
    } else if (id == "btn-3") {
        setTheme(3);
    }
}

var sum = "";


document.querySelectorAll(".b").forEach(item => {
    item.addEventListener("click", function () {
        if (item.innerHTML == "=") {
            calculate()
        } else if (item.innerHTML === "DEL") {
            sum = sum.slice(0, -1);
        } else if (item.innerHTML == "RESET") {
            sum = "";
        } else if ((sum.length === 0 || sum === "-") && (item.innerHTML == "/" || item.innerHTML == "x" || item.innerHTML == "+" || item.innerHTML == "=")) {
            console.log("empty");
        } else if (item.innerHTML == "x") {
            sum += "*";

        } else {
            sum += item.innerHTML;
        }

        document.querySelector(".answer").innerHTML = sum;
    });
});
//Calculator



function setOperator(operator) {

}

function appendNumber(number) {

}

function calculate() {

    try {
        let result = eval(sum);
        document.querySelector(".answer").innerHTML = result;
        sum = String(result);
    } catch (error) {

        document.querySelector(".answer").innerHTML = "Error";
    }
}





