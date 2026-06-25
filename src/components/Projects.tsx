import './components_css/project.css'
import movieImg from '../assets/movie.JPG'
import profile from '../assets/pro.JPG'

interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    github: string
    live: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Project Two",
        description: "Short description of your second project goes here.",
        tags: ["React", "CSS", "HTML"],
        github: "https://github.com/Koiraladharana/my-portfolio",
        live: "https://5173-cs-473132266018-default.cs-asia-east1-vger.cloudshell.dev/",
        image: profile,   // leave empty until you have an image
    },
     {
        id: 2,
        title: "MovieFetch",
        description: "A movie discovery app powered by the TMDB API. Browse trending films, search, and save favorites.",
        tags: ["React", "TMDB API", "JavaScript", "CSS", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Koiraladharana/E-commerce",
        live: "https://moviefetch-one.vercel.app/",
        image: movieImg,
    },
]

function Project() {
    return (
        <section className='project-section' id='projects'>
            <h2>My <span>Projects</span></h2>

            <div className='project-container'>
                {projects.map((project) => (
                    <div key={project.id} className='project-card'>

                        <div className='card-image'>
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className='card-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className='tech-tags'>
                                {project.tags.map((tag) => (
                                    <span className='tag' key={tag}>{tag}</span>
                                ))}
                            </div>

                            <div className='card-buttons'>
                                {project.live !== '#' && (
                                    <a href={project.live} className='btn btn-primary' target='_blank' rel='noreferrer'>Live ↗</a>
                                )}
                                {project.github !== '#' && (
                                    <a href={project.github} className='btn' target='_blank' rel='noreferrer'>GitHub ↗</a>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Project;