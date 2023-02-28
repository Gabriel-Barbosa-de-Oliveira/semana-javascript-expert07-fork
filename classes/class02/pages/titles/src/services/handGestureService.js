export default class HandGestureService {
    #fingerPose
    #handPoseDetection
    #handsVersion
    #detector = null
    constructor({
        fingerPose,
        handPoseDetection,
        handsVersion
    }) {
        this.#fingerPose = fingerPose
        this.#handPoseDetection = handPoseDetection
        this.#handsVersion = handsVersion
    }

    async initializeDetector() {
        if(this.#detector) return this.#detector

        const detectorConfig = {
            runtime: 'mediapipe', // or 'tfjs',
            solutionPath: `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${this.#handsVersion}`,
            //full [e o mais pesado e o mais preciso]
            modelType: 'lite',
            maxHands: 2
        }

        this.#detector = await this.#handPoseDetection.createDetector(this.#handPoseDetection.SupportedModels.MediaPipeHands, detectorConfig);
    
        return this.#detector;
    }

}