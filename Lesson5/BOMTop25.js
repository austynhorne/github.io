let input = document.querySelector('input');
let list = document.querySelector('ul');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (input.value.length !=0) {
        let myItem = input.value;
        input.value = ' ';

        let listI = document.createElement('li');
        let listT = document.createElement('span');
        let listB = document.createElement('button');

        listI.appendChild(listT);
        listT.textContent = myItem;
        listI.appendChild(listB);
        listB.textContent = "\u274C";
        list.appendChild(listI);

        listB.addEventListener('click', function(e) {
            list.removeChild(listI);
        })
        input.focus();
    }
})