import { GAME_FIELD } from './consts';

class Render {
    constructor() {
        this.playerNode;
        this.scoreNode;
    }
    
    playerInit({x, y}, size) {
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

    tubesInit(index, { tubeTop, tubeBottom }) {
        let tubeTopNode = document.createElement("div");
        tubeTopNode.className = `tube tube-top tube-${index}`;
        let tubeBottomNode = document.createElement("div");
        tubeBottomNode.className = `tube tube-bottom tube-${index}`;

        tubeTopNode.style.top = `${tubeTop.top}px`
        tubeTopNode.style.height = `${tubeTop.height}px`
        
        tubeBottomNode.style.top = `${tubeBottom.top}px`
        tubeBottomNode.style.height = `${tubeBottom.height}px`

        GAME_FIELD.append(tubeTopNode, tubeBottomNode);
    }

    tubesMove(index, { position, width }) {
        let tubeTopNode = document.querySelector(`.tube.tube-top.tube-${index}`); 
        let tubeBottomNode = document.querySelector(`.tube.tube-bottom.tube-${index}`); 
        
        tubeTopNode.style.width = `${width}px`
        tubeBottomNode.style.width = `${width}px`
        tubeTopNode.style.left = `${position}px`
        tubeBottomNode.style.left = `${position}px`
    }

    tubesDestroy(index) {
        let tubeTopNode = document.querySelector(`.tube.tube-top.tube-${index}`); 
        let tubeBottomNode = document.querySelector(`.tube.tube-bottom.tube-${index}`); 
        tubeTopNode.remove();
        tubeBottomNode.remove();
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