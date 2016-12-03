import assert from 'assert';
import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Modal from '../javascripts/Modal.js';

describe('<Modal />', () => {
  it('閉じるボタンを押してonRequestCloseのコールバックが呼ばれるか', () => {
    const props = { onRequestClose: sinon.spy() };
    const wrapper = mount(<Modal {...props} />);

    wrapper.find('.modal__close').simulate('click');
    assert(props.onRequestClose.called === true);
  });

  it('マウントされてから三秒後にonRequestCloseのコールバックが呼ばれるか', () => {
    const clock = sinon.useFakeTimers();
    const props = { onRequestClose: sinon.spy() };
    const wrapper = mount(<Modal {...props} />);

    clock.tick(1000);
    assert(props.onRequestClose.called === false);

    clock.tick(2000);
    assert(props.onRequestClose.called === true);
  });
});
