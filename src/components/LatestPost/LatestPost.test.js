import { shallowFactory } from '../../../testutils';

import LatestPost from './LatestPost';

const defaultProps = {};
const factory = shallowFactory( LatestPost, defaultProps );

describe('<LatestPost />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});
