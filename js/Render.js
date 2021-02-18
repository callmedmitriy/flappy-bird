import { GAME_FIELD } from './consts';

class Render {
    constructor() {
        this.playerNode;
        this.tubeTopNode;
        this.tubeBottomNode;
        this.scoreNode;
    }
    
    playerInit({x, y}, { size }) {
        if (this.playerNode) {
            this.playerNode.style.left = `${x}px`;
            this.playerNode.style.top = `${y}px`;
        } else {
            this.playerNode = document.createElement("div");
            this.playerNode.className = "player";

            this.playerNode.style.left = `${x}px`;
            this.playerNode.style.top = `${y}px`;
            this.playerNode.style.width = `${size}px`;
            this.playerNode.style.height = `${size}px`;

            GAME_FIELD.append(this.playerNode);
        }
    }

    playerMove({x, y}) {
        this.playerNode.style.left = `${x}px`;
        this.playerNode.style.top = `${y}px`;
    }

    tubesInit() {
        if (!(this.tubeTopNode && this.tubeBottomNode)) {
            this.tubeTopNode = document.createElement("div");
            this.tubeTopNode.className = "tube tube-top";
            this.tubeBottomNode = document.createElement("div");
            this.tubeBottomNode.className = "tube tube-bottom";
        }
        this.tubeTopNode.removeAttribute('style');
        this.tubeBottomNode.removeAttribute('style');
        GAME_FIELD.append(this.tubeTopNode, this.tubeBottomNode);
    }

    tubesMove({ tubeTop, tubeBottom, position, width }) {
        this.tubeTopNode.style.top = `${tubeTop.top}px`
        this.tubeTopNode.style.height = `${tubeTop.height}px`
        
        this.tubeBottomNode.style.top = `${tubeBottom.top}px`
        this.tubeBottomNode.style.height = `${tubeBottom.height}px`
        
        this.tubeTopNode.style.width = `${width}px`
        this.tubeBottomNode.style.width = `${width}px`
        this.tubeTopNode.style.left = `${position}px`
        this.tubeBottomNode.style.left = `${position}px`
    }

    score(points) {
        if (!this.scoreNode) {
            this.scoreNode = document.createElement("div");
            this.scoreNode.className = "score";
            GAME_FIELD.append(this.scoreNode);
        }
        this.scoreNode.innerHTML = points;
    }
}

export default Render;