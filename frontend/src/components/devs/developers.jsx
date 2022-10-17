import React from 'react'
import Style from './developers.css'
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub'
import { AiFillLinkedin } from '@react-icons/all-files/ai/AiFillLinkedin'
import { SiAngellist } from '@react-icons/all-files/si/SiAngellist'

class Developers extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }


    render() {
        console.log(this.props)
        if (this.props.users)
            return (
               <div className='the-developers'>
                <div id='grid'>
                
                    <div className='developer-blob'>
                        <p className='dev-name'> Jacob Roger-Gordon</p>
                        <div className='links'>
                            <img src="../../images/workout3.png" alt="" />
                            <a className='dev-icon' href="https://github.com/jrogergordon"><AiFillGithub size="40"/></a>
                            <a className='dev-icon' href="https://angel.co/u/jacob-roger-gordon"><SiAngellist size="40" /></a>
                            <a className='dev-icon' href="https://www.linkedin.com/in/jacobrogergordon/"><AiFillLinkedin size="40" /></a>
                        </div>

                    </div>


                    <div className='developer-blob'>

                        <p className='dev-name'> Freddie Rendon</p>
                        <div className='links'>
                            <img src="../../images/workout4.png" alt="" />
                            <a className='dev-icon' href="https://github.com/freddyrendon"><AiFillGithub size="40" /></a>
                            <a className='dev-icon' href="https://angel.co/u/freddy-rendon"><SiAngellist size="40" /></a>
                            <a className='dev-icon' href="https://www.linkedin.com/in/freddy-rendon-3302a9234/"><AiFillLinkedin size="40" /></a>
                        </div>

                    </div>


                    <div className='developer-blob'>
                        <p className='dev-name'> Aloysius </p>
                            <div className='links'>
                                <img src="../../images/workout1.png" alt="" />
                                <a className='dev-icon' href="https://github.com/Aloysius172"><AiFillGithub size="40" /></a>
                                <a className='dev-icon' href="https://angel.co/u/aloysius-ekezie"><SiAngellist size="40" /></a>
                                <a className='dev-icon' href="https://www.linkedin.com/in/aloysius-ekezie-65419224b/"><AiFillLinkedin size="40" /></a>
                            </div>

                    </div>


                    <div className='developer-blob'>
                        <p className='dev-name'> Carlos Morales</p>
                            <div className='links'>
                                <img src="../../images/workout2.png" alt="" />
                                <a className='dev-icon' href="https://github.com/Carlostache"><AiFillGithub size="40" /></a>
                                <a className='dev-icon' href="https://angel.co/u/carlos-g-morales"><SiAngellist size="40" /></a>
                                <a className='dev-icon' href="https://www.linkedin.com/in/carlos-morales-9556a024b/"><AiFillLinkedin size="40" /></a>
                            </div>

                    </div>
                </div>

               </div>
               
            )
    }



}
export default Developers