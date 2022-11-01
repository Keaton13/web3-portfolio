import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { dataImage } from "../../plugin/plugin";
import { LightgalleryProvider } from "react-lightgallery";
import { PhotoItem } from "../../plugin/lightGalleryOptions";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { CloseButton } from "../../plugin/svg";

export default function PortfolioDefault({ ActiveIndex }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleOnClick = (index) => {
    setActiveTab(index); // remove the curly braces
  };

  // for popup video
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  // image modal popup
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  const imagesCollection = [
    ["img/portfolio/Kickstart.png"],
    ["img/portfolio/Nft-Marketplace.png"],
  ];

  return (
    <>
      {/* <!-- PORTFOLIO --> */}

      <div
        className={
          ActiveIndex === 2
            ? "cavani_tm_section active animated fadeInUp"
            : "cavani_tm_section hidden animated"
        }
        id="portfolio_"
      >
        <div className="section_inner">
          <div className="cavani_tm_portfolio">
            <div className="cavani_tm_title">
              <span>Creative Portfolio</span>
            </div>

            <div className="portfolio_filter">
              <ul>
                <li>
                  <a
                    onClick={() => handleOnClick(1)}
                    href="#"
                    className="current"
                    data-filter="*"
                  >
                    Projects
                  </a>
                </li>
                {/* <li><a onClick={() => handleOnClick(2)} href="#" data-filter=".vimeo">Vimeo</a></li>
                                <li><a onClick={() => handleOnClick(3)} href="#" data-filter=".youtube">Youtube</a></li>
                                <li><a onClick={() => handleOnClick(4)} href="#" data-filter=".soundcloud">Soundcloud</a></li>
                                <li><a onClick={() => handleOnClick(6)} href="#" data-filter=".detail">Detail</a></li>
                                <li><a onClick={() => handleOnClick(5)} href="#" data-filter=".image">Image</a></li> */}
              </ul>
            </div>
            <div className="portfolio_list">
              <ul
                className={
                  activeTab === 1 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              >
                <li className="soundcloud">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Nft-Marketplace.png"
                        onClick={toggleModalFour}
                      ></div>
                      <span className="icon">
                        <i className="icon-soundcloud-1"></i>
                      </span>
                      <div className="details">
                        <h3>Nft Marketplace</h3>
                        <span>Click here for more info</span>
                      </div>
                      {/* <a className="cavani_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a> */}
                    </div>
                  </div>
                </li>
                <li className="detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Kickstart.png"
                        onClick={toggleModalFive}
                      ></div>
                      <span className="icon">
                        <i className="icon-doc-text-inv"></i>
                      </span>
                      <div className="details">
                        <h3>Kickstart</h3>
                        <span>Click here for more info</span>
                      </div>
                      {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                    </div>
                  </div>
                </li>
                <li className="detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Curator-1.png"
                        onClick={toggleModalThree}
                      ></div>
                      <span className="icon">
                        <i className="icon-doc-text-inv"></i>
                      </span>
                      <div className="details">
                        <h3>Curator</h3>
                        <span>Click here for more info</span>
                      </div>
                      {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                    </div>
                  </div>
                </li>

                {/* Photo Gallery Started */}
                {/* Photo Gallery End */}
              </ul>

              <ul
                className={
                  activeTab === 2 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              >
                <li className="vimeo">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                        onClick={() => setIsOpen2(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>Kelly Hookin</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul
                className={
                  activeTab === 3 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              >
                <li className="youtube">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                        onClick={() => setIsOpen(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-youtube-play"></i>
                      </span>
                      <div className="details">
                        <h3>Ave Brook</h3>
                        <span>Youtube</span>
                      </div>
                      {/* <a className="cavani_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a> */}
                    </div>
                  </div>
                </li>
              </ul>

              <ul
                className={
                  activeTab === 4 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              >
                <li className="soundcloud">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                        onClick={toggleModalThree}
                      ></div>
                      <span className="icon">
                        <i className="icon-soundcloud-1"></i>
                      </span>
                      <div className="details">
                        <h3>Ashley Flores</h3>
                        <span>Soundcloud</span>
                      </div>
                      {/* <a className="cavani_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a> */}
                    </div>
                  </div>
                </li>
              </ul>

              <ul
                className={
                  activeTab === 5 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              ></ul>

              <ul
                className={
                  activeTab === 6 ? "gallery_zoom" : "gallery_zoom d-none"
                }
              >
                <li className="detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/6.jpg"
                        onClick={toggleModalFour}
                      ></div>
                      <span className="icon">
                        <i className="icon-doc-text-inv"></i>
                      </span>
                      <div className="details">
                        <h3>Alice Moon</h3>
                        <span>Detail</span>
                      </div>
                      {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /PORTFOLIO --> */}

      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      {/* <ModalVideo
                channel=""
                autoplay
                isOpen={isOpen3}
                videoId="https://soundcloud.com/bestnotesound/upbeat-corporate-uplifting-motivational-download-free-music-royalty-free-music-background?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                onClose={() => setOpen3(false)}
            /> */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        openTimeoutMS={300}
      >
        <div className="cavani_tm_modalbox opened">
          <div className="box_inner">
            <div className="close" onClick={toggleModalThree}>
              <a href="#">
                <i className="icon-cancel" />
              </a>
            </div>
            <div className="description_wrap">
              <div className="popup_details">
                <div className="top_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/Curator-2.png"
                    style={{
                      backgroundImage: "url(./img/portfolio/Curator-2.png",
                    }}
                  />
                </div>
                <div class="portfolio_main_title">
                  <h3>Curator</h3>
                  <span>
                    Full Stack Web3 Application that shows wallet stats and
                    NFT's along with current market prices
                  </span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      Curator is my first web3 application created by me that
                      lets users view wallet statistics like the amount of eth,
                      total gas spent, and total eth transferred. It also has a
                      ticker that shows real-time crypto prices and statistics
                      like coinmarketcap. Lastly, there is an nft tab that lets
                      people view current nfts in their wallet on the Ethereum
                      network.
                    </p>
                    <p>
                      Curator currently does interact with any smart contacts but uses
                      web3 injected and Moralis. 
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://curatorv2.herokuapp.com/#/">
                          Here
                        </Link>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/curator">
                          Front and Back-end
                        </Link>
                      </li>
                      <li>
                        <span className="first">Date</span>
                        <span>March 07, 2021</span>
                      </li>
                      <li>
                        <span className="first">Share</span>
                        <ul className="share">
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/facebook.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/twitter.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/instagram.svg"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/NFT-Connect.png" }}></div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/NFT-Mint.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/Nft-Sell.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        openTimeoutMS={300}
      >
        <div className="cavani_tm_modalbox opened">
          <div className="box_inner">
            <div className="close" onClick={toggleModalFour}>
              <a href="#">
                <i className="icon-cancel" />
              </a>
            </div>
            <div className="description_wrap">
              <div className="popup_details">
                <div className="top_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/Nft-Marketplace.png"
                    style={{
                      backgroundImage:
                        "url(./img/portfolio/Nft-Marketplace.png",
                    }}
                  />
                </div>
                <div class="portfolio_main_title">
                  <h3>NFT Marketplace</h3>
                  <span>Full Stack Web3 Application</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      NFT Marketplace is a functioning Nft Marketplace that lets
                      users mint, list, update, sell and buy nfts. This project
                      was created in the Patrick Collins 32-hour blockchain
                      course. This final project pushed the boundaries of my
                      web3 knowledge. From creating the contracts backend to
                      testing and deploying them, this is a full-stack
                      application. We also created a front end that lets users
                      interact with metamask and the smart contracts associated
                      with the project.
                    </p>
                    <p>
                      After finishing the project with many hours of debugging
                      and redeploying to the Goerli network due to Rinkeby
                      depreciation, I finally got the project running smoothly
                      and added a mint function. This was done in the backend
                      previously by running a mint and list function. Now any
                      user on the site with a logged-in metamask can buy and
                      mint nfts from my collection. This feature took me a while
                      to build but it gave me a vast understanding of the whole
                      development cycle.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://nftmarketplace-fcc.netlify.app/">
                          Here
                        </Link>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/nft-marketplace-thegraph">
                          Front-End
                        </Link>
                        <br></br>
                        <Link href="https://github.com/Keaton13/hardhat-nft-marketplace-fcc">
                          Back-End
                        </Link>
                      </li>
                      <li>
                        <span className="first">Date</span>
                        <span>March 07, 2021</span>
                      </li>
                      <li>
                        <span className="first">Share</span>
                        <ul className="share">
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/facebook.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/twitter.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/instagram.svg"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/NFT-Connect.png" }}></div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/NFT-Mint.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/Nft-Sell.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        openTimeoutMS={300}
      >
        <div className="cavani_tm_modalbox opened">
          <div className="box_inner">
            <div className="close" onClick={toggleModalFive}>
              <a href="#">
                <i className="icon-cancel" />
              </a>
            </div>
            <div className="description_wrap">
              <div className="popup_details">
                <div className="top_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/Kickstart.png"
                    style={{
                      backgroundImage: "url(./img/portfolio/Kickstart.png",
                    }}
                  />
                </div>
                <div class="portfolio_main_title">
                  <h3>Kickstart</h3>
                  <span>A defi dao application</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      Kickstart is a defi dao application that lets users create
                      campaigns, view campaigns, contribute, view fund requests,
                      add fund requests. This project was created in the Stephen
                      Grider's complete blockchain developemnt course. This
                      course was 24 hours long and was the first full-stack
                      blockchain course I completed.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://crypto-kickstart.netlify.app/">
                          Here
                        </Link>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/Kickstart">
                          Here
                        </Link>
                      </li>
                      <li>
                        <span className="first">Date</span>
                        <span>March 07, 2021</span>
                      </li>
                      <li>
                        <span className="first">Share</span>
                        <ul className="share">
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/facebook.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/twitter.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/instagram.svg"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div className="additional_images">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/Kickstart-Create-Request.png" }}></div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/Kickstart-Create.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <div className="my_image">
                                                    <img src="./img/thumbs/4-2.jpg" alt="" />
                                                    <div className="main" style={{ backgroundImage: "url(./img/portfolio/Kickstart-Requests.png" }}></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
