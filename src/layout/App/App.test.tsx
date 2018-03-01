import * as React from 'react';
import { shallow }  from 'enzyme';
import enzymeToJson from 'enzyme-to-json';
import App from './App';

test('snapshot matching', () => {
    const component = shallow(
        <App />
    );

    expect(enzymeToJson(component)).toMatchSnapshot();
});