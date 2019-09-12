import { apiConstants } from './apiConstants';
import { language } from './criteria/language';
import { tvGenre } from './criteria/tvGenre';

export const tvCategories = [
	{
		title: 'Most Popular',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + '&sort_by=popularity.desc&certification_country=US',
	},
	{
		title: 'Kids',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + tvGenre.Kids,
	},
	{
		title: 'Action & Adventere',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + tvGenre['Action & Adventure'] + language.en,
	},
	{
		title: 'Fantasy',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + tvGenre.Fantasy + language.en,
	},
	{
		title: 'Crime',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + tvGenre.Crime + language.en,
	},
	{
		title: 'Drama',
		url: apiConstants.tvDiscoverBaseUrl + apiConstants.urlApiKey + tvGenre.Drama + language.en,
	},
];
