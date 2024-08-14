"use strict";
// script.ts
const dixTextArea = document.getElementById('dixTextArea');
const saveButton = document.getElementById('saveButton');
const editorContainer = document.querySelector('.editor-container');
const togleeModeBtn = document.querySelector('#toggle-mode-btn');
let isDarkMode = false;
togleeModeBtn === null || togleeModeBtn === void 0 ? void 0 : togleeModeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    editorContainer === null || editorContainer === void 0 ? void 0 : editorContainer.classList.toggle('dark-mode', isDarkMode);
    dixTextArea.classList.toggle('light-mode', !isDarkMode);
});
saveButton.addEventListener('click', () => {
    const dixContent = dixTextArea.innerHTML;
    // Create a Blob with the DixScript content
    const blob = new Blob([dixContent], { type: 'text/plain' });
    // Prompt the user to save the file
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'testDixFile.dix'; // Set the desired filename
    a.click();
    // Clean up the URL object
    URL.revokeObjectURL(a.href);
    saveButton.classList.add('clicked');
    setTimeout(() => {
        saveButton.classList.remove('clicked');
    }, 300);
});
dixTextArea.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode;
    const cursorPosition = dixTextArea.selectionStart;
    const text = dixTextArea.value;
    const char = String.fromCharCode(keyCode);
    //fix this moset keycodes incorrect
    console.log(keyCode);
    if (keyCode === 57 || keyCode === 48) { // (
        dixTextArea.value = text.substring(0, cursorPosition) + '(' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
    }
    else if (keyCode === 219) { // {
        e.preventDefault();
        dixTextArea.value = text.substring(0, cursorPosition) + '{}' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
        
    }
    else if (keyCode === 123) { // {
        dixTextArea.value = text.substring(0, cursorPosition) + '}' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
    }
    else if (keyCode === 221) { // ]
        dixTextArea.value = text.substring(0, cursorPosition) + ']' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
    }
    else if (keyCode === 125) { // }
        dixTextArea.value = text.substring(0, cursorPosition) + '}' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
    }
    else if (keyCode === 41) { // )
        dixTextArea.value = text.substring(0, cursorPosition) + ')' + text.substring(cursorPosition);
        dixTextArea.selectionStart = cursorPosition + 1;
        dixTextArea.selectionEnd = cursorPosition + 1;
    }
    else if (keyCode === 8) { //backspace
    }
});
