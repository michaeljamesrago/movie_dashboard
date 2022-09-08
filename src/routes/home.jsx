import { NavLink, Outlet } from 'react-router-dom'

// This is the home route of the app, with navigation links to top, search 
// and favorite routes.
export default function Home({ topMovies }) {
    const activeLinkStyle = ({ isActive }) => {
      return {
        margin: "1rem 0",
        fontWeight: isActive ? "bold" : "normal",
        backgroundColor: isActive ? "#fa2fb5" : "#ffc23c",
        color: isActive ? "#fa2fb5" : "#ffc23c",
        textShadow: isActive ? "1px 1px 3px #100720" : "1px 1px 3px #fa2fb5"
      };
    }

    return (
      <div>
        <header>
          <div className='header-title'>MOVIE DASHBOARD</div>
        </header>
        <nav>
          <NavLink style = {activeLinkStyle} to="/top"><div className="nav-button">TOP MOVIES</div></NavLink>
          <NavLink style = {activeLinkStyle} to="/search"><div className="nav-button">SEARCH MOVIES</div></NavLink>
          <NavLink style = {activeLinkStyle} to="/favorites"><div className="nav-button">FAVORITES</div></NavLink>
        </nav>
        <main className="main">
          <Outlet />
        </main>
      </div>
    )
}
