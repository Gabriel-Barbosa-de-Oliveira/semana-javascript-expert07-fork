import "https://unpkg.com/@tensorflow/tfjs-core@2.4.0/dist/tf-core.js" //Ferramentas do tensor flow - conversão de biblioteca para c++
import "https://unpkg.com/@tensorflow/tfjs-converter@2.4.0/dist/tf-converter.js" //Pacote utilitario - dependencia do tenso flow js 
import "https://unpkg.com/@tensorflow/tfjs-backend-webgl@2.4.0/dist/tf-backend-webgl.js" //Biblioteca de graficos para renderizar com mais performance no navegador 
import "https://unpkg.com/@tensorflow-models/face-landmarks-detection@0.0.1/dist/face-landmarks-detection.js" //Detecção de rosto
import Service from "./service.js"

//no processo principal utilizar window
//no worker utilizar self
const { tf, faceLandmarksDetection } = self;
tf.setBackend("webgl")

const service = new Service({
    faceLandmarksDetection
})

console.log("loading tf model")

await service.loadModel();

console.log("tf model loaded")

postMessage("READY")

onmessage = ({ data }) => {
    console.log("worker!", data)
    postMessage({
        "ok": "ok"
    })
}