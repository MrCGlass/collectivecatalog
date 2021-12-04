const Header = ({title}) => {
    return(
        <header style={headingStyle}>
                <h1> {title} </h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Section Header'
}

const headingStyle = {
    position:'relative',
    backgroundColor:'blue',
    textAlign: 'center',
    height:'50px',
}

export default Header