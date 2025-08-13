// // "use client";

// // import Producto from "@/app/models/productos";
// // import { useState } from "react";
// // import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";

// // export default function ProductosPage() {
// //   const [productos, setProductos] = useState<Producto[]>([
// //     { id: 1, nombre: "Producto de ejemplo" },
// //   ]);
// //   const [busqueda, setBusqueda] = useState("");
// //   const [modalAbierto, setModalAbierto] = useState(false);
// //   const [nuevoNombre, setNuevoNombre] = useState("");
// //   const [editando, setEditando] = useState<Producto | null>(null);

// //   const productosFiltrados = productos.filter((p) =>
// //     p.nombre.toLowerCase().includes(busqueda.toLowerCase())
// //   );

// //   const abrirModalAgregar = () => {
// //     setNuevoNombre("");
// //     setEditando(null);
// //     setModalAbierto(true);
// //   };

// //   const abrirModalEditar = (producto: Producto) => {
// //     setNuevoNombre(producto.nombre);
// //     setEditando(producto);
// //     setModalAbierto(true);
// //   };

// //   const guardarProducto = () => {
// //     if (nuevoNombre.trim() === "") return;

// //     if (editando) {
// //       setProductos((prev) =>
// //         prev.map((p) =>
// //           p.id === editando.id ? { ...p, nombre: nuevoNombre } : p
// //         )
// //       );
// //     } else {
// //       const nuevoId = productos.length
// //         ? Math.max(...productos.map((p) => p.id)) + 1
// //         : 1;
// //       setProductos((prev) => [...prev, { id: nuevoId, nombre: nuevoNombre }]);
// //     }

// //     setModalAbierto(false);
// //   };

// //   const eliminarProducto = (id: number) => {
// //     setProductos((prev) => prev.filter((p) => p.id !== id));
// //   };

// //   return (
// //     <main className="p-4 sm:p-6">
// //       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
// //         Gestión de Productos
// //       </h1>

// //       <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
// //         <input
// //           type="text"
// //           placeholder="Buscar producto..."
// //           value={busqueda}
// //           onChange={(e) => setBusqueda(e.target.value)}
// //           className="w-full sm:w-1/2 px-3 py-2 border rounded shadow-sm"
// //         />
// //         <button
// //           onClick={abrirModalAgregar}
// //           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
// //         >
// //           <HiPlus className="text-xl" />
// //           <span>Agregar producto</span>
// //         </button>
// //       </div>

// //       <div className="overflow-x-auto w-full">
// //         <table className="min-w-[600px] md:min-w-full border text-sm sm:text-base text-center">
// //           <thead className="bg-gray-100 text-gray-700">
// //             <tr>
// //               <th className="py-2 px-4 border">ID</th>
// //               <th className="py-2 px-4 border">Nombre</th>
// //               <th className="py-2 px-4 border">Acciones</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {productosFiltrados.length ? (
// //               productosFiltrados.map((p) => (
// //                 <tr key={p.id}>
// //                   <td className="py-2 px-4 border">{p.id}</td>
// //                   <td className="py-2 px-4 border">{p.nombre}</td>
// //                   <td className="py-2 px-4 border space-x-2">
// //                     <button
// //                       onClick={() => abrirModalEditar(p)}
// //                       className="inline-flex items-center justify-center bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
// //                       title="Editar"
// //                     >
// //                       <HiPencil className="text-lg" />
// //                     </button>
// //                     <button
// //                       onClick={() => eliminarProducto(p.id)}
// //                       className="inline-flex items-center justify-center bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
// //                       title="Eliminar"
// //                     >
// //                       <HiTrash className="text-lg" />
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan={3} className="py-4 text-gray-500">
// //                   No se encontraron productos.
// //                 </td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Modal */}
// //       {modalAbierto && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
// //           <div className="bg-white p-6 rounded shadow w-full max-w-md max-h-[90vh] overflow-y-auto">
// //             <h2 className="text-xl font-bold mb-4 text-black">
// //               {editando ? "Editar producto" : "Agregar producto"}
// //             </h2>
// //             <input
// //               type="text"
// //               placeholder="Nombre del producto"
// //               value={nuevoNombre}
// //               onChange={(e) => setNuevoNombre(e.target.value)}
// //               className="border rounded w-full px-3 py-2 mb-4 text-gray-900"
// //             />
// //             <div className="flex justify-end space-x-2">
// //               <button
// //                 onClick={() => setModalAbierto(false)}
// //                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
// //               >
// //                 Cancelar
// //               </button>
// //               <button
// //                 onClick={guardarProducto}
// //                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
// //               >
// //                 Guardar
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </main>
// //   );
// // }
// "use client";

// "use client";

