import React from 'react'
import './certificate.css';
import IMG1 from '../../assets/certificate1.jpg';
import IMG2 from '../../assets/certificate2.jpg';
import IMG3 from '../../assets/certificate3.jpg';
import IMG4 from '../../assets/certificate4.jpg';
import IMG5 from '../../assets/certificate5.jpg';
import IMG6 from '../../assets/portfolio6.png';

//DO NOT USE THE IMAGES IN PRODUCTION


const data=[
{
  id:1,
  image:IMG1,
  title:"Web Development Masterclass",
  demo:'https://www.udemy.com/certificate/UC-5c74d355-e653-4f18-980b-73e82c1458fe/'
},

{
  id:2,
  image:IMG2,
  title:"Bootstrap & jQuery",
  demo:'https://www.udemy.com/certificate/UC-cdafad31-7043-4962-967a-05887d28295b/'
},

{
  id:3,
  image:IMG3,
  title:"Programming Language (Java)",
  demo:'https://www.hackerrank.com/certificates/ace0591aec1b'
},

{
  id:4,
  image:IMG4,
  title:"Programming Language (python)",
  demo:'https://www.hackerrank.com/certificates/9c60fac84b8e'
},

{
  id:5,
  image:IMG5,
  title:"CSS & JavaScript",
  demo:'https://www.udemy.com/certificate/UC-f20be525-d141-46c2-8c67-67cb7e43f054/'
},

// {
//   id:6,
//   image:IMG6,
//   title:"Tic-Tac-Toe Game",
//   demo:'https://tic-tac-toe-theta-dun.vercel.app/'
// }

];

const Portfolio = () => {
  return (
    <section id='certificate'>
      {/* <h5>My Recent Work</h5> */}
      <h2> Certificates</h2>

      <div className="container portfolio_container">
        
        {
          data.map(({id,image,title,demo})=>{
            return(
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             <div className="portfolio_item-cta">
             
              <a href={demo} className='btn btn-primary' target='_blank'>Show</a>
             </div>
            </article>
            )
          })
        }
  
      </div>

    </section>
  )
}

export default Portfolio