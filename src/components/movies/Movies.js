import React from 'react';
import { MovieRoll } from '../movie-roll/MovieRoll';
import { movieCategories } from '../../api/movieCategories';

export const Movies = () => {
	return movieCategories.map((movieCategory) => {
		return <MovieRoll title={movieCategory.title} url={movieCategory.url} />;
	});
};
