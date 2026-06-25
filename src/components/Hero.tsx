import './components_css/hero.css'

function Hero() {
    return (
       <div className='hero-section' id='home'>
        <div className='hero-left'>
            <div className='left-available-btn'>
                <button>Available For Work</button>
            </div>

            <div className='left-name'>
                <p>Hi, I'm <span className='spann'>Dharana</span> <span>Koirala</span></p>
            </div>

            <div className='left-skill'>
                <p>Full Stack Developer · React · Node.js · Express · MongoDB</p>
                <span className='left-skill-div'>Building clean, fast, and scalable web applications.</span>
            </div>

            <div className='left-btn'>
                <button className='view-btn'>View My Work</button>
                <button className='download-btn'>Download CV</button>
            </div>
        </div>
        <div className='hero-right'>
            <div className='avatar-circle'>DK</div>
        </div>
       </div>
    )
}

export default Hero;