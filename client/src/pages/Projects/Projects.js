import React from 'react';
import './Projects.css';
import PortfolioImg from './Personal_portfolio_image.png'
import Spin from 'react-reveal/Spin';

const Projects = () => {
  return (
    <>
      <div className='container project' id='projects'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className='pb-3 text-center'>
            Below are some of my most recent and impactful projects that demonstrate my skills in full-stack and desktop application development.
        </p>

        {/* Card section wrapped in Spin */}
          <div className="row" id='ads'>
            <Spin>
            {/* Card 1 */}
            <div className="col-md-4">
              <div className='card rounded'>
                <div className="card-image">
                  <span className="cart-notify-badge">Full stack</span>
                  <img src="https://i.pinimg.com/1200x/c7/97/b9/c797b978b194d33c6ec802a162d98f00.jpg" alt="project1" />
                </div>
                <div className="card-image-overfly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Shopping Website</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/sravanthi-27/E-commerce-shopping-website-using-mern">View</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className='card rounded'>
                <div className="card-image">
                  <span className="cart-notify-badge">Desktop APP</span>
                  <img src="https://i.pinimg.com/736x/1d/cd/79/1dcd797a01380117c5a0e22222581ddf.jpg" alt="project2" />
                </div>
                <div className="card-image-overfly m-auto mt-3">
                  <span className="card-detail-badge">Python</span>
                  <span className="card-detail-badge">PyQt5</span>
                  <span className="card-detail-badge">SQLite</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Inventory Management System</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/sravanthi-27/Inventory_management_system">View</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className='card rounded'>
                <div className="card-image">
                  <span className="cart-notify-badge">Personal</span>
                  <img src={PortfolioImg} alt="project3" />
                </div>
                <div className="card-image-overfly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Portfolio Website</h5>
                  </div>
                  <a className="ad-btn" href="view">View</a>
                </div>
              </div>
            </div>
            </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;  