import React, { useContext } from 'react'
import ListContext from '../../context/list/ListContext'
import placeholder from '/placeholder.webp';

const GraphicsCard = (props) => {
    const listContext = useContext(ListContext)
    const { selectedItem, onDragStart, setSelectedItem } = listContext
    const handleCardClick = (e) => {
        props.showGPU(props.gpu);
    };
    
    return (
        <>
            <div 
                draggable={ !selectedItem.GPU ? "true": "false"} 
                onDragStart={(e) => onDragStart(e, props.gpu, 'Graphics') } 
                onDragEnd={ (e)=>{ e.currentTarget.classList.remove("dragging") } } 
                className={`card border-0 me-lg-4 mb-lg-0 mb-4 ${ selectedItem.GPU && selectedItem.GPU._id === props.gpu._id? "bg-secondary bg-gradient":"" }`}
                onClick={handleCardClick}
                style={{width: "18rem", opacity: selectedItem.GPU?'0.6':'1'}}
                >
                <div className="backgroundEffect"></div>
                <div className="pic">
                <img className="img-thumbnail" src={props.gpu.Image && props.gpu.Image.startsWith('https') ? props.gpu.Image : placeholder} draggable={false} alt="" style={{objectFit: "contain"}}/>
                    <div className="date bg-success"> <span className="day">{props.gpu.Released.split(" ")[0]}</span>
                        <span className="month">{props.gpu.Released.split(" ")[1]}</span> <span className="year">{props.gpu.Released.split(" ")[2]}</span>
                    </div>
                </div>
                <div className="content" onClick={(e) => { e.stopPropagation() }}> <p className="h-1 mt-4">{props.gpu.GPU_name}</p>
                    <p className="text-muted mt-3">Wattage: {props.gpu.TDP}</p>
                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                        <button disabled={selectedItem.GPU ? true : false} className="btn btn-primary" onClick={() => { setSelectedItem({ ...selectedItem, GPU: props.gpu }) }}>Add<span className="fas fa-arrow-right"></span></button>
                        <div className="d-flex align-items-center justify-content-center foot"> <p className="price">CDN$ {props.gpu.Price.slice(0, -4)}</p>
                            <p className="ps-3 icon text-muted"><span className="fas fa-comment-alt pe-1"></span>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GraphicsCard;