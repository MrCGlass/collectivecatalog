import Divcell from '../components/Divcell'
import RevDivcell from '../components/RevDivcell'


const HomePage = () => {
    return(
        <article class='article'>
            <Divcell heading='Enter' sectiontext='Click Here to Sign in if you are a memeber or Sign up if you are a new member' />
            <RevDivcell heading='Catalogs' sectiontext='Click here to search user catalogs'/>
        </article>
    )  
}


export default HomePage;