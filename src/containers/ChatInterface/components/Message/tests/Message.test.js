import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Message from '../index.js';

describe('<Message/>', () => {
    it ('should have props defined', () => {
        const sent = false;
        const avatar = "www.avatar.com";
        const createdAt = new Date();
        const content = "This is content";
        const wrapper = mount(
            <Message 
                sent={sent}
                avatar={avatar}
                createdAt={createdAt}
                content={content}
            />
        );
        expect(wrapper.props().sent).to.equal(sent);
        expect(wrapper.props().createdAt).to.equal(createdAt);
        expect(wrapper.props().content).to.equal(content);
        expect(wrapper.props().avatar).to.equal(avatar);

    })
});
