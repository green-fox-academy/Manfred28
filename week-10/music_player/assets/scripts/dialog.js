
const dialog = function() {
    $dialogContainer = document.querySelector('.dialog');


    const addCloseButton = function() {
        const $button = document.createElement('button');
        const $xIcon = document.createElement('i');
        $xIcon.classList.add('fa', 'fa-times');
        $button.classList.add('close-button');
        $button.appendChild($xIcon);
        $button.addEventListener('click', function() {
            $dialogContainer.innerHTML = '';
            $dialogContainer.style.display = 'none';
        })
        $dialogContainer.appendChild($button);
    }

    const addAddButton = function(onClickAction, $dataContainer) {
        const $button = document.createElement('button');
        $button.textContent = 'Add';
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
        $closeButton = addCloseButton();
        $dataContainer = addTextInput();
        $button = addAddButton(onActionCallback, $dataContainer);
        $dialogContainer.style.display = 'flex';
    }
    
    const createSelectDialog = function(onActionCallback, data) {
        $dialogContainer.innerHTML = '';
        $closeButton = addCloseButton();
        $dataContainer = addSelect(data);
        $button = addAddButton(onActionCallback, $dataContainer);
        $dialogContainer.style.display = 'flex';
    }
   

    return {
        createTextDialog,
        createSelectDialog
    }
}