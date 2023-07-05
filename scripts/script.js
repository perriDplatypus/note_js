import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

const app = document.getElementById("app");
const view = new NotesView(app, {
	onNoteSelect(id) {
		console.log("Note has been selected " + id);
	}
	, onNoteAdd() {
		console.log("Add a note");
	}
	, onNoteEdit(newTitle, newBody) {
		console.log(newTitle, newBody);
	}
	, onNoteDelete() {
		console.log("Delete");
	}
});

view.udpateNoteList(NotesAPI.getAllNotes());
