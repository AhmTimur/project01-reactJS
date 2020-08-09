import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hello, what is your name?', likesCount: 20},
        {id: 2, message: 'Hi, my name is Ken', likesCount: 15}
    ]
}

test('renders learn react link', () => {
    // 1. test data
    let action = addPostActionCreator('BlaBla DaDa')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
test('newPost message should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('BlaBla DaDa')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[2].message).toBe('BlaBla DaDa')
});
test('after delete posts length should decrement', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(1)
});
test(`after delete posts length shouldn't decrement if it's incorrect`, () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
});