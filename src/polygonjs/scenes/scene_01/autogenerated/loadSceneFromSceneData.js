import {ScenePlayerImporter} from '@polygonjs/polygonjs/dist/src/engine/io/player/Scene';
import {PolyNodeController} from '@polygonjs/polygonjs/dist/src/engine/nodes/utils/poly/PolyNodeController';
import {configureScene} from '../PolyConfig';
import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../PolyConfig';
import {requiredImports_scene_01} from './requiredImports';

const loadSceneFromSceneData_scene_01 = async function (options) {
	const {domElement, sceneData, onProgress, autoPlay, assetsRoot, libsRootPrefix} = options;
	const runRegister = options.runRegister != null ? options.runRegister : true;

	if (runRegister) {
		// registers nodes required for this scene
		for (const node of requiredImports_scene_01.nodes) {
			Poly.registerNode(node);
		}
		for (const operation of requiredImports_scene_01.operations) {
			Poly.registerOperation(operation);
		}
		const polyNodesData = [];
		for (let polyNodeData of polyNodesData) {
			PolyNodeController.createNodeClassAndRegister(polyNodeData);
		}
		AllExpressionsRegister.run(Poly);
		configurePolygonjs(Poly);
	}

	Poly.libs.setRoot('./three/js/libs');

	function configureSceneAndOverrideAssetsRootIfRequired(scene) {
		configureScene(scene);
		if (assetsRoot) {
			scene.assets.setRoot(assetsRoot);
		}
		if (libsRootPrefix) {
			Poly.libs.setRootPrefix(libsRootPrefix);
		}
	}

	// load the scene and create a viewer
	const sceneName = 'scene_01';
	const {scene, viewer} = await ScenePlayerImporter.loadSceneData({
		domElement,
		sceneName,
		configureScene: configureSceneAndOverrideAssetsRootIfRequired,
		sceneData,
		onProgress,
		autoPlay,
	});
	return {
		scene: scene,
		viewer,
	};
};

export {Poly, loadSceneFromSceneData_scene_01};
