import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

    const onClick = ()=>{
        console.log('click')
    }
    return (
        <header className='header'>
            <h1><b>{title}</b></h1>
            <div className="rightHeader">
            <h6 style={{fontSize:'14px'}}>Already have a account?</h6>
            <Button color='lightgreen' text='Log In' onClick = {onClick} />
            </div>
            </header>
    )
}
Header.propTypes ={
    title: PropTypes.string,
}
Header.defaultProps= {
    title : "Mom's Recipe"
}

export default Header
