import * as ActionTypes from '../actionTypes';

const defaultState = [
    {
        id: 1,
        name: "One",
    },
    {
        id: 2,
        name: "Two",
    },
    {
        id: 3,
        name: "Three",
    },
];

const todoReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return state
        case ActionTypes.UPDATE_TODO:
            return state
        case ActionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
};

export default todoReducer;