import { Component } from "../core/hyeok";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MoveList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /* html */ `
      <div class="movies"></div>
    `;

    const movieEl = this.el.querySelector(".movies");
    movieEl.append(
      ...movieStore.state.movies.map(
        (movie) =>
          new MovieItem({
            movie: movie,
          }).el
      )
    );
  }
}
