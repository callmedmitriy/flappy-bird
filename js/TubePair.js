import Tube from './Tube';
import {
    TUBE_GAP, TUBE_WIDTH, TUBE_VELOCITY, CLIENT_HEIGHT, CLIENT_WIDTH, TUBE_BEFORE_NEXT, TUBE_MIN_HEIGHT,
} from './consts';
import { randomInt } from './utils';

class TubePair {
    constructor(index) {
        this.tubesPosition = CLIENT_WIDTH;
        this.tubesWidth = TUBE_WIDTH;
        this.tubesHeight = CLIENT_HEIGHT - TUBE_GAP;
        this.tubeOneHeight = Math.round(randomInt(TUBE_MIN_HEIGHT, this.tubesHeight - TUBE_MIN_HEIGHT));
        this.tubeTwoHeight = this.tubesHeight - this.tubeOneHeight;
        this.tubeTop = new Tube(this.tubeOneHeight, true);
        this.tubeBottom = new Tube(this.tubeTwoHeight, false);

        this.isTubesPassed = false;
        this.isGoNext = false;
        this.nextIsCreated = false;
        this.index = index;
    }

    get placement() {
        return {
            tubeTop: this.tubeTop.placement,
            tubeBottom: this.tubeBottom.placement,
            position: this.tubesPosition,
            width: this.tubesWidth,
        };
    }

    move() {
        if (!this.isTubesPassed) {
            if (this.tubesPosition + this.tubesWidth <= 0) {
                this.isTubesPassed = true;
            } else {
                this.tubesPosition -= TUBE_VELOCITY;
            }
        }

        if (!this.isGoNext && this.tubesPosition < TUBE_BEFORE_NEXT) {
            this.isGoNext = true;
        }
    }

    nextCreated() {
        this.nextIsCreated = true;
    }
}

export default TubePair;
