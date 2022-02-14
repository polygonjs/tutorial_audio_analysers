
import {PolyScene} from '@polygonjs/polygonjs/src/engine/scene/PolyScene';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/AreaLight';
import {AudioListenerObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/AudioListener';
import {GeoObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PolarTransform';
import {PositionalAudioObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/PositionalAudio';
import {SpotLightObjNode} from '@polygonjs/polygonjs/src/engine/nodes/obj/SpotLight';
// sop
import {AttribCreateSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/AttribCreate';
import {BoxSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Box';
import {CopNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/CopNetwork';
import {DeleteSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Delete';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/EventsNetwork';
import {FileSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/File';
import {FuseSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Fuse';
import {HierarchySopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Hierarchy';
import {IcosahedronSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Icosahedron';
import {InstanceSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Instance';
import {JitterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Jitter';
import {LineSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Line';
import {MaterialSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Merge';
import {ParticlesSystemGpuSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/ParticlesSystemGpu';
import {PlaneSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Plane';
import {RestAttributesSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/RestAttributes';
import {ScatterSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Scatter';
import {SphereSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/src/engine/nodes/sop/Transform';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/CameraOrbitControls';
import {SceneEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/Scene';
import {SetParamEventNode} from '@polygonjs/polygonjs/src/engine/nodes/event/SetParam';
// audio
import {AMSynthAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/AMSynth';
import {CopNetworkAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/CopNetwork';
import {EnvelopeAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Envelope';
import {EventsNetworkAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/EventsNetwork';
import {FFTAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/FFT';
import {FileAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/File';
import {MeterAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Meter';
import {NullAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Null';
import {PlayInstrumentAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/PlayInstrument';
import {SamplerAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Sampler';
import {UserMediaAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/UserMedia';
import {VolumeAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Volume';
import {WaveformAudioNode} from '@polygonjs/polygonjs/src/engine/nodes/audio/Waveform';
// cop
import {AudioAnalyserCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/AudioAnalyser';
import {ImageCopNode} from '@polygonjs/polygonjs/src/engine/nodes/cop/Image';
// mat
import {LineBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/LineBasicBuilder';
import {MeshBasicBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasicBuilder';
import {MeshBasicMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshBasic';
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshPhysicalMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshPhysical';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/MeshStandardBuilder';
import {PointsBuilderMatNode} from '@polygonjs/polygonjs/src/engine/nodes/mat/PointsBuilder';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/audioListener1'): AudioListenerObjNode;
	node(path: '/areaLight1'): AreaLightObjNode;
	node(path: '/polarTransform1'): PolarTransformObjNode;
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: '/positionalAudio1'): PositionalAudioObjNode;
	node(path: '/positionalAudio1/envelope1'): EnvelopeAudioNode;
	node(path: '/positionalAudio1/AMSynth1'): AMSynthAudioNode;
	node(path: '/positionalAudio1/playInstrument1'): PlayInstrumentAudioNode;
	node(path: '/positionalAudio1/OUT'): NullAudioNode;
	node(path: '/positionalAudio1/file1'): FileAudioNode;
	node(path: '/positionalAudio1/userMedia1'): UserMediaAudioNode;
	node(path: '/positionalAudio1/meter1'): MeterAudioNode;
	node(path: '/positionalAudio1/volume1'): VolumeAudioNode;
	node(path: '/positionalAudio1/sampler1'): SamplerAudioNode;
	node(path: '/positionalAudio1/FFT1'): FFTAudioNode;
	node(path: '/positionalAudio1/waveform1'): WaveformAudioNode;
	node(path: '/positionalAudio1/COP'): CopNetworkAudioNode;
	node(path: '/positionalAudio1/COP/audioAnalyser1'): AudioAnalyserCopNode;
	node(path: '/positionalAudio1/eventsNetwork1'): EventsNetworkAudioNode;
	node(path: '/positionalAudio1/eventsNetwork1/scene1'): SceneEventNode;
	node(path: '/positionalAudio1/eventsNetwork1/setParam1'): SetParamEventNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/box1'): BoxSopNode;
	node(path: '/geo1/sphere1'): SphereSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/materialsNetwork1'): MaterialsNetworkSopNode;
	node(path: '/geo1/materialsNetwork1/meshPhysical1'): MeshPhysicalMatNode;
	node(path: '/crowd'): GeoObjNode;
	node(path: '/crowd/plane1'): PlaneSopNode;
	node(path: '/crowd/scatter1'): ScatterSopNode;
	node(path: '/crowd/file1'): FileSopNode;
	node(path: '/crowd/instance1'): InstanceSopNode;
	node(path: '/crowd/hierarchy1'): HierarchySopNode;
	node(path: '/crowd/transform1'): TransformSopNode;
	node(path: '/crowd/transform2'): TransformSopNode;
	node(path: '/crowd/file2'): FileSopNode;
	node(path: '/crowd/delete1'): DeleteSopNode;
	node(path: '/crowd/delete2'): DeleteSopNode;
	node(path: '/crowd/hierarchy2'): HierarchySopNode;
	node(path: '/crowd/transform3'): TransformSopNode;
	node(path: '/crowd/transform4'): TransformSopNode;
	node(path: '/crowd/instance2'): InstanceSopNode;
	node(path: '/crowd/merge1'): MergeSopNode;
	node(path: '/crowd/merge2'): MergeSopNode;
	node(path: '/crowd/plane2'): PlaneSopNode;
	node(path: '/crowd/transform5'): TransformSopNode;
	node(path: '/crowd/MAT'): MaterialsNetworkSopNode;
	node(path: '/crowd/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/crowd/MAT/meshStandardBuilder1'): MeshStandardBuilderMatNode;
	node(path: '/planeWithTexture'): GeoObjNode;
	node(path: '/planeWithTexture/plane1'): PlaneSopNode;
	node(path: '/planeWithTexture/material1'): MaterialSopNode;
	node(path: '/planeWithTexture/transform1'): TransformSopNode;
	node(path: '/planeWithTexture/COP'): CopNetworkSopNode;
	node(path: '/planeWithTexture/COP/image1'): ImageCopNode;
	node(path: '/planeWithTexture/MAT'): MaterialsNetworkSopNode;
	node(path: '/planeWithTexture/MAT/meshBasic1'): MeshBasicMatNode;
	node(path: '/waveform'): GeoObjNode;
	node(path: '/waveform/line1'): LineSopNode;
	node(path: '/waveform/material1'): MaterialSopNode;
	node(path: '/waveform/attribCreate1'): AttribCreateSopNode;
	node(path: '/waveform/material3'): MaterialSopNode;
	node(path: '/waveform/transform1'): TransformSopNode;
	node(path: '/waveform/transform2'): TransformSopNode;
	node(path: '/waveform/merge1'): MergeSopNode;
	node(path: '/waveform/MAT'): MaterialsNetworkSopNode;
	node(path: '/waveform/MAT/lineBasicBuilder_RAW_VALUE'): LineBasicBuilderMatNode;
	node(path: '/waveform/MAT/lineBasicBuilder_SPEED'): LineBasicBuilderMatNode;
	node(path: '/particles'): GeoObjNode;
	node(path: '/particles/sphere1'): SphereSopNode;
	node(path: '/particles/scatter1'): ScatterSopNode;
	node(path: '/particles/particlesSystemGpu1'): ParticlesSystemGpuSopNode;
	node(path: '/particles/MAT'): MaterialsNetworkSopNode;
	node(path: '/particles/MAT/pointsParticles'): PointsBuilderMatNode;
	node(path: '/particles/MAT/meshLambertBuilder_INSTANCES'): MeshLambertBuilderMatNode;
	node(path: '/particles/MAT/meshBasicBuilder_PARTICLES'): MeshBasicBuilderMatNode;
	node(path: '/particles/sphere2'): SphereSopNode;
	node(path: '/particles/instance1'): InstanceSopNode;
	node(path: '/particles/icosahedron1'): IcosahedronSopNode;
	node(path: '/particles/restAttributes1'): RestAttributesSopNode;
	node(path: '/particles/attribCreate1'): AttribCreateSopNode;
	node(path: '/particles/delete1'): DeleteSopNode;
	node(path: '/particles/fuse1'): FuseSopNode;
	node(path: '/particles/jitter1'): JitterSopNode;
	node(path: '/particles/attribCreate2'): AttribCreateSopNode;
	node(path: '/blackSphere'): GeoObjNode;
	node(path: '/blackSphere/sphere1'): SphereSopNode;
	node(path: '/blackSphere/material1'): MaterialSopNode;
	node(path: '/blackSphere/materialsNetwork1'): MaterialsNetworkSopNode;
	node(path: '/blackSphere/materialsNetwork1/meshBasic1'): MeshBasicMatNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}