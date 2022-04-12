let dragInProgress = false;
import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {PlaylistController} from './playlist';

export class DropzoneController {
	private element: HTMLElement = document.getElementById('dropzone');

	constructor(private playlistController: PlaylistController) {}

	init() {
		this._addEvents();
	}

	private _addEvents() {
		this.element.addEventListener('drop', this.onDrop.bind(this));
		this.element.addEventListener('dragenter', this.onDragenter.bind(this));
		this.element.addEventListener('dragleave', this.onDragleave.bind(this));
		this.element.addEventListener('dragover', this.onDragover.bind(this));
		console.log('dropzone events added');
	}

	onDrop(event: DragEvent) {
		event.preventDefault();
		dragInProgress = false;
		this._updateElementClass();
		const items = event.dataTransfer?.items;
		if (!items) {
			return;
		}
		for (let item of items) {
			const file = item.getAsFile();
			const id = `blob:${file.name}`; //nextFileId();
			Poly.blobs.setVirtualFile(file, id);
			this.playlistController.addFile({
				label: file.name.split('.')[0],
				fileName: file.name,
				url: id,
			});
		}
	}
	onDragover(event: DragEvent) {
		event.preventDefault();
	}
	onDragenter(event: DragEvent) {
		dragInProgress = true;
		this._updateElementClass();
	}
	onDragleave(event: DragEvent) {
		dragInProgress = false;
		this._updateElementClass();
	}

	private _updateElementClass() {
		if (dragInProgress) {
			this.element.classList.add('dragInProgress');
		} else {
			this.element.classList.remove('dragInProgress');
		}
	}
}
