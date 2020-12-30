import * as ActionTypes from '../actionTypes';

export const addTodo = todo => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo,
    }
};

export const updateTodo = todo => {
    return {
        type: ActionTypes.UPDATE_TODO,
        payload: todo,
    }
};

export const deleteTodo = todoId => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: todoId,
    }
};