let sceneReady=false;
let userActionPerformed=false;
let scene;

function onSceneReadyAndUserActionPerformed(){
    if(!( sceneReady && userActionPerformed)){
        return
    }
    scene.play();
    setupSoundSelectors();
}

function fadeInElements(){
    const audioSelectorsContainer = document.getElementById('audio-selectors-container')
    const linksContainer = document.getElementById('links-container')
    const elements = [audioSelectorsContainer, linksContainer];
    for(let element of elements){
        element.classList.add('fade-in');
    }
}

function setupSoundNoticeEvents(){
    const noticeContainer = document.getElementById('sound-notice-container');
    const button = document.getElementById('sound-notice-start-button');
    if(!button){return}
    button.addEventListener('click', ()=>{
        const parent = noticeContainer.parentElement;
        if(parent){
            parent.removeChild(noticeContainer);
        }
        // this assume scene has been made accessible via window.scene in PolyConfig.js
        userActionPerformed=true;
        onSceneReadyAndUserActionPerformed();
        fadeInElements();
    })
}

const PAGE_LOAD_TIMESTAMP = performance.now()
const AUDIO_FILE_NAMES = [
    'sb_theclimb.short.mp3',
    'sb_goliath.mp3',
    'sb_pathfinder.mp3',
    'sb_terminus.mp3',
    'sb_catalyst.mp3',
];
function setupSoundSelectors(){
    const listContainer = document.getElementById('audio-selectors-list');
    if(!listContainer){return}
    const fileAudioNode = scene.node('/positionalAudio1/file_main');
    fileAudioNode.onStop(playNextMusic);
    const children = Array.from(listContainer.children);
    const childrenCount = children.length;

    let currentIndex=0;
    async function playCurrentMusic(){
        children.forEach(c=>c.classList.remove('active'));
        const child = children[currentIndex];
        child.classList.add('active');
        const fileName = AUDIO_FILE_NAMES[currentIndex];
        fileAudioNode.p.url.set(`/audio/${fileName}?timestamp=${PAGE_LOAD_TIMESTAMP}`);
        await fileAudioNode.compute();
        fileAudioNode.p.restart.pressButton();
    }
    function playNextMusic(){
        console.warn('playNextMusic')
        currentIndex+=1;
        if(currentIndex >= childrenCount){
            currentIndex = 0;
        }
        playCurrentMusic();
    }

    for(let i=0;i<childrenCount;i++){
        const child = children[i];
        child.addEventListener('click', ()=>{
            currentIndex = i;
            playCurrentMusic();
        })
    }
    playCurrentMusic();
}

function setupSpotlightShadow(){
    const node = scene.node('/spotLight1');
    const param = node.p.shadowUpdateOnNextRender;
    param.set(1)
    setTimeout(()=>{
        param.set(0)
    }, 1000);
}

document.addEventListener('POLYSceneReady', (event)=>{
    sceneReady=true;
    scene = event.detail.scene;
    setupSpotlightShadow();
    onSceneReadyAndUserActionPerformed();
})
document.addEventListener('DOMContentLoaded', ()=>{
    setupSoundNoticeEvents();
})