import './components_css/project.css'

function Project() {
    return (
        <div className='project-section' id='projects'>
            <h2>My <span>Projects</span></h2>

            <div className='project-container'>

                {/* Card 1 */}
                <div className='project-card featured'>
                    <h3>Portfolio Website</h3>
                    <p>Personal portfolio built with React + TypeScript. Fully responsive with dark theme.</p>

                    <div className="tech-tags">
                        <span className="tag">React</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Vite</span>
                        <span className="tag">CSS</span>
                    </div>

                    <div className="card-buttons">
                        <a href="#" className="btn">GitHub</a>
                        <a href="#" className="btn">Live</a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='project-card'>
                    <h3>Todo App</h3>
                    <p>A task manager with add, complete, and delete. State management with useState.</p>

                    <div className="tech-tags">
                        <span className="tag">React</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Hooks</span>
                    </div>

                    <div className="card-buttons">
                        <a href="#" className="btn">GitHub</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project;