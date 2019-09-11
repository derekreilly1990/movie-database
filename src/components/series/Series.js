import React from 'react';
import { MovieRoll } from '../movie-roll/MovieRoll';
import { tvCategories } from '../../api/tvCategories';

export const Series = () => {
	return tvCategories.map((tvCategory) => {
		return <MovieRoll title={tvCategory.title} url={tvCategory.url} isSeries={true} />;
	});
};
