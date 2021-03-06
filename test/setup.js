import React from 'react';
import { expect  } from 'chai';
import { JSDOM } from 'jsdom';


const dom = new JSDOM('<!doctype html><html><body></body></html>');
const win = dom.window;

global.document = dom.window.document;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }

});

global.React = React;
global.expect = expect;
