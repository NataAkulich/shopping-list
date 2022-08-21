/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const sendItems = document.querySelector('#items');



sendInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {

        const messageText = sendInput.value;

        const newMessage = document.createElement('li');
        newMessage.classList.add('message');
        newMessage.textContent = messageText;

        if (messageText != '') {
            sendItems.append(newMessage);
        }

        //for (let item of newMessage ) {

        newMessage.addEventListener('click', function () {
            newMessage.classList.toggle('done');

        });


        sendInput.value = '';

    }
});
















/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
