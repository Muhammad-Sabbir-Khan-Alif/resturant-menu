import React from "react";
import '../index.css'
function All({ title, category, price, image, desc }) {
    return (
        <div>
            <div className="item-div">
                <img src={image} alt="item" className="item-image" />
                <div>
                    <div className="text-section">
                        <h4 className="item-title">{title}</h4>
                        <div className="price-div"><h5 className="item-price">${price}</h5></div>
                    </div>
                    <div className="desc-div">
                        <p className="item-desc">{desc}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default All;