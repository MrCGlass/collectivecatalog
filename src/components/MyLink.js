import {Link} from 'react-router-dom';

const MyLink = ({ href, title}) =>{
    return (
        <Link className='navLinks' to={ href }>{title}</Link>
    )
}


MyLink.defaultProps = {
    href:'',
    title:'link',
}

export default MyLink;