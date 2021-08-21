
import '../styles/Overview.css'
import { useState, useEffect } from 'react'

const UiColorChanger = () => {
    const [uiColor, setUiColor] = useState('')

    useEffect(() => {
        const getColor = async () => {
            const color = await Store.getColor()
            const colour = Boolean(color)
            // console.log(colour);
            setUiColor(colour)
            checkAndChangeUiColor(colour)
        }
        
        
        getColor()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const changeUiColor = (color) => {
        
        setUiColor(!color)
       checkAndChangeUiColor(!color)
       
    }
    const checkAndChangeUiColor = (color) => {
        if(color){
            document.documentElement.style.setProperty("--home-primary-color-light", '#73f3ed');
            document.documentElement.style.setProperty("--home-primary-color-dark", '#3aafa9');
            document.documentElement.style.setProperty("--home-secondary-color-light", '#204755');
            document.documentElement.style.setProperty("--home-secondary-color-dark", '#17252a');
        }
        else{
            document.documentElement.style.setProperty("--home-primary-color-light", '#e3d559');
            document.documentElement.style.setProperty("--home-primary-color-dark", '#a89d32');
            document.documentElement.style.setProperty("--home-secondary-color-light", '#3a4c70');
            document.documentElement.style.setProperty("--home-secondary-color-dark", '#1d273b');
           
        }
        Store.clearColors()
       Store.addColors(color)
       setUiColor(color)
    }
//   onClick= {() => changeUiColor(uiColor)}
    return (
        <div className= 'controls'>
            <input type="checkbox"  onClick= {() => changeUiColor(uiColor)}  id='control-checkbox' className="control-input" />
            <label htmlFor="control-checkbox" className="controls-box" style= {{backgroundColor : `${uiColor? '#17252a' : '#17252a'}`}}>
            <div className="default-control" style= {{backgroundColor : `${uiColor? '#3aafa9' : '#a89d32'}`}}></div>
            <div className="change-control" style= {{backgroundColor : `${uiColor? '#3aafa9' : '#a89d32'}`}}></div>
            </label>
        </div>
    )
}

export default UiColorChanger


// local storage store
class Store {
    static getColor(){
     let colors;
     if(localStorage.getItem('colors') === null){
       colors = [];
     }
     else{colors = JSON.parse(localStorage.getItem('colors'))}
  
     return colors;
    }
  
    static addColors(color){
      const colors = Store.getColor();
      colors.push(color);
      localStorage.setItem('colors', JSON.stringify(colors))
    }
  
    static clearColors(){
      localStorage.removeItem("colors");  
    }
}