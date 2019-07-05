import { shallowFactory } from '../../../testutils';

import HomePage from './HomePage';

const defaultProps = {};
const factory = shallowFactory( HomePage, defaultProps );

describe('<HomePage />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundLatest = wrapper.find('LatestPost');

		expect(wrapper.exists()).toBe(true);
		expect(foundLatest.exists()).toBe(true);
	});
});
