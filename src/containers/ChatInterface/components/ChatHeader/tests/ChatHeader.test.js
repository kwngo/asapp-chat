import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import ChatHeader from '../index.js' 

describe('<ChatHeader/>', () => {
    it('should have props for currentUser, participants and className', () => {
        const currentUser = {
            id: '0',
            username: 'test'
        };
        const participants = ['Amy', 'Jones'];
        const wrapper = mount(
            <ChatHeader 
                participants={participants} 
                currentUser={currentUser}
                className="test"
            />);
        expect(wrapper.props().currentUser).to.equal(currentUser);
        expect(wrapper.props().participants).to.equal(participants);
        expect(wrapper.props().className).to.equal("test");
    });

    it('should only use classname once', () => {
        const currentUser = {
            id: '0',
            username: 'test'
        };
        const participants = ['Amy', 'Jones'];

        const wrapper = shallow(
            <ChatHeader 
                participants={participants} 
                currentUser={currentUser}
                className="test"
            />);

        expect(wrapper.find('.test').length).to.equal(1);
    });

})
