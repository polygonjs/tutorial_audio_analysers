export class ControlsToggler {
	private element = document.getElementById('audio-selectors-toggle');
	private toggleable = document.getElementById('toggleable-content');
	private _visible = true;
	constructor() {
		this._addEvents();
	}
	private _addEvents() {
		this.element.addEventListener('click', () => {
			this._visible = !this._visible;
			this._updateVisibility();
		});
		this._updateVisibility();
	}
	private _updateVisibility() {
		if (this._visible) {
			this.toggleable.style.display = 'block';
			this.element.innerText = 'hide controls';
		} else {
			this.toggleable.style.display = 'none';
			this.element.innerText = 'show controls';
		}
	}
}