// import { useState } from "react";
// import { FaEdit, FaTrash, FaPlus, FaSearch, FaTimes } from "react-icons/fa";
// import { Dialog } from "@headlessui/react";
// import Producto from "@/models/productos";
// import ImageUploader from "@/components/ImageUploader";

// export default function ProductCRUD() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState<Producto[]>([]);
//   const [newProduct, setNewProduct] = useState<Producto>({
//     id: Date.now(),
//     name: "",
//     title: "",
//     description: "",
//     imagePath: [],
//     price: 0,
//     priceBuy: 0,
//     sizeBralette: [],
//     sizePanty: [],
//     color: [],
//     amountMl: 0,
//     category: "",
//   });

//   //   const handleChange = (
//   //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   //   ) => {
//   //     const { name, value } = e.target;
//   //     setNewProduct({ ...newProduct, [name]: value });
//   //   };
//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setNewProduct((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value.split(",") });
//   };

//   const handleAddProduct = () => {
//     setProducts([...products, { ...newProduct, id: Date.now() }]);
//     setIsOpen(false);
//     setNewProduct({
//       id: Date.now(),
//       name: "",
//       title: "",
//       description: "",
//       imagePath: [],
//       price: 0,
//       priceBuy: 0,
//       sizeBralette: [],
//       sizePanty: [],
//       color: [],
//       amountMl: 0,
//       category: "",
//     });
//   };

//   const handleDeleteProduct = (id: number) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-4 max-w-7xl mx-auto text-gray-900">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
//         <div className="relative w-full sm:w-1/2">
//           <FaSearch className="absolute top-3 left-3 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Buscar producto"
//             className="pl-10 pr-4 py-2 border rounded-md w-full placeholder-gray-500"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={() => setIsOpen(true)}
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//         >
//           <FaPlus /> Agregar producto
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="border px-4 py-2 text-left">Nombre</th>
//               <th className="border px-4 py-2 text-left">Título</th>
//               <th className="border px-4 py-2 text-left">Descripción</th>
//               <th className="border px-4 py-2 text-left">Precio</th>
//               <th className="border px-4 py-2 text-left">Precio Compra</th>
//               <th className="border px-4 py-2 text-left">Tallas Bralette</th>
//               <th className="border px-4 py-2 text-left">Tallas Panty</th>
//               <th className="border px-4 py-2 text-left">Colores</th>
//               <th className="border px-4 py-2 text-left">ML</th>
//               <th className="border px-4 py-2 text-left">Categoría</th>
//               <th className="border px-4 py-2 text-left">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product) => (
//               <tr key={product.id} className="hover:bg-gray-50 text-gray-400">
//                 <td className="border px-4 py-2">{product.name}</td>
//                 <td className="border px-4 py-2">{product.title}</td>
//                 <td className="border px-4 py-2">{product.description}</td>
//                 <td className="border px-4 py-2">${product.price}</td>
//                 <td className="border px-4 py-2">${product.priceBuy}</td>
//                 <td className="border px-4 py-2">
//                   {product.sizeBralette.join(", ")}
//                 </td>
//                 <td className="border px-4 py-2">
//                   {product.sizePanty.join(", ")}
//                 </td>
//                 <td className="border px-4 py-2">{product.color.join(", ")}</td>
//                 <td className="border px-4 py-2">{product.amountMl}</td>
//                 <td className="border px-4 py-2">{product.category}</td>
//                 <td className="border px-4 py-2">
//                   <button className="text-blue-600 hover:text-blue-800 mr-2">
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Dialog
//         open={isOpen}
//         onClose={() => setIsOpen(false)}
//         className="relative z-50 text-black"
//       >
//         {/* Fondo difuminado */}
//         <div
//           className="fixed inset-0 bg-black/30 backdrop-blur-sm"
//           aria-hidden="true"
//         />

//         {/* Contenedor centrado */}
//         <div className="fixed inset-0 flex items-center justify-center px-4">
//           <Dialog.Panel className="relative bg-white p-6 rounded-md w-full max-w-md shadow-lg overflow-y-auto max-h-[90vh]">
//             {/* Botón cerrar */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//             >
//               <FaTimes size={18} />
//             </button>

//             {/* Título */}
//             <Dialog.Title className="text-lg font-bold mb-4">
//               Agregar producto
//             </Dialog.Title>

