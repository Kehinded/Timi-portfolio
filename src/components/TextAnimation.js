import React, {useState, useEffect} from 'react'
import {useInterval} from 'react-use'
import styled, { keyframes } from 'styled-components'

export default function TextAnimation () {
    
    const textOneArray = "Hello! i'm Timi, Welcome to my portifolio ❤️.".split(" ")
    const textTwoArray = "I'm a freelance software engineer specialized in front-end.".split(" ")
    const textThreeArray = "Love to build easy-to-use interface between the user and the product.".split(" ")
    const textFourArray = "Bringing a concept to life with HTML, CSS, and JavaScript.".split(" ")
    const textFiveArray = "Build website that can easily perform bulk HubSpot API actions.".split(" ")
    const textSixArray = "I like Staying up-to-date on any new development trends.".split(" ")
    const textSevenArray = "Prioritizing user experience is my top responsibility.".split(" ")
    const [items, setItems] = useState(textOneArray)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    useInterval(
        () => {
          setItems(textOneArray)
          setCount(count + 1)

        //   change again
        if(count === 1){
            setItems(textTwoArray)
            setCount(count + 1)
        }
        
        //   change again
        if(count === 2){
            setItems(textThreeArray)
            setCount(count + 1)
        }
        //   change again
        if(count === 3){
            setItems(textFourArray)
            setCount(count + 1)
        }
        //   change again
        if(count === 4){
            setItems(textFiveArray)
            setCount(count + 1)
        }
        //   change again
        if(count === 5){
            setItems(textSixArray)
            setCount(count + 1)
        }
        // final again
        if(count === 6){
            setCount(0)
            setItems(textSevenArray)
        }
    }, play? 20000 : null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setItems(textThreeArray)
            setPlay(true)
        }, 20000);
        return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Wrapper>{items.map((item, index) => (
            <span key={index}>{item}</span>
        ))}</Wrapper>   
    )
}

const animation = keyframes`
 0% { opacity: 0; transform: translateY(-100px); filter: blur(10px);}
 25% { opacity: 1; transform: translateY(0rem) ; filter: blur(0px); }
 75% { opacity: 1; transform: translateY(0rem) ; filter: blur(0px); }
 100% { opacity: 0; transform: translateX(100px); filter: blur(10px);}
`

const Wrapper = styled.span`   
display: inline-block;
 span{
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 20s;
    animation-fill-mode: forwards;  
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(1,0,0,1);
    margin-right: .7rem;
 }
 span:nth-child(1){
     animation-delay: .1s;
 }
 span:nth-child(2){
    animation-delay: .2s;
}
span:nth-child(3){
    animation-delay: .3s;
}
span:nth-child(4){
    animation-delay: .4s;
}
span:nth-child(5){
    animation-delay: .5s;
}
span:nth-child(6){
    animation-delay: .6s;
}
span:nth-child(7){
    animation-delay: .7s;
}
span:nth-child(8){
    animation-delay: .8s;
}
span:nth-child(9){
    animation-delay: .9s;
}
span:nth-child(10){
    animation-delay: 1s;
}
`


