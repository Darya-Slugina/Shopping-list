let list = {
    notes:  []
};

let listJson = {};

const listStorage = (function () {

    class Note {
        constructor(note) {
            this.note = note;
            this.class = '';
        }
    }

    class ListStorage {

        constructor() {
            listJson = localStorage.getItem("notes");

            if (
                listJson !== null              
                && (JSON.parse(listJson)).notes.length > 0
            ) {
                list = JSON.parse(listJson);
            } else {
                list.notes = [
                    new Note("Milk"),
                    new Note("Bread"),
                    new Note("Eggs"),
                ];

                this.update(list);
            }
        }

        createNote(text) {
            list.notes.push(new Note(text));
            this.update(list);
        }

        deleteNote(text) {
            list.notes = list.notes.filter(function(el) { return el.note != text; }); 
            this.update(list);
        }

        clearNotes() {
            list.notes = [];
            this.update(list, true);
        }

        update(arrayWithNewData) {
            listJson = JSON.stringify(arrayWithNewData);
            localStorage.setItem("notes", listJson);
            listController();
        }

        crossNote(text) {
            list.notes.forEach(function (el) {
                if (el.note === text) {
                    if (el.class == 'mystyle') {
                        el.class = '';
                    } else {
                        el.class = 'mystyle';
                    }
                }
            });
            this.update(list);
        }
    }

    return new ListStorage();
})();
