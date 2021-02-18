import Player from './Player';
import Render from './Render';
import TubePair from './TubePair';
import { GAME_SPEED } from './consts'

const init = () => {
    let player;
    let tubes;
    let game;
    // let score = 0;
    let render = new Render();
    let newGame = true;

    const gamePrepare = () => {
        player = new Player();
        tubes = new TubePair();
        render.playerInit(player.coordinates, player.params);
        render.tubesInit();
    }
    
    const gameStart = () => {
        render.score(player.score);
        game = setInterval(() => gameFlow(), GAME_SPEED);
    }

    const gameFlow = () => {
        player.move();
        tubes.move();
        player.intersection(tubes.placement);
        if (player.isDead) {
            gameOver();
        } else {
            render.playerMove(player.coordinates);
            render.score(player.score);
            render.tubesMove(tubes.placement);
        }
    }

    const gameOver = () => {
        console.log('death');
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