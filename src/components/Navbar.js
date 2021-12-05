import MyLink from './MyLink'


const Navbar = () => {
    return(
        <nav   className='navbar-container'>
            <ul className='navbar'>
                <li><MyLink href='/' title='Home' /></li>
                <li><MyLink href ='/Catalogs' title='Catalogs'/></li>
                <li><MyLink href ='/About-us' title='About Us'/></li>
            </ul>
        </nav>
    )
}



export default Navbar;