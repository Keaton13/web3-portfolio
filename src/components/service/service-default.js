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
            text1: "As a blockchain developer, I understand the power of DAPP technology and how it is revolutionizing the internet. Through my experience building four DAPPS - Petrol Trader, Curator, NFT Marketplace, and Kickstart - I have honed my skills in creating full-stack solutions, from smart contracts to front-end development.",
            text2: "Petrol Trader is a comprehensive NFT marketplace that I created entirely on my own, while Curator is a site that brings all of Web3 together, featuring coin stats, trending and top NFT data, portfolio value, and Bitcoin and Ethereum whale stats. Kickstart is a defi DAO application that lets users vote on campaings and make dontations.",
            // text3: "Of course, like any technology, there are drawbacks to DAPPS. Maintenance, performance overhead, network congestion, and a sometimes-confusing user experience can all be challenges. However, the benefits of DAPPS far outweigh the drawbacks, and as a blockchain developer, I am excited to be at the forefront of this technological revolution."
        },
        {
            img: "img/news/erc721.png",
            svg: <SVG_Custom2 />,
            text: "ERC721 aka NFT's aka Non-Fungible Tokens are unquie and have diffrent values of other tokens on the same contract",
            date: "August 9, 2021",
            title: "ERC721",
            text1: "As a blockchain developer, my focus and passion lies in ERC721 and NFT technology. My experience building an NFT marketplace and Petrol Trader project has given me a deep understanding of the ERC721 development process, from contract creation to building a front-end that interacts with the contract. I am confident in my skills and committed to advancing my knowledge in this area.",
            text2: "Moving forward, I am committed to continuously improving my skills and keeping up-to-date with the emerging technologies in ERC721 development and blockchain. I am thrilled to be part of this revolution and excited for what the future holds.",
            // text3: "Overall, NFTs have fundamentally changed the way we think about ownership in the digital world. They have enabled a new era of asset ownership, where individuals can prove ownership of digital assets that are unique and irreplaceable, providing a sense of authenticity and exclusivity that was previously impossible in the digital world. As a blockchain developer, I am excited about the possibilities that NFTs present and am confident that they will continue to reshape the digital landscape in exciting and innovative ways."
        },
        {
            img: "img/news/smartContracts.webp",
            svg: <SVG_Custom3 />,
            text: "Smart contracts are programs that run on blockchains like Ethereum. They are a collection of code and data that is stored at a specific address on the blockchain",
            date: "August 9, 2021",
            title: "Smart Contracts",
            text1: "Smart Contracts are a center piece in we3 development. I have created a few smart contracts now and am getting more comfortable day by day. My latest smart contract is the Dealership contract, along with a basic mint contract for Petrol Trader. These contracts work together, the users mints a nft of their car and saves the tokenURI that is uploaded to ipfs with image urls and other metadata. I then list the nft on the dealership contract giving it ownership over the nfs until it is sold.",
            text2: "As a blockchain developer, I have come to appreciate the significant benefits of reusable Smart Contracts. Companies such as OpenZeppelin have played a crucial role in simplifying the development process by providing well-crafted and functional Smart Contracts for use in creating DAPPS. In my work on the Dealership Contract and Mint Contract, for example, I leveraged the OpenZeppelin IERC721 contract and Counters contract to help manage token IDs and streamline the development process",
            text3: "While the benefits of smart contracts are undeniable, there are also some downsides. Transactions and events on the blockchain require computational power, which in turn requires gas fees. This can be costly, particularly if the network is busy, making it inefficient for certain applications. Despite this limitation, smart contracts remain a powerful tool for developers seeking to build decentralized applications that offer secure, transparent, and efficient functionality. As a blockchain developer, I am excited about the potential of smart contracts and am committed to exploring new and innovative use cases for this groundbreaking technology."
        },
        {
            img: "img/news/Full-Stack.jpg",
            svg: <SVG_Custom4 />,
            text: "Web2 technologies, including Next.js, React, Tailwind, Node.js, and APIs, enabling me to deliver high-quality front-end and back-end solutions for modern web applications.",
            date: "August 9, 2021",
            title: "Backend / Front-end",
            text1: "As a skilled and experienced blockchain developer with a histoy of web2 development, I am well-versed in a variety of web development technologies that power the modern web. From the powerful front-end framework of Next.js and React to the sleek and efficient UI design of Tailwind, I bring a wealth of knowledge and expertise to any project. Additionally, my experience in working with Node.js and APIs allows me to develop highly-scalable and reliable back-end solutions that meet the needs of modern applications.",
            text2: "My understanding of web2 technology enables me to build powerful and engaging applications that are user-friendly and responsive. Whether working on a complex backend system or designing an intuitive front-end user interface, I possess the skills and experience needed to deliver high-quality results.",
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