export function Cards({ data, addToCart }) {

    return (
        <div className="row">
            {data.map((item, index) => (

                <div className="col-lg-3 col-md-4 card-space" key={index}>
                    <div className="card h-100">
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text"> {item.rating}</p>
                            <p className="card-text"> {item.price}</p>
                            <button disabled={item.isDisabled} className="btn btn-outline-dark " onClick={() => addToCart(item, index)}>
                                <span>Add to cart</span> <img className="icon-button" src="https://img.icons8.com/fluency/20/000000/add-shopping-cart.png" />
                            </button>
                        </div>
                    </div>
                </div>


            ))}

        </div>
    );
}