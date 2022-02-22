import React from "react";

 const Header = () => {
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-md-offset-2 intro-text'>
                  <h1>
                   Code
                    <span>Labor</span>
                  </h1>
                  <p>Kiszabadítunk az unalomból</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Foglalás
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  export default Header;
  