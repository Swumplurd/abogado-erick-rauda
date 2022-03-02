import React from 'react'

export const Carousel = ({images, id}) => {
    return (
        <>
            <div id={id} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        images.map((image, i) => {
                            return (
                                <button type="button" data-bs-target={`#${id}`} data-bs-slide-to={`${i}`} class="active" aria-current="true" aria-label={`Slide ${i + 1}`}></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        images.map((image, i)=> {
                            return (
                                <div className={`carousel-item ${ i === 0 && 'active'}`}>
                                    <img src={`${image}`} className="d-block w-100" alt={`${image}`}/>
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
