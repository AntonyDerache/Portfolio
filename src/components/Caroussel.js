import React from 'react';

const Caroussel = ({image}) => {
    return (
        <div id="caroussel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {
                    image.map((value, i) => {
                        if (i === 0) {
                            return (
                                <button key={i} type="button" data-bs-target="#caroussel" data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`}></button>
                            )
                        } else {
                            return (
                                <button key={i} type="button" data-bs-target="#caroussel" data-bs-slide-to={i} aria-label={`Slide ${i}`}></button>
                            )
                        }
                    })
                }
            </div>
            <div className="carousel-inner">
                {
                    image.map((item, i) => {
                        return (
                            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                <img src={item.img} className="d-block w-100" alt={item.alt} />
                            </div>
                        )
                    })
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#caroussel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#caroussel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Caroussel;