import SeEncuentra from "../Dto/SeEncuentraDto/SeEncuentra";
import ProductoRepository from "../repositories/ProductoRepository";
import SeEncuentraRepository from "../repositories/SeEncuentraRepository";


class SeEncuentraServices {
    // Register Producto
    static async SeEncuentraRegister(SeEncuentra: SeEncuentra) {
        return await SeEncuentraRepository.add(SeEncuentra);
    }

    static async SeEncuentraUpdate(nombre_producto: string, id_categoria: number): Promise<boolean> {
    try {
        const producto = await ProductoRepository.getByName(nombre_producto);
        if (!producto || producto.length === 0) {
        return false;
        }

        const id_producto = producto[0].id_producto;
        const seEncuentra = new SeEncuentra(id_categoria, id_producto);

        const [result]: any = await SeEncuentraRepository.updateRelacion(seEncuentra);

        // result.affectedRows es típico para UPDATE/INSERT en mysql
        return result.affectedRows > 0;
    } catch (error) {
        throw error;
    }
    }

}

export default SeEncuentraServices;