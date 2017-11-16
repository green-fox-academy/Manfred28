
const dialog = function() {
    $dialogContainer = document.querySelector('.dialog')

    const addButton = function(onClickAction, $dataContainer) {
        const $button = document.createElement('button');
        $button.textContent = 'Submit';
        $button.addEventListener('click', function() {
            onClickAction($dataContainer.value);
            $dialogContainer.style.display = 'none';
        })
        $dialogContainer.appendChild($button);
        return $button;
    }

    const addTextInput = function() {
        $input = document.createElement('input');
        $input.type = 'text';
        $dialogContainer.appendChild($input);
        return $input
    }

    const addSelect = function(data) {
        const $select = document.createElement('select');
        data.forEach(function(element) {
            $select.innerHTML += `
                <option value="${element.id}">${element.title}</option>
            `;
        });
        $dialogContainer.appendChild($select);
        return $select;
    }
    
    const createTextDialog = function(onActionCallback) {
        $dialogContainer.innerHTML = '';
        $dialogContainer.style.display = 'flex';
        $dataContainer = addTextInput();
        $button = addButton(onActionCallback, $dataContainer);
    }
    
    const createSelectDialog = function(onActionCallback, data) {
        $dialogContainer.innerHTML = '';
        $dialogContainer.style.display = 'flex';
        $dataContainer = addSelect(data);
        $button = addButton(onActionCallback, $dataContainer);
    }
   

    return {
        createTextDialog,
        createSelectDialog
    }
}