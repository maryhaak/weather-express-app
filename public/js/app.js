const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const address = search.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch(`/weather?address=${address}`).then(response => 
        response.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error;
                return;
            }

            messageOne.textContent = data.location;
            messageTwo.textContent = data.forecast;
        }))
})