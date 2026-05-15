import { NavLink } from 'react-router-dom';
import style from './LeftSide.module.scss'
import { useRef, useState } from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';


const LeftSide = () => {

    //save counter



    //Swith account button 
    const [showSwitchMenu, setShowSwitchMenu] = useState(false);
    const toggleSwitchMenu = () => {
        setShowSwitchMenu(prevState => !prevState)
    };

    const hideSwitchMenu = (e) => {
        setTimeout(() => setShowSwitchMenu(false), 100);
    }

    const currentAccClicked = () => {
        alert('You are already on this account')
    }

    const newAccClicked = () => {
        alert('Sorry, this application only supports one account right now')
    }

    //Choose display mode button
    const [showColorMenu, setShowColorMenu] = useState(false);
    const toggleColorMenu = () => {
        setShowColorMenu(prevState => !prevState)
    }
    const hideColorMenu = (e) => {
        setTimeout(() => setShowColorMenu(false),100);
    }
    const colorModeClicked = () => {
        alert('Woah, this function is not integrated yet')
    }





    return <>


        <div className={style.leftContent}>

            <div className={style.quickAccess}>

                <div className={style.myProfile}>
                    <div className={style.myPic}>
                        <NavLink to={'/my-profile'}><img
                            src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" alt=""
                            title="My Profile" /></NavLink>
                    </div>

                    <span>Tony Stark</span>

                    <div className={style.profileButtons}>
                        <NavLink to={'/auth'} className={style.logOutButton} title="Log Out"><img
                            src="https://cdn-icons-png.flaticon.com/128/4227/4227906.png" alt=""
                            className={style.buttonImg} /></NavLink>


                        <button className={style.logOutButton} title="Switch Accounts" id="switchBtn"
                            onClick={toggleSwitchMenu} onBlur={hideSwitchMenu}><img src="https://cdn-icons-png.flaticon.com/128/8976/8976495.png"
                                alt="" className={style.buttonImg} /></button>


                        {showSwitchMenu && (<div className={style.switchAcc}>
                            <button onClick={currentAccClicked}><img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                alt="" onClick={currentAccClicked} /><span>Tony Stark</span></button>
                            <button onClick={newAccClicked}><img src="https://cdn-icons-png.flaticon.com/128/8377/8377219.png" alt="" onClick={newAccClicked} />
                                <span>Add account</span></button>
                        </div>)}

                    </div>

                </div>



                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/10691/10691802.png"
                    alt="" />Events</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/6491/6491332.png"
                    alt="" />Memories</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/8976/8976878.png"
                    alt="" />Reels</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/16090/16090850.png"
                    alt="" />Saved</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/16090/16090088.png"
                    alt="" />Marketplace</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/15748/15748415.png"
                    alt="" />Games</a>
                <a href="" className={style.quickAccessLinks}><img src="https://cdn-icons-png.flaticon.com/128/18215/18215705.png"
                    alt="" />Explore</a>


                <div className={style.chooseMode}>


                    <button className={`${style.quickAccessLinks} ${style.colorBtn}`} onClick={toggleColorMenu} onBlur={hideColorMenu}>
                        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536809.png"/>Mode</button>

                    {showColorMenu && (<div className={style.modeMenu}>
                        <button onClick={colorModeClicked}><img src="https://cdn-icons-png.flaticon.com/128/439/439842.png" />
                            <span>Light Mode</span></button>
                        <button onClick={colorModeClicked}><img src="https://cdn-icons-png.flaticon.com/128/1812/1812650.png" />
                            <span>Dark Mode</span></button>
                    </div>)}

                </div>


            </div>
    
            <footer>
                <div className={style.help}>
                    <a href="" className={style.helpLinks}>Report a problem</a>
                    <a href="" className={style.helpLinks}>Privacy</a>
                    <a href="" className={style.helpLinks}>Terms & Conditions</a>
                    <a href="" className={style.helpLinks}>Ad Preferences</a>
                    <a href="" className={style.helpLinks}>Cookies</a>
                    <a href="" className={style.helpLinks}>More</a>
                    <span>&copy;Magyari Mihai</span>
                </div>
            </footer>

        </div>


    </>



}

export default LeftSide;