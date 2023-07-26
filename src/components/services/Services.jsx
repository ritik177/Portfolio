import React from 'react'
import './services.css';
import{BiCheck} from 'react-icons/bi';


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>

            <h3>UI(User Interface)</h3>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Visual Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Layout Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Responsive Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prototyping</p>
            </li>
        
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Style Guide Creation</p>
            </li>

            <h3>UX(User Experience)</h3>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Usability Testing</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>User Research</p>
            </li> 

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Iterative Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Collaboration with Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Information Architecture</p>
            </li>

          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Web Application Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Front-End Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Back-End Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Database Design and Management</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>API Integration</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Deployment and Hosting</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Version Control</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Testing and Debugging</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Security</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous Learning</p>
            </li>

          </ul>
        </article>
        {/* END OF WEB Development */}

        <article className='service'>
          <div className="service_head">
            <h3>JAVA & DSA</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Basic Java Concepts</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Java Collections Framework</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Sorting and Searching Algorithms</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>GUI(Graphical User Interface)Applications</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Graph Algorithms</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Dynamic Programming</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>arrays, linked lists, stacks, queues, trees, and graphs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Design Patterns</p>
            </li>

          </ul>
        </article>
        {/* END OF JAVA & DSA */}
      </div>
    </section>
  )
}

export default Services