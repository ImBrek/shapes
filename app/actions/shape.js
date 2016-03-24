import {createAction} from 'redux-actions';
import {uniqueId} from 'lodash';

export const SHAPE = {
    CREATE: 'SHAPE_CREATE',
    DELETE: 'SHAPE_DELETE',
    ANIMATION: {
        START: 'SHAPE_ANIMATION_START',
        STOP: 'SHAPE_ANIMATION_STOP'
    }
};

export const CIRCLE = 'Circle';
export const SQUARE = 'Square';

var types = [CIRCLE, SQUARE];

function randomInteger (min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const create = createAction(SHAPE.CREATE, (x, y)=> {
    const rand = randomInteger(0, types.length - 1);
    const type = types[rand];
    var width, height;
    if (type == CIRCLE) {
        width = height = randomInteger(30, 200);
        height+=10;
    } else {
        width = height = randomInteger(20, 150);
    }
    return {
        type: types[rand],
        id: uniqueId(),
        width,
        height,
        x,
        y,
        color:getRandomColor()
    }
});

export const remove = createAction(SHAPE.DELETE, (id)=> {
    return {
        id
    }
});

export const startAnimation = createAction(SHAPE.ANIMATION.START, (id)=> {
    return {
        id
    }
});

export const stopAnimation = createAction(SHAPE.ANIMATION.STOP, (id)=> {
    return {
        id
    }
});