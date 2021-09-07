import React, {Fragment} from 'react'
import mealsImage  from './meals.jpeg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='table full of food'/>
            </div>
        </Fragment>
    )
}

export default Header