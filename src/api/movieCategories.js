import { apiConstants } from './apiConstants';
import { language } from './criteria/language';
import { movieGenre } from './criteria/movieGenre';

export const movieCategories = [
	{
		title: 'Most Popular',
		url:
			apiConstants.movieDiscoverBaseUrl + apiConstants.urlApiKey + '&sort_by=popularity.desc&certification_country=US',
	},
	{
		title: 'Kids Movies',
		url:
			apiConstants.movieDiscoverBaseUrl +
			apiConstants.urlApiKey +
			'&sort_by=popularity.desc&certification_country=US&certification.lte=G',
	},
	{
		title: 'Action Movies',
		url: apiConstants.movieDiscoverBaseUrl + apiConstants.urlApiKey + movieGenre.Action + language.en,
	},
	{
		title: 'War Movies',
		url: apiConstants.nowPlayingBaseUrl + apiConstants.urlApiKey + movieGenre.War + language.en,
	},
	{
		title: 'Romance Movies',
		url: apiConstants.nowPlayingBaseUrl + apiConstants.urlApiKey + movieGenre.Romance + language.en,
	},
	{
		title: 'Horror Movies',
		url: apiConstants.nowPlayingBaseUrl + apiConstants.urlApiKey + movieGenre.Horror + language.en,
	},
];
