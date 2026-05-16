import './components_css/navbar.css'

function Navbar(){
    return (
    <div className="navbar">
        <div className="logo"> <h3>DK.</h3></div>
        <div className="nav-right-section">
            <div className='nav-list'>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
            </div>
            <button className='button'>Hire Me</button>
        </div>
    </div>
    );
}

export default Navbar;