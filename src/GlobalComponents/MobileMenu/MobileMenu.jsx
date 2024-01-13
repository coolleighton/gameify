import CloseImg from '../../Assets/GlobalImages/CloseImg.png'

import ButtonData from '../StandardCategoryButton/ButtonsData.js'
import StandardCategoryButton from '../StandardCategoryButton/StandardCategoryButton.jsx'
import './MobileMenu.css'
import { useNavigate } from 'react-router-dom'

const MobileMenu = ({ handleCategoryClick }) => {
    const navigate = useNavigate()

    // Navigate to a new page
    const navigateToWithDelay = (location) => {
        navigate(location)
    }

    // close hamburger menu with transition
    const toggleHamburgerMenuOff = async () => {
        const delay = (ms) => new Promise((res) => setTimeout(res, ms))
        document.querySelector('#hamburgerMenu').style.opacity = '0'
        await delay(500)
        document.querySelector('#hamburgerMenu').style.display = 'none'
    }

    // set new api info, close menu, if needed go to library
    const MobileHandleCategoryClick = (text, categoryInfo, category) => {
        handleCategoryClick(text, categoryInfo, category)
        toggleHamburgerMenuOff()
        if (!window.location.href.includes('Library')) {
            console.log('Not in library')
            navigateToWithDelay('/Library')
        }
    }

    // close menu then go to page
    const handleNavigate = (location) => {
        toggleHamburgerMenuOff()
        navigateToWithDelay(location)
    }

    return (
        <div
            id="hamburgerMenu"
            className="hidden opacity-0 fixed bg-white z-50 inset-0 px-7 py-5 duration-500 overflow-auto"
        >
            <div className="hamburgerMenu grid">
                <div className="hamburgerMenuCol1">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Quick Links
                    </h1>

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Your Games
                    </h1>

                    {ButtonData.General.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                handleCategoryClick={handleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}

                    <h1 className="text-3xl text-black font-bold mt-6 mb-2">
                        Platforms
                    </h1>
                    {ButtonData.Platforms.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                category="platform"
                                categoryInfo={item.categoryInfo}
                                handleCategoryClick={MobileHandleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}
                </div>
                <div className="hamburgerMenuCol2">
                    <h1 className="text-3xl text-black font-bold mb-2">
                        Genre
                    </h1>
                    {ButtonData.Genres.map((item) => {
                        return (
                            <StandardCategoryButton
                                key={item.text}
                                whiteIcon={item.whiteIcon}
                                text={item.text}
                                category="genre"
                                categoryInfo={item.categoryInfo}
                                handleCategoryClick={MobileHandleCategoryClick}
                                id="MobileMenuButton"
                            ></StandardCategoryButton>
                        )
                    })}
                </div>
            </div>

            <button
                onClick={() => {
                    toggleHamburgerMenuOff()
                }}
            >
                <img src={CloseImg} className="fixed right-10 bottom-10"></img>
            </button>
        </div>
    )
}

export default MobileMenu
/*
<StandardLinkButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Home"
                        handleCategoryClick={() => handleNavigate('/')}
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                        id="MobileMenuButton"
                    ></StandardLinkButton>

                    <StandardLinkButton
                        whiteIcon={WindowsWhiteImg}
                        blackIcon={WindowsBlackImg}
                        text="Library"
                        handleCategoryClick={() => handleNavigate('/Library')}
                        style={{ backgroundColor: 'black' }}
                        textStyle={{ color: 'black' }}
                        id="MobileMenuButton"
                    ></StandardLinkButton>
*/
