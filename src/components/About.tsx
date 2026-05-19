import './components_css/about.css'

function About(){
    return (
        <div className="about-section" id='about'>
            <div className='about-title'>
                <h2>About <span>me</span></h2>
            </div>
            <div className='about-detail'>
                <p>I'm a passionate full stack developer from Nepal, learning to build 
                modern web applications with React, Node.js, and TypeScript. I love 
                turning ideas into real products and writing clean, maintainable code.</p>
            </div>
            <div className='about-btn'>
                <button>
                    <span className='blue'>5+</span>
                    <p>Project Build</p>
                </button>
                <button>
                    <span className='blue'>3+</span>
                    <p>Tech stacks</p>
                </button>
                <button>
                    <span className='blue'>1</span>
                    <p>Year learning</p>
                </button>
            </div>
        </div>
    )
}

export default About;