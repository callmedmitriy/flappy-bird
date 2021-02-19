export const CLIENT_HEIGHT = document.documentElement.clientHeight;
export const CLIENT_WIDTH = document.documentElement.clientWidth;

export const GAME_SPEED = 25;
export const GAME_FIELD = document.querySelector("#field");

export const TUBE_WIDTH = 100;
export const TUBE_MIN_HEIGHT = 100;
export const TUBE_GAP = 200;
export const TUBE_VELOCITY = 10;
export const TUBE_COUNT = Math.floor(CLIENT_WIDTH/500) + 1;
export const TUBE_BEFORE_NEXT = CLIENT_WIDTH - Math.floor(CLIENT_WIDTH/TUBE_COUNT);

export const GRAVITY = 5;
export const PLAYER_SIZE = 25;
