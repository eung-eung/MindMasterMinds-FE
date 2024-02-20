import React from 'react'
import classes from './explore.module.css'

export default function Explore() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className={`exploreTittle ${classes.exploreTittle} sm:text-3xl font-medium mb-2`}>
              Explore Our Academic Offerings Chart Your Path to Success
            </h1>
            <p className={`${classes.p} lg:w-2/3 mx-auto leading-relaxed text-base`}>
              Discover top-notch study resources spanning a wide range of subjects to propel you toward academic achievement.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-12 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                      <path d="M91.7323 40.826V53.8272L82.1884 54.7605C81.245 58.9765 79.5487 62.9876 77.181 66.6012L83.3448 74.0351L74.1539 83.2058L66.72 77.0419C63.113 79.4314 59.0898 81.123 54.859 82.029L53.9257 91.6703H40.9083L39.975 82.029C35.7512 81.101 31.7319 79.411 28.114 77.0419L20.6801 83.2058L11.4892 74.0351L17.653 66.6012C15.261 63.0006 13.5627 58.9848 12.6457 54.7605L2.99213 53.8272V40.826L12.6457 39.8927C13.5915 35.6763 15.2876 31.6643 17.653 28.048L11.4892 20.6141L20.6801 11.4434L28.114 17.6072C31.7231 15.2218 35.7456 13.5305 39.975 12.6202L40.9083 2.98291H53.9257L54.859 12.6202C59.0822 13.55 63.1012 15.2398 66.72 17.6072L74.1539 11.4434L83.2353 20.6141L77.0714 28.048C79.4622 31.6502 81.1591 35.6674 82.0747 39.8927L91.7323 40.826ZM69.0695 47.3266C69.0763 43.0334 67.8094 38.8346 65.4291 35.2616C63.0489 31.6887 59.6622 28.9021 55.6977 27.2545C51.7332 25.6069 47.369 25.1724 43.1575 26.0059C38.9459 26.8394 35.0763 28.9036 32.0382 31.9371C29.0002 34.9706 26.9303 38.8371 26.0905 43.0474C25.2506 47.2577 25.6786 51.6225 27.3203 55.5894C28.9619 59.5564 31.7434 62.9473 35.3128 65.3329C38.8823 67.7185 43.0791 68.9917 47.3724 68.9913C53.1223 68.9948 58.6381 66.7145 62.707 62.6517C66.7758 58.589 69.0644 53.0765 69.0695 47.3266Z" fill="black" />
                    </svg>
                  </div>
                  <h3 className={classes.item}>Software Engineering</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-12 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/images/artificial_intelligence.svg" width="96" height="96" />
                  </div>
                  <h3 className={classes.item}>Artificial Intelligence</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-12 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/images/digital_art.svg" width="96" height="84" />
                  </div>
                  <h3 className={classes.item}>Digital Art Design</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-12 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/images/digital_marketing.png" width="96" height="96" />
                  </div>
                  <h3 className={classes.item}>Digital Marketing</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-10 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                      <g clipPath="url(#clip0_628_100)">
                        <path d="M40.2881 64.1293V60.156H12.5149L12.4752 76.0491C12.4752 80.4594 16.0114 83.9957 20.4217 83.9957H76.0475C80.4578 83.9957 83.994 80.4594 83.994 76.0491V60.156H56.1812V64.1293H40.2881ZM80.0208 28.3699H64.088V20.4233L56.1414 12.4768H40.2483L32.3018 20.4233V28.3699H16.4485C12.0779 28.3699 8.50192 31.9458 8.50192 36.3164V48.2362C8.50192 52.6466 12.0381 56.1828 16.4485 56.1828H40.2881V48.2362H56.1812V56.1828H80.0208C84.3914 56.1828 87.9673 52.6068 87.9673 48.2362V36.3164C87.9673 31.9458 84.3914 28.3699 80.0208 28.3699ZM56.1812 28.3699H40.2881V20.4233H56.1812V28.3699Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_628_100">
                          <rect width="95.3585" height="95.3585" fill="white" transform="translate(0.555389 0.556885)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className={classes.item}>International Business</h3>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-6">
              <div className={`${classes.box} flex relative`}>
                <div className="flex  md:flex-row flex-col items-center px-10 py-10 relative z-10 w-full">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/images/multimedia_comunicate.svg" width="96" height="96" />
                  </div>
                  <h3 className={classes.item}>Multimedia comunicate</h3>
                </div>
              </div>
            </div>
          </div>
          <button className={`${classes.button} flex mx-auto mt-16 text-white py-2 px-8`}>
            <p className={`${classes.typography} w-full text-center`}>View all</p>
          </button>

        </div>

      </section>
    </div>
  )
}
