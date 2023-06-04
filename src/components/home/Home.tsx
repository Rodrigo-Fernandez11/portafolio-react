import profileImg from '../../assets/profile-img.png'

import './home.css'

import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'


export const Home = () => {
  return (
    <section className='home' id='home'>
        <div className='home__container container'>
            <p className='home__subtitle text-cs'>
                Hello, <span> My Name Is</span>
            </p>

            <h1 className='home__title text-cs'>
                <span>RODRIGO</span> PEÑA FERNANDEZ
            </h1>

            <p className='home__job'>
                <span className='text-cs'>I am</span> <b>Web Developer</b>
            </p>

            <p className='home__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quasi aperiam sequi veniam dolorem quis odit recusandae sapiente repellat ad consequatur, quidem praesentium eligendi tempore molestiae corrupti, aliquam, vitae sint.
            </p>

            <div className='home__img-wrapper'>
                <div className='home__banner'>
                    <img src={profileImg} alt='' className='home__profile' />
                </div>
            </div>

            <div className='home__socials'>
                <a href='#' className='home__social-link'>
                    <FaTwitter />
                </a>

                <a href='#' className='home__social-link'>
                    <FaGithub />
                </a>

                <a href='#' className='home__social-link'>
                    <FaLinkedin />
                </a>
            </div>
            <div className='home__btns'>
                <a href="" className='btn text-cs'>Dowload</a>
                <a href="" className='hero__link text-cs'>My Skills</a>
            </div>
        </div>
    </section>
  )
}
