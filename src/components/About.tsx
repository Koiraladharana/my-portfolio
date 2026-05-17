import './components_css/about.css'

function About(){
    return (
        <div className="about-section">
            <div className='about-title'>
                <h2>About <span>me</span></h2>
            </div>
            <div className='about-detail'>
                <p>I'm a passionate full stack developer from Nepal, learning to build modern web applications with
                     React, Node.js, and TypeScript. I love turning ideas into real products and writing clean,
                      maintainable code.</p>
            </div>
            <div className='about-btn'>
                <button>
                    <div className='blue'>5+</div>
                    <p>Project Build</p>
                </button>
                <button>
                    <div className='blue'>3+</div>
                    <p>Tech stacks</p>
                </button>
                <button className='last-btn'>
                    <div className='blue'>1</div>
                    <p >Year learning</p>
                </button>
            </div>
        </div>
    )
}

export default About;