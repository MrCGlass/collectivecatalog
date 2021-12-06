import Divcell from '../components/Divcell'
import RevDivcell from '../components/RevDivcell'
import SplashScreen from '../components/SplashScreen';


const HomePage = () => {
    return(
        <article class='article'>
            <SplashScreen />
            <Divcell heading='Enter' href='/Login' sectiontext='Click Here to Sign in if you are a memeber or Sign up if you are a new member' />
            <RevDivcell heading='Catalogs'  href='/Catalogs' sectiontext='Click here to search user catalogs'/>
            <Divcell heading='About Collective Catalogs' href='/About-us' sectiontext='Click hear to learn more about our vision!'/>
        </article>
    );  
}


export default HomePage;