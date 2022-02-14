import {SceneJsonExporterData} from '@polygonjs/polygonjs/dist/src/engine/io/json/export/Scene';
import {BaseViewerType} from '@polygonjs/polygonjs/dist/src/engine/viewers/_Base';
import {PolySceneWithNodeMap_scene_01} from './PolySceneWithNodeMap';

type OnProgressCallback = (ratio: number) => void;
type ConfigureSceneData = (sceneData: SceneJsonExporterData) => void;

interface LoadSceneAndMountAsyncOptions {
	onProgress: OnProgressCallback;
	domElement?: HTMLElement;
	moduleImportSuffix?: string;
	loadModules?: boolean;
	runRegister?: boolean;
	configureSceneData?: ConfigureSceneData;
}
interface LoadedData {
	scene: PolySceneWithNodeMap_scene_01;
	viewer: BaseViewerType | undefined;
}
type LoadSceneAndMountAsync_scene_01 = (options: LoadSceneAndMountAsyncOptions) => Promise<LoadedData>;

export const loadSceneAndMountAsync_scene_01: LoadSceneAndMountAsync_scene_01;
