import React from 'react';
import ReactDOM from 'react-dom';
import ColumnsSelector from './columns-selector';
import { shallow, render, mount } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ColumnsSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('displays Columns header', () => {
    const wrapper = shallow(<ColumnsSelector />);
    const mainDiv = <div>Columns</div>;
    expect(wrapper.contains(mainDiv)).toEqual(true);
});

it('displays a column id', () => {
    const wrapper = render(<ColumnsSelector />);
    expect(wrapper.html()).toContain('hasNotes--metadata');
    // expect(wrapper.contains('hasNotes--metadata')).toEqual(true);
});

it('displays the first column found by id', () => {
    const wrapper = render(<ColumnsSelector />);
    expect(wrapper.find('#hasNotes--metadata').length).toEqual(1);
});

it('displays the first column found by prop', () => {
    const wrapper = mount(<ColumnsSelector />);
    expect(wrapper.contains({ id: 'hasNotes--metadata' })).toEqual(true);
});
