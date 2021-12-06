
import image from '../static/images/th.jpg'
import {Link} from 'react-router-dom'

const DivCell = ({heading,image,sectiontext,href})=> {
    return(
        <div className='divcell'>
            <Link className='divlink' to={href}>
                <div className='divcellsectiontext'>
                    <h4 className=''>{heading}</h4>
                    <p className=''>{sectiontext}</p>
                </div>
                <div className='divcellsectionimage'>
                    <img className='divImage' src={image}/>
                </div>
            </Link>
        </div>
    )
}

DivCell.defaultProps = {
    heading:'Div',
    image:image,
    sectiontext:'paragraph text',
    href: '',
}


export default DivCell;