import image from '../static/images/th.jpg'
const RevDivcell = ({heading,image,sectiontext}) => {
    return (
        <div className='divcell'>
            <div className='divcellsectionimage'>
                <img className='divImage' src={image}/>
            </div>
            <div className='divcellsectiontext'>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
        </div>

    )
}

RevDivcell.defaultProps = {
    heading:'div',
    image:image,
    sectiontext:'section paragraph text',
}

export default RevDivcell;