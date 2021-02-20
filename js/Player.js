import {
    GRAVITY, CLIENT_HEIGHT, CLIENT_WIDTH, TUBE_GAP, PLAYER_SIZE,
} from './consts';

class Player {
    constructor() {
        this.x = Math.round(CLIENT_WIDTH / 3);
        this.y = Math.round(CLIENT_HEIGHT / 3);
        this.velocityY = 0;
        this.size = PLAYER_SIZE;
        this.rotate = 0;
        this.ground = CLIENT_HEIGHT;
        this.ceiling = 0;
        this.isDead = false;
        this.inTubes = false;
        this.points = 0;
    }

    get coordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    }

    move() {
        this.velocityY += GRAVITY;
        this.y += this.velocityY;
        this.rotate = this.velocityY;
        if (this.y + this.size >= this.ground || this.y <= this.ceiling) {
            this.isDead = true;
        }
    }

    flap() {
        if (!this.isDead) {
            this.velocityY = -35;
        }
    }

    intersection({ tubeTop, position, width }) {
        if (this.x + this.size > position && this.x < position + width) {
            this.inTubes = true;

            if (!(this.y > tubeTop.height && this.y + this.size < tubeTop.height + TUBE_GAP)) {
                this.isDead = true;
            }
        } else if (this.x > position + width && this.inTubes) {
            this.points += 1;
            this.inTubes = false;
        }
    }
}

export default Player;
