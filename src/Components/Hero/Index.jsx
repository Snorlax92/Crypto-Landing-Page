import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ArrowForward,
    HeroContent,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
    ArrowRight
} from '../Hero/HeroElements'
import { Button } from '../../Utilities/ButtonElements'
import Video from '../../Videos/video.mp4'

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroTitle>Este es</HeroTitle>
                    <HeroP>
                    StableGrow is a new deflationary-reflection token on the Binance Smart Chain network. Simply hold $SGC tokens in your wallet and earn passive income in $BUSD. 12% of every Buy/Transfer/Sell transaction is redistributed automatically to $SGC eligible holders.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                        >
                            Buy Now {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
