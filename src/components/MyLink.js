import {Link} from 'react-router-dom';

const MyLink = ({ href, title}) =>{
    return (
        <Link style={myLinkStyles} to={ href }>{title}</Link>
    )
}


MyLink.defaultProps = {
    href:'',
    title:'link',
}

const myLinkStyles= {
    color: 'orange',
    position:'relative',
    fontSize: '40px',
    border:'solid',
    borderRadius: '24px',
    textDecoration: 'none',
}

export default MyLink;