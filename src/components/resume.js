import React from 'react';
import '../styles/resume.styl';

const Resume = () => {
  return (
    <main id="resume">
      <br />
      <br />
      <section className="card">
        <h1 className="res-hl" style={{ color: 'white' }}>
          Kieran Milligan
        </h1>
        <div className="res-hl-con">
          <a href="https://www.google.com/maps/@41.9780324,-87.6462852,12z" target="_blank" rel="noopener noreferrer">
            Chicago, IL
          </a>
          &emsp; &#x25CF; &emsp;
          <a href="mailto: kieran.milligan@gmail.com">kieran.milligan@gmail.com</a>
          &emsp; &#x25CF; &emsp;
          <a href="https://www.linkedin.com/in/kieran-milligan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <section className="card">
        <h2 className="res-hl">Full Stack Web Applications Developer</h2>
        <p>
          Creative web developer dedicated to building and optimizing the performance of user-centric, high-impact
          websites for nationwide, F500 and global companies. Leverage technical, analytical and problem-solving skills
          to create dynamic, high-speed websites, apps and platforms fueling competitive advantage and revenue growth.
        </p>
      </section>

      <section className="card">
        <h3>
          <u>Core Competencies</u>
        </h3>
        <div className="res-comps">
          <ul>
            <li>Web Development</li>
            <li>Cross-Browser Compatibility</li>
            <li>Agile Methodologies</li>
            <li>CRM & CMS Platforms</li>
            <li>Coding & Programming</li>
            <li>Site Troubleshooting</li>
          </ul>
          <ul>
            <li>Hosting & Maintenance</li>
            <li>Information Architecture</li>
            <li>Cross-Browser Compatibility</li>
            <li>Digital / eCommerce Strategy</li>
            <li>Multimedia Design</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h3>
          <u>Certifications / Technical Proficiencies</u>
        </h3>
        <div className="res-certs">
          <table>
            <tbody>
              <tr>
                <td className="data-left">
                  <em>Certifications:</em>
                </td>
                <td className="data-right">
                  <a
                    href="https://freecodecamp.org/certification/kieran_milligan/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaScript Algorithms and Data Structures
                  </a>
                  <br />
                  <a
                    href="https://www.freecodecamp.org/certification/kieran_milligan/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Responsive Web Design
                  </a>
                  <br />
                  <a
                    href="https://www.scrumalliance.org/community/profile/kmilligan6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Certified Scrum Master
                  </a>
                </td>
              </tr>
              <tr>
                <td className="data-left">
                  <em>Platforms:</em>
                </td>
                <td className="data-right">Linux, Windows, JAM, MERN, MEAN</td>
              </tr>
              <tr>
                <td className="data-left">
                  <em>Databases/CMS:</em>
                </td>
                <td className="data-right">Firebase, AWS, WordPress, Netlify, MongoDB, MySQL</td>
              </tr>
              <tr>
                <td className="data-left">
                  <em>Tools:</em>
                </td>
                <td className="data-right">
                  React, Redux, Gatsby, Angular, Mongoose, Express, GraphQL, NPM, VSCode, Atom, SSH, Git, GitHub, and
                  others
                </td>
              </tr>
              <tr>
                <td className="data-left">
                  <em>Languages:</em>
                </td>
                <td className="data-right">JavaScript, ESNext, JSX, HTML5, CSS3, SQL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* -----------------------WORK HISTORY---------------------- */}
      <section className="card">
        <h3>
          <u>Professional Experience</u>
        </h3>
        {/* ----------------------*/}
        <section className="res-exp">
          <div className="res-co-location">
            <p>
              <strong>Web Developer / Home Technical Support</strong>
            </p>
            <p>
              <strong>Chicago, IL</strong>
            </p>
          </div>
          <div class="res-co-date">
            <strong>Freelance</strong>
          </div>

          <ul>
            <li>Develop SEO-friendly websites for local businesses and organizations</li>
            <li>Software and OS troubleshooting and configuration w/ emphasis on Windows</li>
            <li>Extraction from Corrupt File Systems using various Linux Distros</li>
            <li>Set up solutions for External or Cloud Storage based on recommendation and end-user viability</li>
          </ul>
        </section>
        {/* ----------------------*/}
        <section className="res-exp">
          <div className="res-co-location">
            <p>
              <strong>Amazon Pop-Up</strong>
            </p>
            <p>
              <strong>Tinley Park, IL</strong>
            </p>
          </div>
          <div class="res-co-date">
            <strong>Store Manager</strong>
          </div>

          <ul>
            <li>
              Trained associates on device operation and navigation for entire line of Amazon Echo, Fire (Tablet and
              TV), Smart Home Integration, and other assorted products/services
            </li>
            <li>Provided on-going training and mentor-ship in Customer Service, Sales, and Tech Support</li>
            <li>Handled All Shipping, Logistics, and Inventory Control</li>
            <li>
              Encouraged Teamwork across all sister locations, and made myself regularly available to district
              associates in need of operations support
            </li>
          </ul>
        </section>
        {/* ----------------------*/}
        <section className="res-exp">
          <div className="res-co-location">
            <p>
              <strong>Convergy's</strong>
            </p>
            <p>
              <strong>Hazelwood, MO</strong>
            </p>
          </div>
          <div class="res-co-date">
            <strong>Senior Technical Specialist</strong>
          </div>

          <ul>
            <li>
              Technical Support in a Call Center environment assisting customers with internet connectivity and device
              networking issues
            </li>
            <li>Strong knowledge of Home Networking and TCP/IP protocols</li>
            <li>
              Contributed to continual improvement by suggesting improvements to software architecture, software
              development process and new technologies
            </li>
            <li>Member of Special Projects team overseeing data migration from client acquisitions</li>
          </ul>
        </section>
        {/* ----------------------*/}
        <section className="res-exp">
          <div className="res-co-location">
            <p>
              <strong>IATSE Local #6</strong>
            </p>
            <p>
              <strong>St. Louis, MO</strong>
            </p>
          </div>
          <div class="res-co-date">
            <strong>Stage-Hand/Lighting Assistant</strong>
          </div>

          <ul>
            <li>Stage Hand and Lighting Assistant for local concerts and event venues.</li>
            <li>Loaded and unloaded trucks and equipment</li>
            <li>Installed and repaired wiring and equipment for electrical lines and A/V Receivers</li>
            <li>Examined tools and equipment to determine causes of operating errors</li>
            <li>Substituted damaged mechanisms and reconstructed or repaired them</li>
            <li>Guaranteed safety and cleanliness standards on the job</li>
          </ul>
        </section>
      </section>

      <section className="card">
        <h3>
          <u>Education</u>
        </h3>
        {/* ----------------------*/}
        <div>
          <p className="res-sch-date">
            <span>
              <u>
                <a
                  href="https://www.microtrain.net/programs/view/agile-full-stack-web-and-hybrid-mobile-application-development"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MicroTrain
                </a>{' '}
                - Chicago, IL
              </u>
            </span>
            <span>June 2020 - October 2020</span>
          </p>
          <strong>Agile Full Stack Web and Hybrid Mobile Application Development Certification</strong>
        </div>
        <br />
        <br />
        {/* ----------------------*/}
        <div>
          <p className="res-sch-date">
            <span>
              <u>
                <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                  freeCodeCamp
                </a>{' '}
                - Online
              </u>
            </span>
            <span>Ongoing</span>
          </p>
          <strong>
            <a
              href="https://freecodecamp.org/certification/kieran_milligan/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Algorithms and Data Structures
            </a>
          </strong>
          <br />
          <strong>
            <a
              href="https://www.freecodecamp.org/certification/kieran_milligan/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Responsive Web Design
            </a>
          </strong>
        </div>
        <br />
        <br />
        {/* ----------------------*/}
        <div>
          <p className="res-sch-date">
            <span>
              <u>
                <a href="https://www.jjc.edu/" target="_blank" rel="noopener noreferrer">
                  Joliet Junior College
                </a>{' '}
                - Joliet, IL
              </u>
            </span>
            <span>Spring 2017</span>
          </p>
          <strong>Computer Science Courses</strong>
        </div>
        <br />
        <br />
        {/* ----------------------*/}
        <div>
          <p className="res-sch-date">
            <span>
              <u>
                <a href="https://www.umsl.edu/" target="_blank" rel="noopener noreferrer">
                  University of Missouri
                </a>{' '}
                - Saint Louis, MO
              </u>
            </span>
            <span>Fall 2007 - Spring 2008</span>
          </p>
          <strong>Communications</strong>
        </div>
        <br />
        <br />
        {/* ----------------------*/}
        <div>
          <p className="res-sch-date">
            <span>
              <u>
                <a
                  href="https://stlcc.edu/campus-life-community/our-locations/florissant-valley/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saint Louis Community College
                </a>{' '}
                - Florissant, MO
              </u>
            </span>
            <span>Fall 2003 - Spring 2006</span>
          </p>
          <strong>Journalism</strong>
        </div>
        <br />
        <br />
        {/* ----------------------*/}

        {/* ----------------------*/}
      </section>
      <br />
      <br />
      <section className="resume-link">
        <a
          href="https://docs.google.com/document/d/1iNflTwAc3fSAzJ2OpGIHM9gRDLjK6CbTY7GYM6OllW8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my Resume from Google Docs
        </a>
      </section>
    </main>
  );
};

export default Resume;
