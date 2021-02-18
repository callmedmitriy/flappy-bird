import Tube from './Tube';
import { TUBE_GAP, TUBE_WIDTH, TUBE_VELOCITY, CLIENT_HEIGHT, CLIENT_WIDTH } from './consts';
import { randomInt } from './utils';

class TubePair {
    constructor() {
        this.tubesPosition = CLIENT_WIDTH;
        this.tubesWidth = 0;
        this.tubesHeight = CLIENT_HEIGHT - TUBE_GAP;
        this.tubeOneHeight = Math.round(this.tubesHeight/randomInt(2, 6));
        this.tubeTwoHeight = this.tubesHeight - this.tubeOneHeight;
        this.tubeTop = new Tube(this.tubeOneHeight, true)
        this.tubeBottom = new Tube(this.tubeTwoHeight, false)

    }

    move() {
        if (this.tubesPosition + TUBE_WIDTH > CLIENT_WIDTH) {
            this.tubesPosition -= TUBE_VELOCITY;
            this.tubesWidth = CLIENT_WIDTH - this.tubesPosition;
        } else if ((this.tubesPosition <= 0) && (this.tubesWidth > 0)) {
            this.tubesWidth -= TUBE_VELOCITY;
        } else {
            if (!(this.tubesPosition <= 0 && this.tubesWidth <= 0)) {
                this.tubesPosition -= TUBE_VELOCITY;
            }
        }
    }

    get placement() {
        return {
            tubeTop: this.tubeTop.placement,
            tubeBottom: this.tubeBottom.placement,
            position: this.tubesPosition,
            width: this.tubesWidth,
        }
    }


}

export default TubePair;