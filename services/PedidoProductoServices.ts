import PedidoProducto from "../Dto/PedidoProductoDto/PedidoProductoDto";
import PedidoProductoRepository from "../repositories/PedidoProductoRepository";



class PedidoProductoServices {
    
    static async PedidoProductoRegister(pedidoProducto: PedidoProducto) {
        return await PedidoProductoRepository.add(pedidoProducto);
    }

    static async PedidoProductoGet(id_factura: number) {
        return await PedidoProductoRepository.getById(id_factura);
    }

    static async PedidoProductoGetAll() {
        return await PedidoProductoRepository.getAll();
    }

}

export default PedidoProductoServices;