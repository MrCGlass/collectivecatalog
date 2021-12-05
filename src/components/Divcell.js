
import image from '../static/images/th.jpg'

const DivCell = ({heading,image,sectiontext})=> {
    return(
        <div className='divcell'>
            <div className='divcellsectiontext'>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
            <div className='divcellsectionimage'>
                <img className='divImage' src={image}/>
            </div>
        </div>
    )
}

DivCell.defaultProps = {
    heading:'Div',
    image:image,
    sectiontext:'paragraph text',
}


export default DivCell;