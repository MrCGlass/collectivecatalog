import MyLink from './MyLink'


const Navbar = () => {
    return(
        <nav   className='navbar'>
            <ul style={navBarStyle} className=''>
                <li><MyLink href='/' title='Home' /></li>
                <li><MyLink href ='/Catalogs' title='Catalogs'/></li>
                <li><MyLink href ='/About-us' title='About Us'/></li>
            </ul>
        </nav>
    )
}

const navBarStyle = {
    position:'fixed',
    backgroundColor:'black',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    listStyleType:'none',
    padding: '4px',
    margin:'0px',
    width:'100%',
    height:'10%',
}


export default Navbar;