const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const JestFetchMock = require('jest-fetch-mock');

global.fetch = JestFetchMock;

enzyme.configure({ adapter: new Adapter() });