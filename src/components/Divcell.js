


const DivCell = ({heading,image,sectiontext})=> {
    return(
        <div style={divCellStyle} className=''>
            <div className=''>
                <h4 className=''>{heading}</h4>
                <p className=''>{sectiontext}</p>
            </div>
            <div>
                <img src={image}/>
            </div>
        </div>
    )
}



const divCellStyle = {
    backgroundColor: 'rgba(1,1,1,0.1)',
    display:'flex',
    justifyContent:'space-around',
    width: '100%',
    marginBottom:'3%'
}

DivCell.defaultProps = {
    heading:'Div',
    image:'none',
    sectiontext:'paragraph text',
}


export default DivCell