import './components_css/contact.css'

function Contact(){
    return(
        <div className='contact-sec' id='contact'>
            <h2>Get in <span>Touch</span></h2>
               <div className='contact-flex-sec'>
            <div className='contact-left'>
                <div>
                    <p>Email:</p>
                    <h6>koiraladharana21@gmail.com</h6>
                </div>
                <div className='a-link'>
                    <p>GitHub:</p>
                    <a href="https://github.com/Koiraladharana/my-portfolio" target='tag' >Dharana</a>
                </div>
                <div className='a-link'>
                    <p>LinkedIn:</p>
                    <a href='https://www.linkedin.com/in/dharana-koirala-7b030431a/' target='tag'>Dharana</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;