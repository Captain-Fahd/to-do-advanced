const addItems = (inputVal) => {
    const existingItems = JSON.parse(localStorage.getItem('items')) || [];

    existingItems.push(inputVal);

    localStorage.setItem('items', JSON.stringify(existingItems));
}

export const addBtnLogic = () => {
    //importing external variables
    const containerDev = document.querySelector('#container');
    const toDoList = document.querySelector('#list');
    const input = document.querySelector('.input');
    //creating the button
    let btn = document.createElement("button");
    btn.classList.add('addBtn');
    btn.innerText = 'Add';
    containerDev.appendChild(btn);
    //Adding the button logic
    btn.addEventListener('click', () => {
        //getting the current value of the input
        let inputVal = input.value;
        //creating a new list item and adding it to the list
        if(inputVal !== ''){
            addItems(inputVal);
            let newItem = document.createElement("li");
            newItem.innerText = inputVal;
            toDoList.appendChild(newItem);
        }
        //clearing the input
        input.value = '';
    })
}

export const clearBtnLogic = () => {
    //creating the button
    const body = document.querySelector('body');
    const clearBtn = document.createElement("button");
    clearBtn.classList.add('clearBtn');
    clearBtn.innerText = 'Clear';
    body.appendChild(clearBtn);
    clearBtn.addEventListener('click', () => {
    //Button functionality for Storage
       let storageItems = [];
        localStorage.setItem('items', JSON.stringify(storageItems));
    //Button functionality for list
        let list = document.querySelector("#list");

        const listItems = list.children;

        for( let i = 0; i < listItems.length; i++ ) {
            list.removeChild(listItems[i]);
        }
    })
}
