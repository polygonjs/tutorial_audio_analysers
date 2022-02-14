import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
import manifest from './manifest.json';

export const loadSceneData_scene_01 = async (options) => {
	return await SceneDataManifestImporter.importSceneData({
		urlPrefix: `./polygonjs/scenes/scene_01`,
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
