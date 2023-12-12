import React from "react";
import s from './Banner.module.css'

const Banner = () => {
    return (
            <div>
                <img className={s.banner}
                    src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYANuEZlRY89MbBZGbB03TL7pGDPeb11CkdQJhamTfLVYfEGR0DP.jpg"
                    alt=""/>
            </div>
    );
}

export default Banner;