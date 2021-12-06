const Header = ({title}) => {
    return(
        <header className>
                <h1> {title} </h1>
        </header>
        
    );
}

Header.defaultProps = {
    title: 'Section Header'
}



export default Header;