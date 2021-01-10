import React from 'react';
import '../styles/resume.styl'

const Resume = () => {
  return(
    <main id="resume">
      <br />
      <br />
      <section className="card">
        <h1 className="res-hl">Kieran Milligan</h1>
        <div className="res-hl-con">
          <a href="https://www.google.com/maps/@41.9780324,-87.6462852,12z" target="_blank" rel="noopener noreferrer">Chicago, IL</a>
          &emsp; &#x25CF; &emsp;
          <a href="mailto: kieran.milligan@gmail.com">kieran.milligan@gmail.com</a>
          &emsp; &#x25CF; &emsp;
          <a href="https://www.linkedin.com/in/kieran-milligan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <section className="card">
        <h2 className="res-hl">Full Stack Web Applications Developer</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <ul>
          <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
          <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
        </ul>
      </section>

      <section className="card">
        <h3><u>Core Competencies</u></h3>
        <div className="res-comps">
          <ul>
            <li>Contrary to popular belief,</li>
            <li>Lorem Ipsum is not simply random text.</li>
          </ul>
          <ul>
            <li>It has roots in a piece of classNameical Latin literature from 45 BC</li>
            <li>Focus on Mobile-First Design</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h3><u>Certifications / Technical Proficiencies</u></h3>
        <div className="res-certs">
          <table>
            <tbody>
              <tr>
                <td className="data-left"><em>Certifications:</em></td>
                <td className="data-right">
                  <a href="https://freecodecamp.org/certification/kieran_milligan/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a>
                  <br/>
                  <a href="https://www.freecodecamp.org/certification/kieran_milligan/responsive-web-design"target="_blank" rel="noopener noreferrer">Responsive Web Design</a>
                  <br/>
                  <a href="https://www.scrumalliance.org/community/profile/kmilligan6" target="_blank" rel="noopener noreferrer">Certified Scrum Master</a>
                </td>
              </tr>
              <tr>
                <td className="data-left"><em>Platforms:</em></td>
                <td className="data-right">Linux, Windows, JAM, MERN, MEAN</td>
              </tr>
              <tr>
                <td className="data-left"><em>Databases/CMS:</em></td>
                <td className="data-right">Firebase, AWS, WordPress, Netlify, MongoDB, MySQL</td>
              </tr>
              <tr>
                <td className="data-left"><em>Tools:</em></td>
                <td className="data-right">React, Redux, Gatsby, Angular, Mongoose, Express, GraphQL, NPM, VSCode, Atom, SSH, Git, GitHub, and others</td>
              </tr>
              <tr>
                <td className="data-left"><em>Languages:</em></td>
                <td className="data-right">JavaScript, ESNext, JSX, HTML5, CSS3, SQL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <h3><u>Professional Experience</u></h3>
        <div className="res-exp">
          <div className="res-co-date">
            <p><strong>Company 1</strong></p>
            <p><strong>Dates</strong></p>
          </div>
          <p>Brief Company Description</p>
          <strong>Job Title</strong>
          <ul>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</li>
          </ul>
          <em><u>Key Contributions:</u></em>
          <ul>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</li>
            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h3><u>Education</u></h3>

        <div>
          <p className="res-sch-date">
            <span><u><a href="https://www.microtrain.net/programs/view/agile-full-stack-web-and-hybrid-mobile-application-development" target="_blank" rel="noopener noreferrer">MicroTrain</a> - Chicago, IL</u></span>
            <span>June 2020 - October 2020</span>
          </p>
          <strong>Agile Full Stack Web and Hybrid Mobile Application Development Certification</strong>
        </div>

        <br/>

        <div>
          <p className="res-sch-date">
            <span><u><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freeCodeCamp</a> - Online</u></span>
            <span>Ongoing</span>
          </p>
          <strong>
            <a href="https://freecodecamp.org/certification/kieran_milligan/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures</a>
          </strong>
          <br/>
          <strong>
            <a href="https://www.freecodecamp.org/certification/kieran_milligan/responsive-web-design"target="_blank" rel="noopener noreferrer">Responsive Web Design</a>
          </strong>
        </div>

      </section>
      <br />
      <br />
      <section className="resume-link">
        <a href="https://docs.google.com/document/d/1iNflTwAc3fSAzJ2OpGIHM9gRDLjK6CbTY7GYM6OllW8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download my Resume from Google Docs</a>
      </section>
    </main>
  );
}

export default Resume;
