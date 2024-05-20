const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Game variables
let player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0
};

function drawPlayer() {
    context.fillStyle = 'red';
    context.fillRect(player.x, player.y, player.width, player.height);
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    detectWalls();
}

function detectWalls() {
    // Left wall
    if (player.x < 0) {
        player.x = 0;
    }

    // Right Wall
    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width;
    }

    // Top wall
    if (player.y < 0) {
        player.y = 0;
    }

    // Bottom wall
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
    }
}

function update() {
    clear();
    drawPlayer();
    newPos();

    requestAnimationFrame(update);
}

function moveUp() {
    player.dy = -player.speed;
}

function moveDown() {
    player.dy = player.speed;
}

function moveRight() {
    player.dx = player.speed;
}

function moveLeft() {
    player.dx = -player.speed;
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key === 'Right' ||
        e.key === 'ArrowRight' ||
        e.key === 'Left' ||
        e.key === 'ArrowLeft' ||
        e.key === 'Up' ||
        e.key === 'ArrowUp' ||
        e.key === 'Down' ||
        e.key === 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

update();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
