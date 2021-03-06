import { CLIENT_HEIGHT } from './consts';

class Tube {
    constructor(height, isTop) {
        this.height = height;
        if (isTop) {
            this.top = 0;
        } else {
            this.top = CLIENT_HEIGHT - this.height;
        }
    }

    get placement() {
        return {
            height: this.height,
            top: this.top,
        };
    }
}

export default Tube;
