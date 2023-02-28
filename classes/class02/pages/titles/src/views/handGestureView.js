export class HandGestureView {
    loop(fn){
        requestAnimationFrame(fn)
    }

    scrollPage(positionY){
        console.log(positionY)
        window.scroll(0, positionY)
    }
}