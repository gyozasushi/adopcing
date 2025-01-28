"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useFetchProducts, useCreateProduct } from "../features/products";

export default function Admin() {
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Fetch products
  const { data: productsData, isLoading, isError, refetch } = useFetchProducts();

  // Create product
  const { mutate: createProduct, isLoading: isCreating } = useCreateProduct({
    onSuccess: () => {
      refetch(); // Refresh product list setelah berhasil menambahkan produk
      setNewProduct({ name: "", price: "" }); // Reset form
    },
  });

  const handleCreateProduct = () => {
    if (newProduct.name && newProduct.price) {
      createProduct(newProduct);
    } else {
      alert("Nama dan harga produk harus diisi.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* Form untuk menambahkan produk */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Tambah Produk</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nama Produk"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="number"
            placeholder="Harga Produk"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <Button onClick={handleCreateProduct} disabled={isCreating}>
            {isCreating ? "Menambahkan..." : "Tambah"}
          </Button>
        </div>
      </div>

      {/* Tabel untuk menampilkan produk */}
      <h2 className="text-lg font-semibold mb-2">Daftar Produk</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error saat mengambil data produk.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Nama Produk</th>
              <th className="border border-gray-300 px-4 py-2">Harga</th>
            </tr>
          </thead>
          <tbody>
            {productsData?.data.map((product, index) => (
              <tr key={product.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">Rp {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
