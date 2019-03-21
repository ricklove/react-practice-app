import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays loading by default', () => {
  const wrapper = shallow(<App />);
  const mainDiv = <div>Loading...</div>;
  expect(wrapper.contains(mainDiv)).toEqual(true);
});

it('displays sorry closed for greeting toggle disabled', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ isLoading: false, toggles: { greeting: false } });
  const mainDiv = <div>Sorry, we're Closed!</div>;
  expect(wrapper.contains(mainDiv)).toEqual(true);
});

it('displays hello world for greeting toggle enabled', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ isLoading: false, toggles: { greeting: true } });
  const mainDiv = <div>Hello World</div>;
  expect(wrapper.contains(mainDiv)).toEqual(true);
});

it('displays error message error', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ error: true });
  const mainDiv = <div>Oops, it broke!</div>;
  expect(wrapper.contains(mainDiv)).toEqual(true);
});

