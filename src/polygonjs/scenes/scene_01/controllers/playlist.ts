import {PolySceneWithNodeMap_scene_01} from '../autogenerated/PolySceneWithNodeMap';
import {DropzoneController} from './dropzone';
import {FileAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/File';
import {ICON_DELETE} from './icon';

const PAGE_LOAD_TIMESTAMP = performance.now();
function urlFromFileName(fileName: string) {
	return `/audio/${fileName}?timestamp=${PAGE_LOAD_TIMESTAMP}`;
}

const AUDIO_FILE_NAMES = [
	{label: `The Climb`, fileName: 'sb_theclimb.short.mp3'},
	{label: `Goliath`, fileName: 'sb_goliath.mp3'},
	{label: `Pathfinder`, fileName: 'sb_pathfinder.mp3'},
	{label: `Terminus`, fileName: 'sb_terminus.mp3'},
	{label: `Catalyst`, fileName: 'sb_catalyst.mp3'},
];
let userActionPerformed = false;

interface FileOptions {
	label: string;
	fileName: string;
	url: string;
}

export class PlaylistController {
	private listContainer = document.getElementById('audio-selectors-list');
	private _scene: PolySceneWithNodeMap_scene_01 | undefined;
	private _fileAudioNode: FileAudioNode;
	private _files: FileOptions[] = AUDIO_FILE_NAMES.map((data) => {
		return {
			...data,
			url: urlFromFileName(data.fileName),
		};
	});

	setScene(scene: PolySceneWithNodeMap_scene_01) {
		this._scene = scene;
		this._fileAudioNode = this._scene.node('/positionalAudio1/file_main');
		this._fileAudioNode.onStop(this._playNextMusic.bind(this));
	}

	onSceneReadyAndUserActionPerformed() {
		if (!(this._scene && userActionPerformed)) {
			return;
		}
		this._scene.play();
		const dropzone = new DropzoneController(this);
		dropzone.init();
		this._setupSoundSelectors();
		this._playCurrentMusic();
	}
	fadeInElements() {
		const audioSelectorsContainer = document.getElementById('audio-selectors-container');
		const linksContainer = document.getElementById('links-container');
		const elements = [audioSelectorsContainer, linksContainer];
		for (let element of elements) {
			element.classList.add('fade-in');
		}
	}
	setupSoundNoticeEvents() {
		const noticeContainer = document.getElementById('sound-notice-container');
		const button = document.getElementById('sound-notice-start-button');
		if (!button) {
			return;
		}
		button.addEventListener('click', () => {
			const parent = noticeContainer.parentElement;
			if (parent) {
				parent.removeChild(noticeContainer);
			}
			// this assume scene has been made accessible via window.scene in PolyConfig.js
			userActionPerformed = true;
			this.onSceneReadyAndUserActionPerformed();
			this.fadeInElements();
		});
	}

	addFile(options: FileOptions) {
		this._files.push(options);
		this._setupSoundSelectors();
	}
	private _removeFile(index: number) {
		this._files.splice(index, 1);
		if (this._currentIndex > index) {
			this._currentIndex--;
		}

		this._setupSoundSelectors();
	}

	private _currentIndex = 0;
	private async _playCurrentMusic() {
		const file = this._files[this._currentIndex];
		if (!file) {
			console.log(`no file for index ${this._currentIndex}`);
			return;
		}
		this._fileAudioNode.p.url.set(file.url);
		await this._fileAudioNode.compute();
		this._fileAudioNode.p.restart.pressButton();
	}
	private _playNextMusic() {
		console.warn('playNextMusic');
		const children = Array.from(this.listContainer.children);
		children.forEach((c) => c.classList.remove('active'));
		this._setCurrentIndex(this._currentIndex + 1);
		if (this._currentIndex >= children.length) {
			this._setCurrentIndex(0);
		}
		this._playCurrentMusic();
	}

	private _updateSelectorsClass() {
		const children = Array.from(this.listContainer.children);
		if (!children.length) {
			console.log('no children');
			return;
		}
		children.forEach((c) => c.classList.remove('active'));
		const child = children[this._currentIndex];
		if (!child) {
			console.log('no children for index ', this._currentIndex, children, this._files);
			this._setCurrentIndex(this._currentIndex - 1);
			return;
		}
		child.classList.add('active');
	}

	private _setupSoundSelectors() {
		console.log('_setupSoundSelectors');
		while (this.listContainer.children[0]) {
			this.listContainer.removeChild(this.listContainer.children[0]);
		}
		let i = 0;
		for (let file of this._files) {
			const element = document.createElement('div');
			const labelElement = document.createElement('div');
			const deleteElement = document.createElement('div');
			element.appendChild(labelElement);
			element.appendChild(deleteElement);

			this.listContainer.append(element);
			element.classList.add('selector', 'grid-x');
			labelElement.classList.add('cell', 'auto', 'selector-label');
			deleteElement.classList.add('cell', 'shrink', 'selector-delete');
			labelElement.innerText = file.label;
			deleteElement.innerHTML = ICON_DELETE;
			const index = i;
			labelElement.addEventListener('click', () => {
				this._setCurrentIndex(index);
				this._playCurrentMusic();
			});
			deleteElement.addEventListener('click', () => {
				this._removeFile(index);
			});
			i++;
		}
		this._updateSelectorsClass();
	}
	private _setCurrentIndex(index: number) {
		this._currentIndex = index;
		console.warn('set', index);
		this._updateSelectorsClass();
	}
}
