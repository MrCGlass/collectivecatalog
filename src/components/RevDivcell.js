import image from '../static/images/th.jpg'
import { Link } from 'react-router-dom'
const RevDivcell = ({heading,image,sectiontext,href}) => {
    return (
        <div className='divcell'>
            <Link className='divlink' to={href}>
                <div className='divcellsectionimage'>
                    <img className='divImage' src={image}/>
                </div>
                <div className='divcellsectiontext'>
                    <h4 className=''>{heading}</h4>
                    <p className=''>{sectiontext}</p>
                </div>
            </Link>
        </div>

    );
}

RevDivcell.defaultProps = {
    heading:'div',
    image:image,
    sectiontext:'section paragraph text',
    href:'',
}

export default RevDivcell;