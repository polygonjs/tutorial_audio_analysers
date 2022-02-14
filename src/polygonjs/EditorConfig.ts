import {EditorApiOptions, ConfigureEditor} from 'polygonjs-editor/public/editor/api';
// import {ProgressBarTop} from '@polygonjs/polygonjs/dist/src/engine/viewers/progressBars/Top';

export const configureEditor: ConfigureEditor = (options: EditorApiOptions) => {
	// configure the editor
	options.api.html.head.setTitle(options.sceneName);
	// options.api.html.head.addScript({
	// 	id: 'my-script',
	// 	content: `console.log('this is running my custom script')`,
	// });
	// options.api.html.viewer.setProgressBar(new ProgressBarTop());
};
