import {describe} from 'ava-spec';
import sinon from 'sinon';
import React from 'react';
import { mount } from 'enzyme';
import Modal from '../javascripts/Modal';

describe('<Modal />', it => {
  it('閉じるボタンを押してonRequestCloseのコールバックが呼ばれるか', t => {
    const props = { onRequestClose: sinon.spy() };
    const wrapper = mount(<Modal {...props} />);

    wrapper.find('.modal__close').simulate('click');
    t.is(props.onRequestClose.called, true);
  });
});
