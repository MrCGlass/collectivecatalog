import image from '../static/images/th.jpg'
const RevDivcell = ({heading,image,sectiontext}) => {
    return (
        <div className='divcell'>
            <div className='divcellsection'>
                <img className='divImage' src={image}/>
            </div>
            <div className='divcellsection'>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
        </div>

    )
}

const divCellStyle = {
    backgroundColor: 'rgba(1,1,1,0.1)',
    display:'flex',
    justifyContent:'center',
    width: '100%',
    marginBottom:'2%',
    height:'auto',
}

const sectionStyle={
    width: '48%',
    padding:'0 1% 0 1%',
    textAlign:'center',

}
const thumbImageStyle = {
    
}

RevDivcell.defaultProps = {
    heading:'div',
    image:image,
    sectiontext:'section paragraph text',
}

export default RevDivcell;