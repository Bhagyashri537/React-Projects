import classes from './Header.module.css'
import { IMG_URL } from '../../assets/meals';
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';



const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
           
        </header>
        <div className={classes['main-image']}>
            <img alt='A table full of delicious food' src={IMG_URL}/>
           
            
        </div>
         
        </Fragment>
    )
}

export default Header;