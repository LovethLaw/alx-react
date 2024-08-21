import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TextEncoder, TextDecoder } from 'util';
configure({ adapter: new Adapter() });

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;