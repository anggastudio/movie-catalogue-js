import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log('NowPlaying movies', movies);
  },
};

export default NowPlaying;