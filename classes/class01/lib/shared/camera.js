//Apenas usar new para classes que guardam estado

export default class Camera {

    constructor(){
        this.video = document.createElement('video')
    }

    static async init(){
        if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
            throw new Error(`Browser Api navigator.mediaDevices.getUserMedia not available`)
        }

        const videoConfig = {
            audio: false,
            video: {
                width: globalThis.screen.availWidth, //Pega o tamanho da width total do browser do usuario - Global this = objeto global do javascript
                height: globalThis.screen.availHeight, //Pega o tamanho da heigth total do browser do usuario
                frameRate: {
                    ideal: 60
                }
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia(videoConfig);
        const camera = new Camera();

        camera.video.srcObject = stream;
        //Apenas para debug
        camera.video.height = 240;
        camera.video.width = 320;

        document.body.append(camera.video)
        
        //Aguarda pela camera!
        await new Promise((resolve) => {
            camera.video.onloadedmetadata = () => {
                resolve(camera.video)
            }
        })

        camera.video.play();

        return camera;
    }
}