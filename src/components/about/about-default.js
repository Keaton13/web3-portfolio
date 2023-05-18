import React from "react";
import Image from "next/image";
import ProgressBar from "../progressBar";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const circleProgressData = [
  { language: "English", progress: 95 },
  { language: "Russian", progress: 80 },
  { language: "Arabic", progress: 90 },
];

const progressBarData = [
  { bgcolor: "#7d7789", completed: 90, title: "Javascript" },
  { bgcolor: "#7d7789", completed: 80, title: "Solidity" },
  { bgcolor: "#7d7789", completed: 90, title: "React" },
  { bgcolor: "#7d7789", completed: 75, title: "Node.js" },
  { bgcolor: "#7d7789", completed: 70, title: "Next.js" },
];

const services = [
  {
    desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
    img: "img/testimonials/1.jpg",
    info1: "Alexander Walker",
    info2: "Graphics Designer",
  },
  {
    desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
    img: "img/testimonials/2.jpg",
    info1: "Baraka Clinton",
    info2: "Construction Engineering",
  },
  {
    desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
    img: "img/testimonials/3.jpg",
    info1: "Armin Van Buuren",
    info2: "Content Manager",
  },
];

export default function AboutDefault({ ActiveIndex }) {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <div
        className={
          ActiveIndex === 1
            ? "cavani_tm_section active animated fadeInUp"
            : "cavani_tm_section active hidden animated"
        }
        id="about_"
      >
        <div className="section_inner">
          <div className="cavani_tm_about">
            <div className="biography">
              <div className="cavani_tm_title">
                <span>About Me</span>
              </div>
              <div className="wrapper">
                <div className="left">
                  <p>
                    Greetings! 
                    My name is Keaton Kriger, and I have been coding
                    since 2017. As a dedicated and passionate blockchain
                    developer, I am committed to pushing the boundaries of what
                    is possible in this exciting and ever-evolving field.
                  </p>
                  <p>
                    My journey into Web3 began in 2017 when I discovered my
                    passion for both blockchain development and web development.
                    As I honed my skills through a web development bootcamp and
                    my personal research into cryptocurrency trading, I saw the
                    potential to merge my passions as a blockchain developer,
                    sparking my journey into the exciting world of Web3.
                  </p>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <span className="first">Name:</span>
                      <span className="second">Keaton Krieger</span>
                    </li>
                    <li>
                      <span className="first">Address:</span>
                      <span className="second">Murrieta, California</span>
                    </li>
                    <li>
                      <span className="first">Study:</span>
                      <span className="second">Learning Fuze</span>
                    </li>
                    <li>
                      <span className="first">Mail:</span>
                      <span className="second">
                        <a href="#">keatonkrieger@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span className="first">Phone:</span>
                      <span className="second">1-714-788-1840</span>
                    </li>
                  </ul>
                  <div className="cavani_tm_title mt-10">
                    <span className="mb-5">Web2 Portfolio</span>
                    <div className="cavani_tm_button transition_link">
                      <p className="mb-5">
                        View my web2 portfolio below! There I list all the Web2
                        technologies I know.
                      </p>
                      <Link href="https://dev.keatonkrieger.com">
                        <a>View</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="partners">
              <div className="cavani_tm_title">
                <span>Web3 Technologies</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner container">
                      <img
                        src="img/technologies/solidity.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://docs.soliditylang.org/en/v0.8.16/#"
                      ></a>
                      <span className="span-position-class">Solidity</span>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/zeppelin.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://www.openzeppelin.com/contracts"
                      ></a>
                      <span className="span-position-class">OpenZeppelin</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/chainlink.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://chain.link/"
                      ></a>
                      <span className="span-position-class">Chainlink</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner" id="blue">
                      <img
                        src="img/technologies/ethers.svg"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://docs.ethers.io/v5/"
                      ></a>
                      <span className="span-position-class">Ethers.js</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner container" id="black">
                      <img src="img/technologies/hardhat.svg" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://hardhat.org/"
                      ></a>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/moralis.svg"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://moralis.io/"
                      ></a>
                      <span className="span-position-class">Moralis</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/web3.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://web3js.readthedocs.io/en/v1.7.5/"
                      ></a>
                      <span className="span-position-class">Web3Js</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/The-Graph.png"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://thegraph.com/en/"
                      ></a>
                      <span className="span-position-class">The-Graph</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner container">
                      <img
                        src="img/technologies/graphql.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://graphql.org/"
                      ></a>
                      <span className="span-position-class">GraphQl</span>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/web3Auth.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://web3auth.io/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/Apollo2.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://www.apollographql.com/docs/react/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/truffle.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://trufflesuite.com/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner container">
                      <img src="img/technologies/waffle.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://getwaffle.io/"
                      ></a>
                      <div></div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/chai.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/remix.png"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://remix-project.org/"
                      ></a>
                      <span className="span-position-class">Remix</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/metamask-1.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://metamask.io/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/next.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://nextjs.org/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/react.png"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://reactjs.org/"
                      ></a>
                      <span className="span-position-class">React</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/redux (1).png"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://redux.js.org/"
                      ></a>
                      <span className="span-position-class">Redux</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img
                        src="img/technologies/react-router-logo.webp"
                        className="about-image-bottom-margin"
                        alt=""
                      />
                      <a
                        className="cavani_tm_full_link"
                        href="https://reactrouter.com/en/main"
                      ></a>
                      <span className="span-position-class">React Router</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/js.png" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/node.png" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://nodejs.org/en/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/AWS.png" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://aws.amazon.com/"
                      ></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/technologies/tailwind.webp" alt="" />
                      <a
                        className="cavani_tm_full_link"
                        href="https://tailwindcss.com/"
                      ></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="resume">
              <div className="wrapper">
                <div className="experience">
                  <div className="cavani_tm_title">
                    <span>Experience</span>
                  </div>
                  <div className="list">
                    <div className="univ">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2022 - Present</span>
                            </div>
                            <div className="place">
                              <h3>Freelance</h3>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2021 - 2022</span>
                              <span>December - May</span>
                            </div>
                            <div className="place">
                              <h3>Youthink Academy</h3>
                              <span>Project Manager/Web Developer</span>
                            </div>
                          </div>
                        </li>
                        {/* <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2012 - 2015</span>
                            </div>
                            <div className="place">
                              <h3>FC Barcelona</h3>
                              <span>Football Player</span>
                            </div>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="education">
                  <div className="cavani_tm_title">
                    <span>Education</span>
                  </div>
                  <div className="list">
                    <div className="univ">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2019</span>
                            </div>
                            <div className="place">
                              <h3>Learning Fuze Bootcamp</h3>
                              <span>React/React Redux Course</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2017-2018</span>
                            </div>
                            <div className="place">
                              <h3>Learning Fuze</h3>
                              <span>Full Stack Web Development Bootcamp</span>
                            </div>
                          </div>
                        </li>
                        {/* <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2008 - 2010</span>
                            </div>
                            <div className="place">
                              <h3>Simone College</h3>
                              <span>Associate Degree</span>
                            </div>
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="services">
              <div className="wrapper">
                <div className="service_list">
                  <div className="cavani_tm_title">
                    <span>Services</span>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Dapps</li>
                      <li>Smart Contracts</li>
                      <li>ERC721</li>
                      <li>Front-End / Backend</li>
                      <li>Databases</li>
                    </ul>
                  </div>
                </div>
                <div className="service_list">
                  <div className="cavani_tm_title">
                    <span>Interests</span>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Dirt Bike Riding</li>
                      <li>PC Gaming</li>
                      <li>Elk Hunting</li>
                      <li>Spear Fishing</li>
                      <li>Working on Cars</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="skills">
              <div className="wrapper">
                <div className="programming" id="programmingWidth">
                  <div className="cavani_tm_title">
                    <span>Programming</span>
                  </div>
                  <div className="cavani_progress">
                    {progressBarData.map((item, idx) => (
                      <ProgressBar
                        key={idx}
                        bgcolor={item.bgcolor}
                        completed={item.completed}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div> */}
            {/* <div className="language">
                  <div className="cavani_tm_title">
                    <span>Language</span>
                  </div>
                  <div className="circular_progress_bar">
                    <div className="circle_holder">
                      {circleProgressData.map((item, idx) => (
                        <div key={idx}>
                          <div className="list_inner">
                            <CircularProgressbar
                              value={item.progress}
                              text={`${item.progress}%`}
                              strokeWidth={3}
                              stroke="#7d7789"
                              Language={item.language}
                              className={"list_inner"}
                            />
                            <div className="title">
                              <span>{item.language}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
            {/* </div>
            </div> */}
            {/* <div className="testimonials">
              <div className="cavani_tm_title">
                <span>Testimonials</span>
              </div>
              <div className="list">
                <ul className="">
                  <li>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      // navigation={{
                      //     prevEl: ".custom_prev",
                      //     nextEl: ".custom_next",
                      // }}
                      className="custom-class"
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {services.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className="list_inner">
                            <div className="text">
                              <i className="icon-quote-left" />
                              <p>{item.desc}</p>
                            </div>
                            <div className="details">
                              <div className="image">
                                <div className="main" data-img-url={item.img} />
                              </div>
                              <div className="info">
                                <h3>{item.info1}</h3>
                                <span>{item.info2}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- ABOUT --> */}
    </>
  );
}
