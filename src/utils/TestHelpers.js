import chai, { expect } from 'chai';
import chaiJQuery from 'chai-jquery';
import jquery from 'jquery';
import jsdom from 'jsdom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from '../rootReducer';
import { createStore } from 'redux';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

const $ = jquery(global.window);
chaiJQuery(chai, chai.util, $);

function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function (eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
