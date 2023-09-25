import React from 'react'
import Nav from '../components/Nav'

import "../styles/teamPageStyles.css"
import harsh from '../images/harsh.jpg'
import asmit from '../images/asmit.jpeg'
import sagar from '../images/sagar.jpeg'
import sumit from '../images/sumit.jpeg'
import shruti from '../images/shruti.jpeg'
import naman from '../images/naman.jpeg'
const TeamPage = () => {
  return (
    <>

        <Nav/>
        
        <section>
        
      <div class="row1">
        
        
        
        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={asmit} />
            </div>
            <h3>Asmit Raj</h3>
            <p>Flutter Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="http://www.linkedin.com/in/asmit-raj-266368241">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Asmit2021">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={harsh} />
            </div>
            <h3>Harsh Sonkar</h3>
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/dynamicHarsh">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:harshkrsonkar@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={naman} />
            </div>
            <h3>Naman Kulshreshth</h3>
            <p>Web Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Nkpro29">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={sagar} />
            </div>
            <h3>Sagar Guney</h3>
            <p>Cloud Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/sagar-guney-877614241">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/SagarG2003">
                <i class="fab fa-github"></i>
              </a>
              <a href="mailto:sagarguney@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        
        
        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={shruti} />
            </div>
            <h3>Shruti Sharma</h3>
            <p>Developer</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/shruti-sharma-5a8774217">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="column1">
          <div class="card1">
            <div class="img-container">
              <img src={sumit} />
            </div>
            <h3>Sumit Sarkar</h3>
            <p>AI / ML</p>
            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/SumitSarkar969">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
        
        
    </>
  )
}

export default TeamPage