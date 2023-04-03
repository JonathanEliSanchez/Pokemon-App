import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="pokemon"
                    >
                        Pokemon
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="types"
                    >
                        Types
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

           
        </nav>
    )
}