import React from "react";
import shopping from "./img/shopping.png";
import favorite from "./img/favorite.png";
import account from "./img/account.png";
import shop from "./img/shop.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18next/i18n";
import Geo from "./img/Geo.png";
import USA from  "./img/USA.png"


export function NavMenu ({children}) {
    const {t} = useTranslation()
    return (
        <div>
        <div className="navitem">
           <nav className="navmenu">
            <div className="div-one">
                <li> <img  className ="picshop" src={shop} /></li>
             <Link to={"/Landing/"}> <li> {t('Home')}</li> </Link>
                <li>{t('Woman')}</li>
                <li>{t('Man')}</li>
                <li>{t('Kid')}</li>
                <li>{t('Contact')}</li>                
          
            </div>
            <div className="div-two">
             <Link to={"/Cart"}>   <img  className="pics" src={shopping} /> </Link>
                <img  className ="pics" src={favorite} />
                <img  className ="pics" src={account} />
                <img  onClick={() => i18n.changeLanguage("geo")} className="flag-geo" src={Geo} />
               <img onClick={() => i18n.changeLanguage("en")} className ="flag-usa" src={USA} />
               
                </div>
          
           </nav>
        </div>
        {children}
        </div>
    )
}

export default NavMenu