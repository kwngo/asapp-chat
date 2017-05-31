import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import ChatInput from '../index.js';

describe('<ChatInput/>', () => {
    it('should run handlers when submit/typing', () => {
        const addMessage = sinon.spy();
        const handleMessage = sinon.spy();
        const inputRef = sinon.spy();
        const wrapper = shallow(
            <ChatInput
                addMessage={addMessage}
                handleMessage={handleMessage}
                inputRef={inputRef}
            />)
        wrapper.find('form').simulate('submit')
        expect(addMessage).to.have.property('callCount', 1)
        wrapper.find('input').simulate('change', {target: {value: 'My new value'}});
        expect(handleMessage).to.have.property('callCount', 1);
    })
})
