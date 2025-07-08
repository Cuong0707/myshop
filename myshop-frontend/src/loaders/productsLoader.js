
import { fetchProducts } from "../services/productService";
import { getAllBrands } from "../services/brandService";
import { getCollections } from "../services/collectionService";

export async function productsLoader() {
  try {
    const [products, brands, collections] = await Promise.all([
      fetchProducts(0, 4, null, null, null, null, true), // trang đầu
      getAllBrands(),
      getCollections(),
    ]);

    return {
      products,
      brands,
      collections,
    };
  } catch (error) {
    throw new Response("Lỗi khi tải dữ liệu sản phẩm", { status: 500 });
  }
}
