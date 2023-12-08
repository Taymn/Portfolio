import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import DocumentIcon from '@mui/icons-material/Document'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, my name is Adam</h2>
        <div className='prompt'>
          <p>A web developer with a passion for learning and solving problems.</p>
          <a href='https://www.linkedin.com/in/adam-taylor-junior-web-deveolper/' target='_blank'>
            <LinkedInIcon />
          </a>
          <a href='https://docs.google.com/document/d/16Jd0lfV1H2V6uMcmflZKO36tGLYEudMaHz50fnq-vV8/edit?usp=sharing' target='_blank'>
            <DocumentIcon />
          </a>
          <a href='adamgt2003@gmail.com' target='_blank'>
            <EmailIcon />
          </a>
          <a href='https://github.com/Taymn' target='_blank'>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>

        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Soft Skills</h2>
            <span>
              Team Lead, Trainer, Coordinate with management and employees, Report writing, Oversea reporting, Scheduling, Performance evaluations
            </span>
          </li>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML5, CSS3, NPM, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MongoDB, Mongoose, Authorization, bcrypt
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript ES6</span>
          </li>
          <li className='item'>
            <h2>Debugging</h2>
            <span>Postman, Morgan, Dev Tools</span>
          </li>
          <li className='item'>
            <h2>Version Control</h2>
            <span>GitHub</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home