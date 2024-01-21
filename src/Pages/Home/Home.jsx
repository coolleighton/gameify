import Header from '../../GlobalComponents/Header/Header.jsx'
import MobileMenu from '../../GlobalComponents/MobileMenu/MobileMenu.jsx'
import Cart from '../../GlobalComponents/Cart/Cart.jsx'
import ButtonData from '../../Assets/ButtonsData.js'
import { useNavigate } from 'react-router-dom'

import Background from '../../Assets/Background.mp4'
import GithubImg from '../../Assets/GlobalImages/GithubImg.png'
import PortfolioImg from '../../Assets/GlobalImages/PortfolioImg.png'
import LibraryImg from '../../Assets/GlobalImages/DarkLibraryImg.png'
import './Home.css'

import { useEffect } from 'react'

const Home = ({
    cart,
    setCart,
    removeItemFromCart,
    loadingScreenPlayed,
    handleCategoryClick,
    setSearchAmount,
    inputValue,
    searchValue,
    setInputValue,
    setSearchValue,
    resetSearchCriteria,
}) => {
    const navigate = useNavigate()

    // if the loading screen has played, play the background video instantly
    useEffect(() => {
        if (loadingScreenPlayed) {
            document.querySelector('#backgroundVideo').play()
        }
    }, [])

    // set new api info, close menu, if needed go to library
    const HandleMenuClick = async (category, categoryInfo, text) => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        // apply 0.3s fade out transition
        document.querySelector('body').style.transitionDuration = '0.3s'
        document.querySelector('body').style.opacity = '0'
        await delay(300)

        // navigate to page, set search amount, set new api data, scroll to top
        navigate('/Library')
        setSearchAmount(12)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        await handleCategoryClick(category, categoryInfo, text)

        // pag re-shown in api call page
    }

    return (
        <div id="home" className="relative inset-0">
            <Header
                headerBgColour={'#FF'}
                cart={cart}
                setSearchAmount={setSearchAmount}
                inputValue={inputValue}
                searchValue={searchValue}
                setInputValue={setInputValue}
                setSearchValue={setSearchValue}
                handleCategoryClick={handleCategoryClick}
                resetSearchCriteria={resetSearchCriteria}
            ></Header>

            <div className="flex flex-col mx-auto h-[100vh] sm:w-[695px] sm:flex-row sm:justify-start sm:items-center">
                <div className="mt-[5.5rem] sm:mt-0 sm:max-w-lg sm:ml-12 w-11/12 mx-auto">
                    <div className="p-8 mb-4 sm:mb-5 bg-gray-600 bg-opacity-50 text-center sm:w-11/12 mx-auto rounded-lg backdrop-blur">
                        <h1 className="title break-words sm:text-7xl font-extrabold pb-5">
                            Gameify
                        </h1>
                        <p className="leading-5 font-semibold">
                            This is not a commercial website. You can't buy any
                            of the games and the prices are randomly generated
                            to mimic a real shop.
                            <br></br>
                            <br></br>
                            See my other projects below.
                        </p>
                    </div>

                    <div className="portfolioLinks flex justify-center px-6 py-8 mb-4 bg-gray-600 bg-opacity-50 text-center sm:w-11/12 mx-auto rounded-lg backdrop-blur">
                        <a
                            className="w-2/3 bg-white rounded-lg mx-2 hover:scale-105 hover:bg-blue-100 duration-200"
                            href="https://github.com/coolleighton"
                        >
                            <div className="flex items-center justify-center py-1">
                                <img src={GithubImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Github
                                </p>
                            </div>
                        </a>
                        <a
                            className="bottomPortfolioLink w-2/3 bg-white rounded-lg mx-2 hover:scale-105 hover:bg-blue-100 duration-200"
                            href="https://leightonjcoughlin.netlify.app/"
                        >
                            <div className="flex items-center justify-center py-1">
                                <img src={PortfolioImg}></img>
                                <p className="text-black pl-2 font-semibold">
                                    Portfolio
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="sm:ml-0 sm:mr-6">
                    <div className="flex flex-col justify-center px-6 py-8 mb-4 bg-gray-600 bg-opacity-50 text-center mx-auto rounded-lg backdrop-blur w-11/12 sm:w-[210px]">
                        <h2 className="text-3xl font-bold pb-5">
                            Quick Navigation
                        </h2>

                        {ButtonData.Special.map((item) => {
                            return (
                                <button
                                    className="flex py-2 items-center justify-center bg-white rounded-lg mb-5 hover:scale-105 hover:bg-blue-100 duration-200"
                                    key={item.text}
                                    onClick={() =>
                                        HandleMenuClick(
                                            'special',
                                            item.categoryInfo,
                                            item.text
                                        )
                                    }
                                >
                                    <img
                                        className="w-6 h-6"
                                        src={item.BlackIcon}
                                    ></img>
                                    <p className="text-black pl-2 font-semibold">
                                        {item.text}
                                    </p>
                                </button>
                            )
                        })}
                        <button className="flex py-2 items-center justify-center bg-white rounded-lg mb-5 hover:scale-105 hover:bg-blue-100 duration-200">
                            <img className="w-6 h-6" src={LibraryImg}></img>
                            <p className="text-black pl-2 font-semibold">
                                Library
                            </p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="videoContainer">
                <video id="backgroundVideo" loop muted>
                    <source src={Background} type="video/mp4"></source>
                </video>
            </div>
            <MobileMenu
                handleCategoryClick={handleCategoryClick}
                setSearchAmount={setSearchAmount}
            ></MobileMenu>
            <Cart
                cart={cart}
                setCart={setCart}
                removeItemFromCart={removeItemFromCart}
            ></Cart>
        </div>
    )
}

export default Home
