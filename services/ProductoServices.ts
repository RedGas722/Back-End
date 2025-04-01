import Producto from "../Dto/ProductoDto/ProductoDto";
import ProductoRepository from "../repositories/ProductoRepository";


class ProductoServices {
    
    static async ProductoRegister(producto: Producto) {
        return await ProductoRepository.add(producto);
    }

}

export default ProductoServices;