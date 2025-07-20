"use client";
import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/demo.json";

const Page = () => {
    const [selected, setSelected] = useState<any>(null);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    return (
        <div className="min-h-screen w-full bg-white text-black p-4 sm:p-8">
            <div className="flex justify-between mb-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Nuestro Menú</h1>

                <button
                    onClick={() =>
                        setViewMode(viewMode === "grid" ? "list" : "grid")
                    }
                    className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold"
                >
                    Cambiar a vista {viewMode === "grid" ? "lista" : "cuadrícula"}
                </button>
            </div>

            {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.presentation.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                        >
                            <button onClick={() => setSelected(item)} className="w-full">
                                <Image
                                    src={item.source}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                            </button>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="text-xl font-bold text-yellow-600 mt-2">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {data.presentation.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center border border-gray-200 rounded-lg p-3 gap-4 shadow-md hover:shadow-lg transition-shadow bg-white"
                        >
                            <Image
                                src={item.source}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="rounded-lg object-cover"
                            />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="text-xl font-bold text-yellow-600 mt-1">{item.price}</p>
                            </div>
                            <button
                                onClick={() => setSelected(item)}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Ver más
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-xl p-4 max-w-md w-full relative">
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
                        >
                            ✖️
                        </button>
                        <Image
                            src={selected.source}
                            alt={selected.title}
                            width={800}
                            height={500}
                            className="w-full h-auto rounded-lg mb-4 object-cover"
                        />
                        <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
                        <p className="text-gray-700">{selected.description}</p>
                        <p className="text-2xl text-yellow-600 font-bold mt-3">
                            {selected.price}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
