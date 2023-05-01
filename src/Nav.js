export function Nav({ cart }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="btn btn-outline-dark"
                    data-toggle="modal"
                    data-target="#exampleModal">
                    <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill m-2">
                        {cart.length}
                    </span>
                </button>
            </nav>
        </>
    );
}