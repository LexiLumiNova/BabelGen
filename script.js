const customTextInput = document.getElementById('custom-text');
const wordCountSelect = document.getElementById('word-count');
const generateButton = document.getElementById('generate-button');
const outputDiv = document.getElementById('output');

generateButton.addEventListener('click', () => {
    const customText = customTextInput.value.trim();
    const wordCount = parseInt(wordCountSelect.value);

    let outputText = '';

    if (customText !== '') {
        const words = customText.split(' ');
        for (let i = 0; i < wordCount; i++) {
            outputText += words[i % words.length] + ' ';
        }
    } else {
        const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        const loremIpsumWords = loremIpsumText.split(' ');
        for (let i = 0; i < wordCount; i++) {
            outputText += loremIpsumWords[i % loremIpsumWords.length] + ' ';
        }
    }

    outputDiv.innerText = outputText.trim();
});