//             {/* Formulario */}
//             <div className="space-y-3">
//               {/* Campos estándar */}
//               {[
//                 { label: "Nombre", name: "name", type: "text" },
//                 { label: "Título", name: "title", type: "text" },
//                 { label: "Descripción", name: "description", type: "textarea" },
//                 { label: "Precio", name: "price", type: "number" },
//                 { label: "Precio compra", name: "priceBuy", type: "number" },
//                 {
//                   label: "Tallas Bralette (coma separadas)",
//                   name: "sizeBralette",
//                   type: "array",
//                 },
//                 {
//                   label: "Tallas Panty (coma separadas)",
//                   name: "sizePanty",
//                   type: "array",
//                 },
//                 {
//                   label: "Colores (coma separados)",
//                   name: "color",
//                   type: "array",
//                 },
//                 { label: "Mililitros", name: "amountMl", type: "number" },
//               ].map(({ label, name, type }) => (
//                 <div key={name}>
//                   <label className="block text-sm font-medium text-gray-700">
//                     {label}
//                   </label>
//                   {type === "textarea" ? (
//                     <textarea
//                       name={name}
//                       value={(newProduct as any)[name]}
//                       onChange={handleChange}
//                       className="w-full border px-3 py-2 rounded-md placeholder-gray-500"
//                       placeholder={label}
//                     />
//                   ) : (
//                     <input
//                       type={
//                         type === "array" || type === "text" ? "text" : "number"
//                       }
//                       name={name}
//                       value={
//                         type === "array"
//                           ? (newProduct as any)[name]?.join(",") ?? ""
//                           : (newProduct as any)[name] ?? ""
//                       }
//                       onChange={
//                         type === "array" ? handleArrayChange : handleChange
//                       }
//                       className="w-full border px-3 py-2 rounded-md placeholder-gray-500"
//                       placeholder={label}
//                     />
//                   )}
//                 </div>
//               ))}

//               {/* Categoría como select */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Categoría
//                 </label>
//                 <select
//                   name="category"
//                   value={newProduct.category}
//                   onChange={handleChange}
//                   className="w-full border px-3 py-2 rounded-md text-gray-900"
//                 >
//                   <option value="">Selecciona una categoría</option>
//                   <option value="lingerie">Lencería</option>
//                   <option value="fragance">Fragancias</option>
//                   <option value="accesories">Accesorios</option>
//                 </select>
//               </div>

//               {/* Carga de imágenes desde el dispositivo */}
//               {/* <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Imágenes
//                 </label>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={(e) => {
//                     const files = Array.from(e.target.files || []);
//                     const fileURLs = files.map((file) =>
//                       URL.createObjectURL(file)
//                     );
//                     setNewProduct((prev: any) => ({
//                       ...prev,
//                       imagePath: fileURLs,
//                     }));
//                   }}
//                   className="w-full border px-3 py-2 rounded-md text-gray-900 bg-white"
//                 />
//                 {newProduct.imagePath?.length > 0 && (
//                   <div className="mt-2 grid grid-cols-3 gap-2">
//                     {newProduct.imagePath.map((src: string, i: number) => (
//                       <img
//                         key={i}
//                         src={src}
//                         alt={`Imagen ${i + 1}`}
//                         className="h-16 w-16 object-cover rounded"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div> */}
//           <ImageUploader
//             onImagesChange={(urls) =>
//               setNewProduct((prev) => ({
//                 ...prev,
//                 imagePath: urls,
//               }))
//             }
//           />

//               {/* Botones */}
//               <div className="flex justify-end gap-2 mt-4">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
//                 >
//                   Cancelar
//                 </button>
//                 <button
//                   onClick={handleAddProduct}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                   Guardar
//                 </button>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import Producto from "@/models/productos";
import ImageUploader from "@/components/ImageUploader";

