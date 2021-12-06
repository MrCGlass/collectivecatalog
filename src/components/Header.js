const Header = ({title}) => {
    return(
        <article className='article'>
            <header className>
                    <h1> {title} </h1>
            </header>
        </article>
    );
}

Header.defaultProps = {
    title: 'Section Header'
}



export default Header;