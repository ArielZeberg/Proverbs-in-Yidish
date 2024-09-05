async function displayRandomQuote() {
    try {
        const response = await fetch('yidish.json');
        const data = await response.json();
        const origin = data.origin;
        const translate = data.translate;
        
        const randomIndex = Math.floor(Math.random() * origin.length);
        const randomQuote = origin[randomIndex];
        const translation = translate[randomIndex];

        const textDiv = document.getElementById('text');
        const borderDiv = document.getElementById('border');
        textDiv.innerText = randomQuote;

        const showTranslate = () => {
            if (textDiv.innerText === randomQuote) {
                textDiv.innerText = translation;
            } 
            else{
                textDiv.innerText = randomQuote;
            }
        };

        textDiv.onclick = showTranslate;
        borderDiv.onclick = showTranslate;

    } catch (error) {
        console.error('Sorry, something went wrong', error);
    }
}

displayRandomQuote();