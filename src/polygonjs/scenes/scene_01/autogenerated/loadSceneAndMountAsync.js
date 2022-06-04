import {loadSceneData_scene_01} from './loadSceneData.js?t=1649725776514';

export const loadSceneAndMountAsync_scene_01 = async function (options) {
	const {
		onProgress,
		domElement,
		configureSceneData,
		autoPlay,
		sceneDataRoot,
		assetsRoot,
		libsRootPrefix
	} = options;
	const runRegister = options.runRegister != null ? options.runRegister : true;
	const loadModules = options.loadModules != null ? options.loadModules : true;

	const moduleNames = loadModules ? ["EXRLoader", "OBJLoader"] : [];
	const modulePromises = moduleNames.map((moduleName) => import('./modules/' + moduleName + (options.moduleImportSuffix || '')));
	const promises = [import('./loadSceneFromSceneData.js?t=1649725776514'), loadSceneData_scene_01({onProgress, sceneDataRoot}), ...modulePromises];
	const results = await Promise.all(promises);
	const {Poly, loadSceneFromSceneData_scene_01} = results[0];
	const sceneData = results[1];
	if(configureSceneData){
		configureSceneData(sceneData);
	}

	const loadedModules = [];
	for (let i = 2; i < results.length; i++) {
		loadedModules.push(results[i]);
	}
	// register modules
	let i = 0;
	for (let moduleName of moduleNames) {
		const moduleNameContainer = moduleName + 'Module';
		Poly.registerModule(loadedModules[i][moduleNameContainer]);
		i++;
	}

	const loadedData = await loadSceneFromSceneData_scene_01({
		onProgress,
		sceneData,
		domElement,
		runRegister,
		autoPlay,
		assetsRoot,
		libsRootPrefix
	});
	return loadedData;
};
