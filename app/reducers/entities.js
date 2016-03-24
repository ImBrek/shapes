import {get} from 'lodash/object'
import {merge, omit} from 'lodash'

import {SHAPE} from 'actions/shape';


const initValue = {
    shapes: {}
}

export default function entities (state = initValue, action) {
    switch (action.type) {
        case SHAPE.CREATE:
            return merge({}, state, {
                shapes: {
                    [action.payload.id]: action.payload
                }
            })
        case SHAPE.DELETE:
            return Object.assign({}, state, {
                shapes: omit(state.shapes, action.payload.id)
            })
        case SHAPE.ANIMATION.START:
            return Object.assign({}, state, {
                shapes: {
                    ...state.shapes,
                    [action.payload.id]: {
                        ...state.shapes[action.payload.id],
                        animate: true
                    }
                }
            });
        case SHAPE.ANIMATION.STOP:
            return Object.assign({}, state, {
                shapes: {
                    ...state.shapes,
                    [action.payload.id]: {
                        ...state.shapes[action.payload.id],
                        animate: false
                    }
                }
            });
        default:
            return state;
    }
}
