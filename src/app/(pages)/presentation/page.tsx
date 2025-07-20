"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "@/data/demo.json";

const INTERVAL = 5000;

const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"slide" | "list">("slide");
    const [category, setCategory] = useState("Todos");
    const [group, setGroup] = useState("Todos");
    const [showModal, setShowModal] = useState(false);

    // Extraer categorías y grupos únicos
    const categories = ["Todos", ...new Set(data.presentation.map((i) => i.category))];
    const groups = ["Todos", ...new Set(data.presentation.map((i) => i.group))];

    // Filtrar por categoría y grupo
    const filtered = data.presentation.filter((item) => {
        const matchCategory = category === "Todos" || item.category === category;
        const matchGroup = group === "Todos" || item.group === group;
        return matchCategory && matchGroup;
    });

    // Control de intervalo automático para slide
    useEffect(() => {
        if (viewMode === "slide") {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % filtered.length);
            }, INTERVAL);
            return () => clearInterval(interval);
        }
    }, [filtered.length, viewMode]);

    return (
        <div className="w-full h-screen overflow-hidden relative bg-black text-white">

            {/* 🔘 Botón flotante */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-lg z-50"
            >
                ⚙️ Opciones
            </button>

            {/* 📦 Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[90%] max-w-md relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
                        >
                            ✖️
                        </button>

                        <h2 className="text-xl font-bold mb-4">Configuración de Vista</h2>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Vista</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={viewMode}
                                onChange={(e) => setViewMode(e.target.value as "slide" | "list")}
                            >
                                <option value="slide">Modo Diapositiva</option>
                                <option value="list">Modo Lista</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Categoría</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Grupo</label>
                            <select
                                className="w-full border p-2 rounded"
                                value={group}
                                onChange={(e) => setGroup(e.target.value)}
                            >
                                {groups.map((g) => (
                                    <option key={g} value={g}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* 👁‍🗨 Vista SLIDE */}
            {viewMode === "slide" ? (
                <div className="relative w-full h-screen">
                    {filtered.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                }`}
                        >
                            {/* Imagen de fondo */}
                            <Image
                                src={item.source}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="brightness-[0.4]"
                            />

                            {/* 🟨 Detalles alineados a la derecha */}
                            <div className="relative z-20 flex items-center justify-end h-full px-4 sm:px-12">
                                <div className="bg-white/10 backdrop-blur-md text-center p-8 rounded-xl w-full max-w-md">
                                    <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-lg mb-2">{item.description}</p>
                                    <span className="text-2xl font-semibold text-yellow-300">{item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                // 👁‍🗨 Vista LISTA
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                    {filtered.map((item, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={item.source}
                                alt={item.title}
                                width={500}
                                height={300}
                                className="w-full h-64 object-cover brightness-75"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                                <p className="text-lg font-semibold text-yellow-300">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Page;
