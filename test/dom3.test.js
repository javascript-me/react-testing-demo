import React from 'react';
import {findDOMNode} from 'react-dom';
import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import App from '../app/components/App';

describe('DOM Rendering', function (done) {
  it('Add an new Todo item, when click the new todo button', function () {
    const app = TestUtils.renderIntoDocument(<App/>);
    const appDOM = findDOMNode(app);
    let todoItemsLength = appDOM.querySelectorAll('.todo-text').length;
    let addInput = appDOM.querySelector('input');
    addInput.value = 'Todo four';
    let addButton = appDOM.querySelector('.add-todo button');

    expect(addButton.innerHTML).to.be.equal("Add Todo");

    TestUtils.Simulate.click(addButton);
    expect(appDOM.querySelectorAll('.todo-text').length).to.be.equal(todoItemsLength + 1);
  });
});

