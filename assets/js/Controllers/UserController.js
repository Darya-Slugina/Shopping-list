(function () {
    listController();

    document.querySelector('form').addEventListener('submit', submit);
    document.getElementById('clear').addEventListener('click', clearList);
    document.getElementById('container').addEventListener('click', deleteOrCross);

    function submit(e) {
        e.preventDefault();
        let input = document.querySelector('input');
        if (input.value != '') {
            listStorage.createNote(input.value);
        }
        input.value = '';
        listController();
    }

    function clearList(e) {
        listStorage.clearNotes();
    }

    function deleteOrCross(e) {
        if (e.target.className === 'delete')
            deleteTask(e);
        else {
            crossTask(e);
        } 
    }

    function deleteTask(e) {
        let remove = e.target.parentNode;
        let parentNode = remove.parentNode;
        parentNode.removeChild(remove);
        listStorage.deleteNote(e.target.nextElementSibling.innerHTML);
    }

    function crossTask(e) {
        let element = e.target;
        element.classList.toggle("mystyle");
        listStorage.crossNote(e.target.textContent);
    }
    
})();