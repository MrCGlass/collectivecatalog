const RevDivcell = ({heading,image,sectiontext}) => {
    return (
        <div style={divCellStyle} className=''>
             <div>
                <img src={image}/>
            </div>
            <div className=''>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
        </div>

    )
}

const divCellStyle = {
    backgroundColor: 'rgba(1,1,1,0.1)',
    display:'flex',
    justifyContent:'space-around',
    width: '100%',
    marginBottom:'3px',
}

RevDivcell.defaultProps = {
    heading:'div',
    image:'none',
    sectiontext:'section paragraph text',
}

export default RevDivcell