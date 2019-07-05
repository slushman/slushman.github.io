import { shallowFactory } from '../../../testutils';

import AboutPage from './AboutPage';

const defaultProps = {};
const factory = shallowFactory( AboutPage, defaultProps );

describe('<AboutPage />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});
