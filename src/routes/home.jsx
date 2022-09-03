import { NavLink, Outlet } from 'react-router-dom'

export default function Home({ topMovies }) {
    const activeLinkStyle = ({ isActive }) => {
      return {
        margin: "1rem 0",
        color: isActive ? "red" : "",
      };
    }

    return (
      <div>
        <header>
          <h1>Movie Search</h1>
        </header>
        <nav>*
          <NavLink style = {activeLinkStyle} to="/top" state={{ data: topMovies }}>Top Movies</NavLink>   *
          <NavLink style = {activeLinkStyle} to="/search">Search Movies</NavLink>   *
          <NavLink style = {activeLinkStyle} to="/favorites">Favorites</NavLink>   *
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    )
}
