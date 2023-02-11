import classes from './Header.module.css'
import { IMG_URL } from '../../assets/meals';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';



const Header = () => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
           
        </header>
        <div className={classes['main-image']}>
            <img alt='/' src={IMG_URL}/>
           
            
        </div>
         
        </Fragment>
    )
}

export default Header;