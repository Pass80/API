const body = document.querySelector('body');

fetch('https://picsum.photos/v2/list')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((object) => {
            const figure = document.createElement('figure');
            const image = document.createElement('img');
            image.src = `${object.download_url}`;
            const figureCaption = document.createElement('figurecaption');
            figureCaption.textContent = object.author;
            figure.appendChild(image);
            figure.appendChild(figureCaption);
            body.appendChild(figure);
        });
    });