export default function ProductCRUD() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Producto[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  // Modal de confirmación
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    action: "delete" | "update" | null;
    productId: number | null;
  }>({
    isOpen: false,
    action: null,
    productId: null,
  });

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const emptyProduct: Producto = {
    id: Date.now(),
    name: "",
    title: "",
    description: "",
    imagePath: [],
    price: 0,
    priceBuy: 0,
    sizeBralette: [],
    sizePanty: [],
    color: [],
    amountMl: 0,
    category: "",
  };

  const [newProduct, setNewProduct] = useState<Producto>(emptyProduct);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value.split(",") });
  };

  const handleAddOrEditProduct = () => {
    if (editingProductId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProductId ? { ...newProduct, id: editingProductId } : p
        )
      );
      setEditingProductId(null);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setIsOpen(false);
    setNewProduct({ ...emptyProduct, id: Date.now() });
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Paginación
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Confirmar acción
  const confirmAction = () => {
    if (confirmModal.action === "delete" && confirmModal.productId !== null) {
      handleDeleteProduct(confirmModal.productId);
    }
    if (confirmModal.action === "update") {
      handleAddOrEditProduct();
    }
    setConfirmModal({ isOpen: false, action: null, productId: null });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto text-gray-900">
      {/* Barra de búsqueda y botón */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-1/2">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar producto"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full placeholder-gray-500 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setEditingProductId(null);
            setNewProduct({ ...emptyProduct, id: Date.now() });
            setIsOpen(true);
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2 rounded-lg shadow-lg transition"
        >
          <FaPlus /> Agregar producto
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Imagen</th>
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Título</th>
              <th className="p-3 text-left">Descripción</th>
              <th className="p-3 text-left">Precio</th>
              <th className="p-3 text-left">Precio Compra</th>
              <th className="p-3 text-left">Bralette</th>
              <th className="p-3 text-left">Panty</th>
              <th className="p-3 text-left">Colores</th>
              <th className="p-3 text-left">ML</th>
              <th className="p-3 text-left">Categoría</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">
                  {product.imagePath[0] ? (
                    <img
                      src={product.imagePath[0]}
                      alt={product.name}
                      className="h-12 w-12 object-cover rounded-md shadow-sm"
                    />
                  ) : (
                    <span className="text-gray-400 text-xs">Sin imagen</span>
                  )}
                </td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.title}</td>
                <td className="p-3 max-w-xs truncate">{product.description}</td>
                <td className="p-3 font-semibold">${product.price}</td>
                <td className="p-3">${product.priceBuy}</td>
                <td className="p-3">{product.sizeBralette.join(", ")}</td>
                <td className="p-3">{product.sizePanty.join(", ")}</td>
                <td className="p-3">{product.color.join(", ")}</td>
                <td className="p-3">{product.amountMl}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setEditingProductId(product.id);
                      setNewProduct(product);
                      setIsOpen(true);
                    }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white p-2 rounded-md shadow transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() =>
                      setConfirmModal({
                        isOpen: true,
                        action: "delete",
                        productId: product.id,
                      })
                    }
                    className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white p-2 rounded-md shadow transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {!currentProducts.length && (
              <tr>
                <td colSpan={12} className="text-center py-4 text-gray-500">
                  No hay productos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Paginador */}
      {totalPages >= 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-gray-100 hover:bg-gray-200 transition"
          >
            Anterior
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded transition ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50 bg-gray-100 hover:bg-gray-200 transition"
          >
            Siguiente
          </button>
        </div>
      )}

      {/* Modal de formulario agregar/editar */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0  bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <FaTimes size={18} />
            </button>
            <Dialog.Title className="text-lg font-bold mb-4 text-gray-600">
              {editingProductId ? "Editar producto" : "Agregar producto"}
            </Dialog.Title>
            {/* Campos de formulario */}
            <div className="space-y-3 text-gray-600">
              {[
                { label: "Nombre", name: "name", type: "text" },
                { label: "Título", name: "title", type: "text" },
                { label: "Descripción", name: "description", type: "textarea" },
                { label: "Precio", name: "price", type: "number" },
                { label: "Precio compra", name: "priceBuy", type: "number" },
                { label: "Tallas Bralette (coma separadas)", name: "sizeBralette", type: "array" },
                { label: "Tallas Panty (coma separadas)", name: "sizePanty", type: "array" },
                { label: "Colores (coma separados)", name: "color", type: "array" },
                { label: "Mililitros", name: "amountMl", type: "number" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700">{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      name={name}
                      value={(newProduct as any)[name]}
                      onChange={handleChange}
                      className="w-full border px-3 py-2 rounded-md placeholder-gray-500"
                    />
                  ) : (
                    <input
                      type={type === "array" || type === "text" ? "text" : "number"}
                      name={name}
                      value={
                        type === "array"
                          ? (newProduct as any)[name]?.join(",") ?? ""
                          : (newProduct as any)[name] ?? ""
                      }
                      onChange={type === "array" ? handleArrayChange : handleChange}
                      className="w-full border px-3 py-2 rounded-md placeholder-gray-500"
                    />
                  )}
                </div>
              ))}
              {/* Categoría */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Categoría</label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="lingerie">Lencería</option>
                  <option value="fragance">Fragancias</option>
                  <option value="accesories">Accesorios</option>
                </select>
              </div>
              {/* Imágenes */}
              <ImageUploader
                onImagesChange={(urls) =>
                  setNewProduct((prev) => ({
                    ...prev,
                    imagePath: urls,
                  }))
                }
              />
              {/* Botones */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  onClick={() =>
                    editingProductId
                      ? setConfirmModal({ isOpen: true, action: "update", productId: editingProductId })
                      : handleAddOrEditProduct()
                  }
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Modal de confirmación */}
      <Dialog
        open={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, action: null, productId: null })}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center px-4">
          <Dialog.Panel className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <Dialog.Title className="text-lg font-bold text-gray-800 mb-3">
              Confirmar acción
            </Dialog.Title>
            <p className="text-gray-600 mb-4">
              {confirmModal.action === "delete"
                ? "¿Seguro que deseas eliminar este producto? Esta acción no se puede deshacer."
                : "¿Seguro que deseas actualizar este producto?"}
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmModal({ isOpen: false, action: null, productId: null })}
                className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={confirmAction}
                className={`px-4 py-2 text-white rounded-md ${
                  confirmModal.action === "delete"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Confirmar
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
