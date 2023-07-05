import { Component } from "react";
import Button from './Button'

const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width:'30%',
        height: '70%',
        padding: '10px 15px',
        borderRadius:'5px',
    },
    
    img: {
        width: '100%',
        height: '170px'
    }
}

class Producto extends Component {
    render () {
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={style.producto}>
                <img style={style.img} alt= {producto.name}  src= {producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price} </p>
                <Button onClick = {() =>agregarAlCarro(producto)}>
                    agregarAlCarro
                </Button>
            </div>
        )
    }

}
export default Producto