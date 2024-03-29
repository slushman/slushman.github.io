import React from 'react';

import Github from '../SVGs/GitHub';
import LinkedIn from '../SVGs/LinkedIn';
import RSS from '../SVGs/RSS';

import {
	linkLabel,
	linkStyle,
	menuItem,
	menuList,
} from './socialmenu-styles';

const SocialMenu = () => (
	<nav>
		<ul css={ menuList }>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://github.com/slushman">
					<Github />
					<p css={ linkLabel }>GitHub</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.linkedin.com/in/chriswilcoxson/">
					<LinkedIn />
					<p css={ linkLabel }>LinkedIn</p>
				</a>
			</li>
			<li css={ menuItem }>
				<a css={ linkStyle } href="https://www.slushman.com/rss.xml">
					<RSS />
					<p css={ linkLabel }>RSS</p>
				</a>
			</li>
		</ul>
	</nav>
);

export default React.memo(SocialMenu);
