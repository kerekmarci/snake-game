let lastRenderTime = 0;
import { SNAKE_SPEED } from './snake';

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    lastRenderTime = currentTime;
    console.log('Render');

    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {

}

function draw() {

}