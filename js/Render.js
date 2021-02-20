import { GAME_FIELD } from './consts';

class Render {
    playerInit({ x, y }, size, rotate) {
        if (this.playerNode) {
            this.playerNode.style.left = `${x}px`;
            this.playerNode.style.top = `${y}px`;
            this.playerNode.style.transform = `rotate(${rotate}deg)`;
        } else {
            this.playerNode = document.createElement('div');
            this.playerNode.className = 'player';

            this.playerNode.style.left = `${x}px`;
            this.playerNode.style.top = `${y}px`;
            this.playerNode.style.width = `${size}px`;
            this.playerNode.style.height = `${size}px`;
            GAME_FIELD.append(this.playerNode);
        }
    }

    playerMove({ x, y }, rotate) {
        this.playerNode.style.left = `${x}px`;
        this.playerNode.style.top = `${y}px`;
        this.playerNode.style.transform = `rotate(${rotate}deg)`;
    }

    tubesInit(index, { tubeTop, tubeBottom, width }) {
        const tubeTopNode = document.createElement('div');
        tubeTopNode.className = `tube tube-top tube-${index}`;
        const tubeBottomNode = document.createElement('div');
        tubeBottomNode.className = `tube tube-bottom tube-${index}`;

        tubeTopNode.style.top = `${tubeTop.top}px`;
        tubeTopNode.style.height = `${tubeTop.height}px`;

        tubeBottomNode.style.top = `${tubeBottom.top}px`;
        tubeBottomNode.style.height = `${tubeBottom.height}px`;

        tubeTopNode.style.width = `${width}px`;
        tubeBottomNode.style.width = `${width}px`;

        GAME_FIELD.append(tubeTopNode, tubeBottomNode);
    }

    tubesMove(index, { position }) {
        const tubeTopNode = document.querySelector(`.tube.tube-top.tube-${index}`);
        const tubeBottomNode = document.querySelector(`.tube.tube-bottom.tube-${index}`);

        tubeTopNode.style.left = `${position}px`;
        tubeBottomNode.style.left = `${position}px`;
    }

    tubesDestroy(index) {
        const tubeTopNode = document.querySelector(`.tube.tube-top.tube-${index}`);
        const tubeBottomNode = document.querySelector(`.tube.tube-bottom.tube-${index}`);
        tubeTopNode.remove();
        tubeBottomNode.remove();
    }

    score(points) {
        if (!this.scoreNode) {
            this.scoreNode = document.createElement('div');
            this.scoreNode.className = 'score';
            GAME_FIELD.append(this.scoreNode);
        }
        this.scoreNode.innerHTML = points;
    }

    bestScore(points) {
        if (!this.scoreNode) {
            this.scoreNode = document.createElement('div');
            this.scoreNode.className = 'score';
            GAME_FIELD.append(this.scoreNode);
        }
        this.scoreNode.innerHTML = `BEST: ${points}`;
    }
}

export default Render;
