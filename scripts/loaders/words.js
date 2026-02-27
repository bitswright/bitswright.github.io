async function loadWords() {
    const container = document.getElementById('words-container');
    try {
        const response = await fetch('https://github.com/bitswright/bitswright.github.io/assets/words.json');
        const data = await response.json();

        if(data.words.length === 0) {
            const errorElement = document.createElement('p');
            errorElement.textContent = 'No words found';
            container.appendChild(errorElement);
            return;
        }
        else {
            data.words.forEach(word => {
                const wordElement = document.createElement('span');
    
                const wordTitleElement = document.createElement('h4');
                const a = document.createElement('a');
                a.textContent = word.name;
                a.href = word.link;
                wordTitleElement.appendChild(a);
    
                wordElement.appendChild(wordTitleElement);
                container.appendChild(wordElement);
            });
        }
    } catch (error) {
        console.error('Failed to load words:', error);
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No words found';
        container.appendChild(errorElement);
    }
}

document.addEventListener('DOMContentLoaded', loadWords);