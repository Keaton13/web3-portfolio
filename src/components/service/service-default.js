import React, { useState } from 'react'
import { dataImage } from '../../plugin/plugin'
import Modal from 'react-modal';
import {SVG_Custom1, SVG_Custom2, SVG_Custom3, SVG_Custom4, SVG_Custom5, SVG_Custom6 } from '../../plugin/svg';
export default function Service({ ActiveIndex }) {

    const [isOpen7, setIsOpen7] = useState(false);
    const [modalContent, setModalContent] = useState({});

    function toggleModalFour() {
        setIsOpen7(!isOpen7);
    }
    const service = [
        {
            img: "img/news/dapps.webp",
            svg: <SVG_Custom1 />,
            text: "Dapps are decentrailized applications that run on peer to peer networks like Ethereum using smart contracts to interact with the data",
            date: "August 9, 2021",
            title: "DAPPS",
            text1: "A dapp has its backend code running on a decentralized peer-to-peer network. Contrast this with an app where the backend code is running on centralized servers.",
            text2: "Some benefits of dapps are zero downtime, privacy, resistance to censorship, and complete data integrity. ",
            text3: "Like anything theres drawbacks like maintance, performace overhead, network congestion, user experience and centralization."
        },
        {
            img: "img/news/erc721.png",
            svg: <SVG_Custom2 />,
            text: "ERC721 aka NFT's aka Non-Fungible Tokens are unquie and have diffrent values of other tokens on the same contract",
            date: "August 9, 2021",
            title: "ERC721",
            text1: "NFTS have changed the world in the small time they have been around. They created the ability for digital assests to be specifically owned by a certian person. No coping or forging since they are stored in the blockchain.",
            text2: "From a utility aspect I believe we have just scratched the surface. NFT's started with art but could be moved into many areas from offical documents to digital tickets stored on the blockchain and more.",
            text3: "Overall NFT's gave the digital world ownership. "
        },
        {
            img: "img/news/smartContracts.webp",
            svg: <SVG_Custom3 />,
            text: "Smart contracts are programs that run on blockchains like Ethereum. They are a collection of code and data that is stored at a specific address on the blockchain",
            date: "August 9, 2021",
            title: "Smart Contracts",
            text1: "Smart Contracts are a big part of the Ethereum ecosytem and more like Solana. Smart Contracts give you the ability to put small peices of code on the blockchain that can be called from anywhere. You can store functions and data at the same time.",
            text2: "The amount of things you can do with smart contracts is endless. For example you could create an insurance payout contract that pays farmers if there hasn't been over a certian amount of rain in a certian area. This data would be grabbed from an api using a chainlink oracle essentally grabbing data from outside the blockchain and trigging a payout function when certian statistics are hit. ",
            text3: "There are downsides though, trasaction and events on the blockchain require gas for the computing power. This can be quite expensive if the network is busy thus making it not cost effienct for certian applications."
        },
        {
            img: "img/news/testing.webp",
            svg: <SVG_Custom4 />,
            text: "Smart contract testing is code that evaluates smart contracts for the quality of code during development. Smart Contracts are more permanent then regualar code",
            date: "August 9, 2021",
            title: "Testing",
            text1: "Testing is very important in blockchain development! Once code is on the blockchain it is there forever. The only way to change code in a contract on the blockchain is by a built in update function. This is where testing comes in!",
            text2: "With testing, we can see how our contract will function and react before paying the gas and submiting the contract to the blockchain. Testing can be tedious but overall could save you from bugs, hacks, and dissapointed users!",
            text3: ""
        },
        // {
        //     img: "img/news/5.jpg",
        //     svg: <SVG_Custom5 />,
        //     text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
        //     date: "August 9, 2021",
        //     title: "3D Game Art",
        //     text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        //     text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
        //     text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        // },
        // {
        //     img: "img/news/6.jpg",
        //     svg: <SVG_Custom6 />,
        //     text: "Developing website involves creating your website, making it one of the most vital parts of your marketing",
        //     date: "August 9, 2021",
        //     title: "Presentations",
        //     text1: "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
        //     text2: "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
        //     text3: "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
        // }
    ]
    return (
        <>
            {/* <!-- NEWS --> */}
            <div className={ActiveIndex === 7 ? "cavani_tm_section active animated fadeInUp" : "cavani_tm_section hidden animated"} id="news_">
                <div className="section_inner">
                    <div className="cavani_tm_service">
                        <div className="cavani_tm_title">
                            <span>Services</span>
                        </div>
                        <div className="service_list">
                            <ul>
                                {service.map((item, i) => (
                                    <li key={i}>
                                        <div className="list_inner" onClick={toggleModalFour}>
                                            {item.svg}
                                            <h3 className="title" onClick={toggleModalFour}>{item.title}</h3>
                                            <p className="text">{item.text}</p>
                                            <a className="cavani_tm_full_link" href="#" onClick={() => setModalContent(item)} />
                                            <img className="popup_service_image" src={item.img} alt="" />
                                            <div className="service_hidden_details">
                                                <div className="service_popup_informations">
                                                    <div className="descriptions">
                                                        <p>{item.text1}</p>
                                                        <p>{item.text2}</p>
                                                        <p>{item.text3}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- NEWS --> */}

            {modalContent && (
                <Modal
                    isOpen={isOpen7}
                    onRequestClose={toggleModalFour}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={300}
                    openTimeoutMS={300}
                >
                    <div className="cavani_tm_modalbox opened">
                        <div className="box_inner">
                            <div className="close" onClick={toggleModalFour} >
                                <a href="#"><i className="icon-cancel"></i></a>
                            </div>
                            <div className="description_wrap">
                                <div className="service_popup_informations">
                                    <div className="image">
                                        <img src="img/thumbs/4-2.jpg" alt="" />
                                        <div className="main" data-img-url="img/news/1.jpg" style={{ backgroundImage: `url(${modalContent.img})` }} />
                                    </div>
                                    <div className="details">
                                        <span>{modalContent.tag}</span>
                                        <h3>{modalContent.title}</h3>
                                    </div>
                                    <div className="descriptions">
                                        <p>{modalContent.text1}</p>
                                        <p>{modalContent.text2}</p>
                                        <p>{modalContent.text3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}