import video from '../static/graphics/video.mp4'
const SplashScreen = () => {
    return(
        <article className='splashscreen'>
            <video className='videosplash' controls autoPlay loop>
                <source src={video} type='video/mp4'></source>
            </video>
        </article>
    )
}


export default SplashScreen