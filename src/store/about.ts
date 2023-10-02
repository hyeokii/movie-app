import { Store } from "../core/hyeok";
import photo from "../../images/favicon.png";

interface State {
  photo: typeof photo;
  name: string;
  email: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: photo,
  name: "HYEOK / KimJaeHyeok",
  email: "rlawogur0533@gmail.com",
  github: "https://github.com/gurworla",
  repository: "https://github.com/gurworla/movie-app",
});
