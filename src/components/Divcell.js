
import image from '../static/images/th.jpg'

const DivCell = ({heading,image,sectiontext})=> {
    return(
        <div className='divcell'>
            <div className='divcellsection'>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
            <div className='divcellsection'>
                <img className='divImage' src={image}/>
            </div>
        </div>
    )
}






const thumbImageStyle = {
    position: 'relative',
    maxHeight:'90%',
    maxWidth:'65%',
    top:'5%'
}

DivCell.defaultProps = {
    heading:'Div',
    image:image,
    sectiontext:'paragraph text',
}


export default DivCell;