import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG11 from "../../assets/portfolio11.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG9 from "../../assets/Chat_App.png";
import IMG8 from "../../assets/portfolio8.png";

//DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG9,
    title: "Chat App",
    github: "https://github.com/ritik177/ChatApp",
    demo: "https://chatapp-g12p.onrender.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "Amazon clone",
    github: "https://github.com/ritik177/Amazon-Clone",
    demo: "https://amazon-clone-lqqk.onrender.com/",
  },
  {
    id: 3,
    image: IMG11,
    title: "E-Commerce Website",
    github: "https://github.com/ritik177/E-Commerce-website",
    demo: "https://e-commerce-website-qzt3.vercel.app/",
  },

  {
    id: 4,
    image: IMG2,
    title: "CRUD Application Using MERN Stack",
    github: "https://github.com/ritik177",
    demo: "https://crud-frontent-ritik177.vercel.app/",
  },

  {
    id: 5,
    image: IMG8,
    title: "TO-DO-LIST Using React.js",
    github: "https://github.com/ritik177/Todo_List_Using_Reactjs",
    demo: "https://todo-list-using-reactjs-lemon.vercel.app/",
  },
  {
    id: 10,
    image: IMG3,
    title: "Book My Movie Ticket",
    github: "https://github.com/ritik177",
    demo: "https://book-movie-ticket-pi.vercel.app/",
  },

  {
    id: 6,
    image: IMG4,
    title: "Music App Clone",
    github: "https://github.com/ritik177",
    demo: "https://music-app-seven-tau.vercel.app/",
  },

  {
    id: 7,
    image: IMG5,
    title: "Calculator",
    github: "https://github.com/ritik177/Calculator",
    demo: "https://calculator-six-nu.vercel.app/",
  },

  {
    id: 8,
    image: IMG6,
    title: "Tic-Tac-Toe Game",
    github: "https://github.com/ritik177",
    demo: "https://tic-tac-toe-theta-dun.vercel.app/",
  },
  {
    id: 9,
    image: IMG7,
    title: "BirthDay_Wishes",
    github: "https://github.com/ritik177/Birthday-Wishes",
    demo: "https://birthday-wishes-eosin.vercel.app/",
  },
  {
    id: 10,
    image: IMG3,
    title: "Book My Movie Ticket",
    github: "https://github.com/ritik177",
    demo: "https://book-movie-ticket-pi.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
