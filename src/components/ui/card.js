import PropTypes from 'prop-types'

const Card = ({title})=>{
    return(
        <div className='cardContainer'>
            <div>{title}</div>
        </div>
    )
}

Card.propTypes={
    title: PropTypes.string,
}

export default Card