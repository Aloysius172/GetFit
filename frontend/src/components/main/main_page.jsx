import React from 'react';
import MainStyling from './main_page.css'
import { Link } from 'react-router-dom'


const Greeting = ({ currentUser, logout, openModal, processDemoLogin }) => {

  const sessionLinks = () => (
    <div className="greeting">
      <div id="landing">


        <div id="arm-left">
          <a href="http://localhost:3000/#/exercises">
            <div id="arm-left-link" ></div>
          </a>
        </div>

        <div id="arm-left-blurb">
          <p className='empty-blurb'>There are plenty of muscle groups in your
            arms, like your biceps and triceps. Click now to look at some ways you can exercise them!</p>
        </div>


        <div id="arm-right">
          <a href="http://localhost:3000/#/exercises">
            <div id="arm-right-link"></div>
          </a>
        </div>

        <div id="arm-right-blurb">
          <p className='empty-blurb'> There are plenty of muscle groups in your
            arms, like your biceps and triceps.Click now to look at some ways you can exercise them! </p>
        </div>


        <div id="chest">
          <a href="http://localhost:3000/#/exercises">
            <div id="chest-link"></div>
          </a>
        </div>

        <div id="chest-blurb">
          <p className='empty-blurb'>There are plenty of muscle groups in your
            chest, like your pectorals and your deltoids.Click now to look at some ways you can exercise them!</p>
        </div>


        <div id="abs">
          <a href="http://localhost:3000/#/exercises">
            <div id="abs-link"></div>
          </a>
        </div>

        <div id="abs-blurb">
          <p className='empty-blurb'>There are plenty of muscle groups in your
            abs, like your internal and external obliques.Click now to look at some ways you can exercise them!</p>
        </div>


        <div id="leg-left">
          <a href="http://localhost:3000/#/exercises">
            <div id="leg-left-link"></div>
          </a>
        </div>
        <div id="leg-left-blurb">
          <p className='empty-blurb'>There are plenty of muscle groups in your
            legs, like your quadriceps, and your hamstrings.Click now to look at some ways you can exercise them!</p>
        </div>


        <div id="leg-right">
          <a href="http://localhost:3000/#/exercises">
            <div id="leg-right-link"></div>
          </a>
        </div>

        <div id="leg-right-blurb">
          <p className='empty-blurb'>There are plenty of muscle groups in your
            legs, like your quadriceps, and your hamstrings.Click now to look at some ways you can exercise them!</p>
        </div>
      </div>
      <div id="landing-intro">
        <p className='empty-blurb'>Hello! Welcome to GetFit, a fitness app to help you
          cultivate workout regimens for yourself and others. Head to our "exercises" tab
          to see info on some general exercises, and click on our "regiments" link to create
          a workout regiment with those exercises. Here on our landing page you can interact
          with our bodu diagram and see which exercises suit which muscle groups. Have a fit day!
        </p>
        </div>
        </div>

        

      );

      return sessionLinks();
}



export default Greeting;