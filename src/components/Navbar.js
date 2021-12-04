import MyLink from './MyLink'


const Navbar = () => {
    return(
        <nav   className='navbar'>
            <ul style={navBarStyle} className=''>
                <li><MyLink href='/' title='Home' /></li>
                <li><MyLink href ='/catalogs' title='Catalogs'/></li>
            </ul>
        </nav>
    )
}

const navBarStyle = {
    position:'relative',
    backgroundColor:'black',
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    listStyleType:'none',
    padding: '4px',
    margin:'0px',
}


export default Navbar