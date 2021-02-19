import Player from './Player';
import Render from './Render';
import TubePair from './TubePair';
import { GAME_SPEED } from './consts'

const init = () => {
    let game;
    let newGame = true;
    
    let player;
    let tubesList = [];
    let tubesSerial = 0;
    let tubesClosest;
    
    let render = new Render();

    const gamePrepare = () => {
        player = new Player();
        tubesListClear();
        render.playerInit(player.coordinates, player.size);
    }
    
    const gameStart = () => {
        render.score(player.points);
        game = setInterval(() => gameFlow(), GAME_SPEED);
    }

    const gameFlow = () => {
        player.move();
        tubesListMove();
        
        render.score(player.points);
        render.playerMove(player.coordinates);
        tubesListRender();

        tubesClosest = getClosestTubes();
        player.intersection(tubesClosest.placement);

        if (player.isDead) {
            gameOver();
        }
    }

    const tubesListMove = () => {
        if (tubesList.length) {
            tubesList.forEach((tubes) => {
                if (tubes.isTubesPassed) {
                    render.tubesDestroy(tubes.index);
                    tubesList.shift();
                } else if (tubes.isGoNext && !tubes.nextIsCreated) {
                    tubesList.push(tubesCreate())
                    tubes.nextCreated();
                    tubes.move();
                } else {
                    tubes.move();
                }
            })
        } else {
            tubesList.push(tubesCreate());
        }
    }

    const tubesListRender = () => {
        tubesList.forEach(tubes => render.tubesMove(tubes.index, tubes.placement));
    }

    const tubesListClear = () => {
        tubesSerial = 0;
        tubesList.forEach(tubes => render.tubesDestroy(tubes.index));
        tubesList = [];
    }

    const getClosestTubes = () => {
        if (tubesList.length) {
            for (let index = 0; index < tubesList.length; index++) {
                let extreme = tubesList[index].placement.position + tubesList[index].placement.width + player.size;
                if (player.coordinates.x < extreme) {
                    return tubesList[index]
                }
            }
        }
    }

    const tubesCreate = () => {
        tubesSerial += 1;
        const tubes = new TubePair(tubesSerial);
        render.tubesInit(tubesSerial, tubes.placement);
        return tubes;
    }

    const gameOver = () => {
        clearInterval(game);
        newGame = true;
        gamePrepare();
    }
    
    document.addEventListener('keydown', ({ code }) => {
        if (code == "Space") {
            if (newGame) {
                newGame = false;
                gameStart();
            }
            player.flap();
        }
    });

    gamePrepare();
}

document.addEventListener("DOMContentLoaded", init);