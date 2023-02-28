import HandGestureController from "../controllers/handGestureController.js"
import { HandGestureView } from "../views/handGestureView.js"




const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return HandGestureController.initialize({
      view: new HandGestureView(),
      service: new HandGestureController({})
    })
  }
}

export default factory