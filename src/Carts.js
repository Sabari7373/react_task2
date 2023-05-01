const Card = ({ cart, removeCart }) => (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Product Lists
                    </h5>
                    <button
                        type="button"className="close" data-dismiss="modal" aria-label="Close" >
                        <span aria-hidden="true">&times;</span>
                    </button></div>
                <div className="modal-body">
                    <table className="tabel  table-hover m0">
                        <tbody>
                            {cart.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><img src={item.image} style={{ height: '5rem', marginRight: '8px' }} /></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="btn btn-warning ms-2" onClick={() => removeCart(item)}><img src="https://img.icons8.com/material-sharp/15/000000/filled-trash.png" /></button>
                                        </td> </tr>)   })} </tbody>
                    </table></div> </div> </div> </div>)
export default Card;