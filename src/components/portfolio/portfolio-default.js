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

  // image modal popup
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
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
                <li className="detail">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Petrol_Trader_2.png"
                        onClick={toggleModalSix}
                      ></div>
                      <span className="icon">
                        <i className="icon-doc-text-inv"></i>
                      </span>
                      <div className="details" onClick={toggleModalSix}>
                        <h3>Petrol Trader</h3>
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
                        data-img-url="img/portfolio/Curator-V3-3.png"
                        onClick={toggleModalThree}
                      ></div>
                      <span className="icon">
                        <i className="icon-doc-text-inv"></i>
                      </span>
                      <div className="details" onClick={toggleModalThree}>
                        <h3>Curator</h3>
                        <span>Click here for more info</span>
                      </div>
                      {/* <a className="cavani_tm_full_link portfolio_popup" href="#"></a> */}
                    </div>
                  </div>
                </li>
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
                      <div className="details" onClick={toggleModalFour}>
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
                      <div className="details" onClick={toggleModalFive}>
                        <h3>Kickstart</h3>
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
                    data-img-url="img/portfolio/Curator-V3.png"
                    style={{
                      backgroundImage: "url(./img/portfolio/Curator-V3-2.png",
                    }}
                  />
                </div>
                <div class="portfolio_main_title">
                  <h3>Curator</h3>
                  <span>Web3 Application</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      Curator v3 was a conceptual milestone that sparked my
                      journey into blockchain development. The platform is
                      envisioned as a comprehensive web3 resource, delivering
                      crucial data such as coin stats/pricing, whale
                      transactions, trending NFT collections, and NFT portfolio
                      value. At present, this project does not incorporate smart
                      contracts.
                    </p>
                    <p>
                      The application employs web3 injection for wallet
                      connectivity and utilizes APIs from Opensea,
                      CoinMarketCap, Whale Alert, and Moralis.io to ensure
                      accurate and timely data retrieval.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://curator-v3.netlify.app/">
                          Here
                        </Link>{" "}
                        <span>*Must use Mainnet</span>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/Curator-v3">
                          Here
                        </Link>
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
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        openTimeoutMS={300}
      >
        <div className="cavani_tm_modalbox opened">
          <div className="box_inner">
            <div className="close" onClick={toggleModalSix}>
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
                    data-img-url="img/portfolio/Curator-V3.png"
                    style={{
                      backgroundImage:
                        "url(./img/portfolio/Petrol_Trader_2.png",
                    }}
                  />
                </div>
                <div class="portfolio_main_title">
                  <h3>Petrol Trader</h3>
                  <span>Full Stack NFT Car Marketplace</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      Petrol Trader represents a comprehensive, Full-Stack NFT
                      marketplace facilitating the purchase and sale of cars
                      leveraging Ethereum and ERC721 technology. The project is
                      presently operational on the Goerli test network.
                    </p>
                    <p>
                      As my most intricate decentralized application (DApp) to
                      date, Petrol Trader deploys Rainbowkit and Wagmi for
                      wallet connectivity, utilizes both Ethers.js and Web3.js
                      for seamless interaction with the smart contract and
                      transaction execution, and employs Truffle for meticulous
                      smart contract migrations and deployment.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://petroltraderv1.netlify.app/">
                          Here
                        </Link>{" "}
                        <span>*Must use Georli</span>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/PetrolTrader">
                          Here
                        </Link>
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
                  <span>Full Stack Web3 NFT Marketplace</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      NFT Marketplace represents a fully functional NFT
                      platform, empowering users to mint, list, update, sell,
                      and buy NFTs. Conceived during the comprehensive 32-hour
                      blockchain course led by Patrick Collins, this project
                      profoundly expanded the limits of my Web3 expertise. The
                      development process encompassed the creation of backend
                      smart contract code, meticulous testing, deployment, and
                      the development of a user-friendly front-end enabling
                      interaction with MetaMask and the project's associated
                      smart contracts.
                    </p>
                    <p>
                      Upon completion, due to Rinkeby's depreciation, I
                      transitioned the contract to the Goerli network. Ensuring
                      smooth operation on the Goerli platform, I further
                      enhanced the project by incorporating a minting function,
                      seamlessly connecting it to the front-end. Initially, the
                      minting and listing functions were executed via command
                      line in the backend. However, with the new update, any
                      user logged into MetaMask and connected to the correct
                      network can directly mint and purchase NFTs from my
                      collection on the site. While this feature presented a
                      significant development challenge, it ultimately enriched
                      my understanding of the comprehensive development cycle.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://nftmarketplace-fcc.netlify.app/">
                          Here
                        </Link>{" "}
                        <span>*Must use Georli</span>
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
                  <span>A DeFi Dao Application</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      Kickstart, a DeFi DAO application, facilitates user
                      engagement by enabling the creation and viewing of
                      campaigns, contributing to campaigns, viewing fund
                      requests, and adding fund requests. This project was a
                      significant component of Stephen Grider's comprehensive
                      24-hour blockchain development course, representing the
                      first full-stack blockchain course I completed.
                    </p>
                    <p>
                      While the application utilizes an older version of
                      Solidity, it effectively encapsulates the essential
                      aspects of the Web3 development cycle in a single,
                      cohesive application, thus standing as a testament to my
                      progression in blockchain development.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Live Project Link</span>
                        <Link href="https://crypto-kickstart.netlify.app/">
                          Here
                        </Link>
                        <span> *Must use Georli</span>
                      </li>
                      <li>
                        <span className="first">Github</span>
                        <Link href="https://github.com/Keaton13/Kickstart">
                          Here
                        </Link>
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
