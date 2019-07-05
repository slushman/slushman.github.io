import { shallowFactory } from '../../../testutils';

import NotFoundPage from './404';

const defaultProps = {
	location: {
		pathname: '',
	},
	posts: [
		{
			node: {
				frontmatter: {
					date: 'sdsfb',
					title: 'afbdfb',
				},
				fields: {
					slug: 'asdfbdfb',
				},
			},
		},
		{
			node: {
				frontmatter: {
					date: 'sdvsfb',
					title: 'djytfg',
				},
				fields: {
					slug: 'srtjtyj',
				},
			},
		},
	],
};
const factory = shallowFactory( NotFoundPage, defaultProps );

describe('<NotFoundPage />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundPosts = wrapper.find('Posts');

		expect(wrapper.exists()).toBe(true);
		expect(foundPosts.exists()).toBe(true);
	});
});
