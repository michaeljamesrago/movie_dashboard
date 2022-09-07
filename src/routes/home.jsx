import { NavLink, Outlet } from 'react-router-dom'

export default function Home({ topMovies }) {
    const activeLinkStyle = ({ isActive }) => {
      return {
        margin: "1rem 0",
        color: isActive ? "red" : "",
        fontWeight: isActive ? "bold" : "normal"
      };
    }

    return (
      <div>
        <header>
          <h1>Movie Dashboard</h1>
        </header>
        <nav>
          <NavLink style = {activeLinkStyle} to="/top"><div className="nav-button">TOP MOVIES</div></NavLink>
          <NavLink style = {activeLinkStyle} to="/search"><div className="nav-button">SEARCH MOVIES</div></NavLink>
          <NavLink style = {activeLinkStyle} to="/favorites"><div className="nav-button">FAVORITES</div></NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    )
}
