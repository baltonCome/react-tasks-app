import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        
    }

    return (
        <header className='header'>
            <h1>{props.title} </h1>
            <Button color = 'green' text = 'Hello' onClick={onClick} />
        </header>
    )
}

Header.defaultProps ={
    title: 'Tasks'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header
