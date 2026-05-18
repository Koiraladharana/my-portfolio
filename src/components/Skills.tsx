import './components_css/skill.css'

function Skill(){
    return (
        <div className="skill-section">
            <h2>MY <span>Skills</span></h2>

            <h4>FRONTEND</h4>
            <div className='frontend-btn'>
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>React</button>
            <button>TypeScript</button>
            <button>Tailwind</button>
            </div>

            <h4>BACKEND</h4>
            <div className='backend-btn'>
                <button>Node.js</button>
                <button>Express</button>
                <button>REST APIs</button>
                <button>SQL</button>
            </div>

            <h4>TOOLS</h4>
            <div className='tools-btn'>
            <button>Git</button>
            <button>GitHub</button>
            <button>Vite</button>
            <button>Vs Code</button>
            </div>
        </div>
    )
}

export default Skill;