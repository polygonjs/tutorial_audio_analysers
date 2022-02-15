
// anim
import {DurationAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Duration';
import {EasingAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Easing';
import {MergeAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Merge';
import {NullAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Null';
import {PlayAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Play';
import {PropertyNameAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyName';
import {PropertyValueAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/PropertyValue';
import {TargetAnimNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/anim/Target';
// audio
import {AMSynthAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/AMSynth';
import {FFTAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/FFT';
import {CopNetworkAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/CopNetwork';
import {EnvelopeAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Envelope';
import {EventsNetworkAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/EventsNetwork';
import {FileAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/File';
import {MeterAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Meter';
import {NullAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Null';
import {PlayInstrumentAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/PlayInstrument';
import {SamplerAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Sampler';
import {UserMediaAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/UserMedia';
import {VolumeAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Volume';
import {WaveformAudioNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/audio/Waveform';
// cop
import {AudioAnalyserCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/AudioAnalyser';
import {EnvMapCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/EnvMap';
import {ImageCopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/cop/Image';
// event
import {AnimationEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Animation';
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
import {DelayEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Delay';
import {NodeCookEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/NodeCook';
import {PointerEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Pointer';
import {RaycastEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Raycast';
import {SceneEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Scene';
import {SetParamEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/SetParam';
import {ThrottleEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/Throttle';
// mat
import {LineBasicMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/LineBasic';
import {LineBasicBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/LineBasicBuilder';
import {MeshBasicMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasic';
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshPhongMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshPhong';
import {MeshPhysicalMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshPhysical';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/PointsBuilder';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AreaLight';
import {AudioListenerObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AudioListener';
import {EventsNetworkObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/EventsNetwork';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {NullObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Null';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
import {PositionalAudioObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PositionalAudio';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {BVHSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/BVH';
import {AnimationsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AnimationsNetwork';
import {AttribCreateSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribCreate';
import {AttribDeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/AttribDelete';
import {BoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box';
import {CircleSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Circle';
import {CopNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/CopNetwork';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {DeleteSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {FileSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/File';
import {FuseSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Fuse';
import {HierarchySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy';
import {IcosahedronSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Icosahedron';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Jitter';
import {LineSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Line';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialPropertiesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialProperties';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {NullSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Null';
import {ObjectPropertiesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ObjectProperties';
import {ParticlesSystemGpuSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/ParticlesSystemGpu';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/RestAttributes';
import {ScatterSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Scatter';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';


export const requiredImports_scene_01 = {
	nodes: [
		DurationAnimNode,
		EasingAnimNode,
		MergeAnimNode,
		NullAnimNode,
		PlayAnimNode,
		PropertyNameAnimNode,
		PropertyValueAnimNode,
		TargetAnimNode,
		AMSynthAudioNode,
		FFTAudioNode,
		CopNetworkAudioNode,
		EnvelopeAudioNode,
		EventsNetworkAudioNode,
		FileAudioNode,
		MeterAudioNode,
		NullAudioNode,
		PlayInstrumentAudioNode,
		SamplerAudioNode,
		UserMediaAudioNode,
		VolumeAudioNode,
		WaveformAudioNode,
		AudioAnalyserCopNode,
		EnvMapCopNode,
		ImageCopNode,
		AnimationEventNode,
		CameraOrbitControlsEventNode,
		DelayEventNode,
		NodeCookEventNode,
		PointerEventNode,
		RaycastEventNode,
		SceneEventNode,
		SetParamEventNode,
		ThrottleEventNode,
		LineBasicMatNode,
		LineBasicBuilderMatNode,
		MeshBasicMatNode,
		MeshBasicBuilderMatNode,
		MeshLambertBuilderMatNode,
		MeshPhongMatNode,
		MeshPhysicalMatNode,
		MeshStandardBuilderMatNode,
		PointsBuilderMatNode,
		AreaLightObjNode,
		AudioListenerObjNode,
		EventsNetworkObjNode,
		GeoObjNode,
		HemisphereLightObjNode,
		NullObjNode,
		PerspectiveCameraObjNode,
		PolarTransformObjNode,
		PositionalAudioObjNode,
		SpotLightObjNode,
		BVHSopNode,
		AnimationsNetworkSopNode,
		AttribCreateSopNode,
		AttribDeleteSopNode,
		BoxSopNode,
		CircleSopNode,
		CopNetworkSopNode,
		CopySopNode,
		DeleteSopNode,
		EventsNetworkSopNode,
		FileSopNode,
		FuseSopNode,
		HierarchySopNode,
		IcosahedronSopNode,
		InstanceSopNode,
		JitterSopNode,
		LineSopNode,
		MaterialSopNode,
		MaterialPropertiesSopNode,
		MaterialsNetworkSopNode,
		MergeSopNode,
		NullSopNode,
		ObjectPropertiesSopNode,
		ParticlesSystemGpuSopNode,
		PlaneSopNode,
		RestAttributesSopNode,
		ScatterSopNode,
		SphereSopNode,
		TransformSopNode
	],
	operations: [
		
	]
}
