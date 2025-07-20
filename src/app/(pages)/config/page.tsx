"use client";
import React, { useEffect, useState } from "react";
import { FaHamburger, FaTags, FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import Image from "next/image";
import demo from "@/data/demo.json";

const Page = () => {
    const [section, setSection] = useState<"products" | "categories">("products");
    const [products, setProducts] = useState([...demo.presentation]);
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        group: "",
        source: demo.presentation[0]?.source || "",
        type: demo.presentation[0]?.type || "img",
    });

    const categories = [...new Set(demo.presentation.map((p) => p.category))];
    const groups = [...new Set(demo.presentation.map((p) => p.group))];

    const [newCategory, setNewCategory] = useState("");
    const [newGroup, setNewGroup] = useState("");
    const [localCategories, setLocalCategories] = useState(categories);
    const [localGroups, setLocalGroups] = useState(groups);
    const [showCatGroupModal, setShowCatGroupModal] = useState(false);

    const deleteProduct = (index: number) => {
        const newData = [...products];
        newData.splice(index, 1);
        setProducts(newData);
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 text-black p-6">
            <div className="w-full max-w-4xl mx-auto mb-6 bg-yellow-100 border border-yellow-300 text-yellow-800 text-center text-sm md:text-base rounded-lg p-4">
                ⚠️ <strong>Modo prueba:</strong> Los datos aquí visualizados son de ejemplo. Los cambios realizados no se guardarán al salir de la página.
            </div>

            <h1 className="text-3xl font-bold mb-6 text-center">Panel de Configuración</h1>

            <div className="flex justify-center gap-4 mb-8">
                <button
                    onClick={() => setSection("products")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold border ${section === "products"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-black border-gray-300"
                        }`}
                >
                    <FaHamburger /> Productos
                </button>
                <button
                    onClick={() => setSection("categories")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold border ${section === "categories"
                        ? "bg-purple-600 text-white"
                        : "bg-white text-black border-gray-300"
                        }`}
                >
                    <FaTags /> Categorías y Grupos
                </button>
            </div>

            {section === "products" && (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-700">Previsualiza y simula acciones sobre los productos actuales.</p>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                            onClick={() => setShowModal(true)}
                        >
                            <FaPlus /> Nuevo Producto
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                            >
                                <Image
                                    src={item.source}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    {editingIndex === index ? (
                                        <>
                                            <input
                                                className="w-full mb-2 border p-1 rounded"
                                                value={item.title}
                                                onChange={(e) => {
                                                    const newList = [...products];
                                                    newList[index].title = e.target.value;
                                                    setProducts(newList);
                                                }}
                                            />
                                            <textarea
                                                className="w-full mb-2 border p-1 rounded"
                                                value={item.description}
                                                onChange={(e) => {
                                                    const newList = [...products];
                                                    newList[index].description = e.target.value;
                                                    setProducts(newList);
                                                }}
                                            />
                                            <input
                                                className="w-full mb-2 border p-1 rounded"
                                                value={item.price}
                                                onChange={(e) => {
                                                    const newList = [...products];
                                                    newList[index].price = e.target.value;
                                                    setProducts(newList);
                                                }}
                                            />
                                            <button
                                                onClick={() => setEditingIndex(null)}
                                                className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                                            >
                                                Guardar
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-xl font-bold">{item.title}</h2>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                            <div className="mt-2 text-lg font-semibold text-yellow-600">
                                                {item.price}
                                            </div>
                                        </>
                                    )}

                                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                                        <span>{item.group}</span>
                                        <span>{item.category}</span>
                                    </div>
                                    <div className="flex justify-end gap-2 mt-4">
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1"
                                            onClick={() => setEditingIndex(index)}
                                        >
                                            <FaEdit /> Editar
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm flex items-center gap-1"
                                            onClick={() => deleteProduct(index)}
                                        >
                                            <FaTrash /> Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {section === "categories" && (
                <>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-gray-700">
                            Previsualiza las categorías y grupos actuales.
                        </p>
                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                            onClick={() => setShowCatGroupModal(true)}
                        >
                            <FaPlus /> Nueva Categoría / Grupo
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-4 shadow-sm border">
                            <h3 className="text-lg font-bold mb-2">Categorías</h3>
                            <ul className="text-sm list-disc list-inside text-gray-700">
                                {localCategories.map((cat, i) => (
                                    <li key={i}>{cat}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-4 shadow-sm border">
                            <h3 className="text-lg font-bold mb-2">Grupos</h3>
                            <ul className="text-sm list-disc list-inside text-gray-700">
                                {localGroups.map((grp, i) => (
                                    <li key={i}>{grp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg relative">
                        <button
                            className="absolute top-3 right-4 text-gray-500 text-xl"
                            onClick={() => setShowModal(false)}
                        >
                            ✖️
                        </button>

                        <h2 className="text-2xl font-bold mb-4">Agregar Nuevo Producto</h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={newProduct.title}
                                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                            <textarea
                                placeholder="Descripción"
                                value={newProduct.description}
                                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Precio"
                                value={newProduct.price}
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Grupo"
                                value={newProduct.group}
                                onChange={(e) => setNewProduct({ ...newProduct, group: e.target.value })}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="text"
                                placeholder="Categoría"
                                value={newProduct.category}
                                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                                className="w-full border p-2 rounded"
                            />

                            <div className="mt-4">
                                <p className="mb-1 font-medium">Selecciona una imagen:</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {demo.presentation.map((img, i) => (
                                        <Image
                                            key={i}
                                            src={img.source}
                                            alt="thumb"
                                            width={100}
                                            height={100}
                                            onClick={() =>
                                                setNewProduct({ ...newProduct, source: img.source })
                                            }
                                            className={`cursor-pointer rounded border-2 ${newProduct.source === img.source
                                                ? "border-blue-500"
                                                : "border-transparent"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <button
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded w-full"
                                onClick={() => {
                                    setProducts([...products, newProduct]);
                                    setShowModal(false);
                                    setNewProduct({
                                        title: "",
                                        description: "",
                                        price: "",
                                        category: "",
                                        group: "",
                                        source: demo.presentation[0]?.source || "",
                                        type: demo.presentation[0]?.type || "img",
                                    });
                                }}
                            >
                                Guardar Producto
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showCatGroupModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg relative">
                        <button
                            className="absolute top-3 right-4 text-gray-500 text-xl"
                            onClick={() => setShowCatGroupModal(false)}
                        >
                            ✖️
                        </button>

                        <h2 className="text-2xl font-bold mb-4">Nueva Categoría o Grupo</h2>

                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Nombre de nueva categoría"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                className="w-full border p-2 rounded"
                            />
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                                onClick={() => {
                                    if (newCategory && !localCategories.includes(newCategory)) {
                                        setLocalCategories([...localCategories, newCategory]);
                                        setNewCategory("");
                                    }
                                }}
                            >
                                Agregar Categoría
                            </button>

                            <input
                                type="text"
                                placeholder="Nombre de nuevo grupo"
                                value={newGroup}
                                onChange={(e) => setNewGroup(e.target.value)}
                                className="w-full border p-2 rounded"
                            />
                            <button
                                className="bg-purple-600 text-white px-4 py-2 rounded w-full"
                                onClick={() => {
                                    if (newGroup && !localGroups.includes(newGroup)) {
                                        setLocalGroups([...localGroups, newGroup]);
                                        setNewGroup("");
                                    }
                                }}
                            >
                                Agregar Grupo
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Page;