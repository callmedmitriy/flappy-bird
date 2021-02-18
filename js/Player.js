import { TUBE_VELOCITY, GRAVITY, CLIENT_HEIGHT, CLIENT_WIDTH, TUBE_GAP, PLAYER_SIZE } from './consts';

class Player {
    constructor() {
        this.x = Math.round(CLIENT_WIDTH/3);
        this.y = Math.round(CLIENT_HEIGHT/3);
        this.velocityX = TUBE_VELOCITY;
        this.velocityY = 0;
        this.size = PLAYER_SIZE;
        this.ground = CLIENT_HEIGHT;
        this.ceiling = 0;
        this.dead = false;
        this.inTubes = false;
        this.points = 0;
    }

    get coordinates() {
        return {
            x: this.x,
            y: this.y,
        }
    }
    get params() { return { size: this.size, } }
    get isDead() { return this.dead }
    get score() { return this.points }

    move() {
        this.velocityY += GRAVITY;
        this.y += this.velocityY;
        if (this.y >= this.ground || this.y <= this.ceiling) {
            this.dead = true
        }
    }

    flap() {
        if (!this.dead) {
            this.velocityY = -35;
        }
    }

    intersection({ tubeTop, position, width }) {
        if ( this.x > position && this.x < position+width ) {
            this.inTubes = true;

            if (!(this.y > tubeTop.height && this.y < tubeTop.height + TUBE_GAP)) {
                this.dead = true
            }

        } else if (this.x > position + width && this.inTubes) {
            this.points += 1;
            this.inTubes = false;
        }
    }
}

export default Player;