import './components_css/navbar.css'

function Navbar(){

    const scrollTo = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id '${id}' not found.`);
        }
    }

    return (
    <div className="navbar">
        <div className="logo">
            <h3 onClick={() => scrollTo('home')}>DK.</h3>
        </div>
        <div className="nav-right-section">
            <nav className='nav-list'>   {/* ✅ use <nav> instead of <div> for semantics */}
                <ul>
                    <li onClick={() => scrollTo('home')}>Home</li>
                    <li onClick={() => scrollTo('about')}>About</li>
                    <li onClick={() => scrollTo('skills')}>Skills</li>
                    <li onClick={() => scrollTo('projects')}>Projects</li>
                </ul>
            </nav>
            <button className='button' onClick={() => scrollTo('contact')}>Hire Me</button>
        </div>
    </div>
    );
}

export default Navbar;