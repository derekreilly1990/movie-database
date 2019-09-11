import { mdiEarth, mdiMovieOpenOutline, mdiTelevision } from '@mdi/js';
import { Discover } from '../components/discover/Discover';
import { Movies } from '../components/movies/Movies';
import { Series } from '../components/series/Series';

export const routes = [
	{
		label: 'Discover',
		icon: mdiEarth,
		path: '/Discover',
		component: Discover,
	},
	{
		label: 'Movies',
		icon: mdiMovieOpenOutline,
		path: '/Movies',
		component: Movies,
	},
	{
		label: 'Series',
		icon: mdiTelevision,
		path: '/Series',
		component: Series,
	},
];
