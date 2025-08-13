import { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

export default function ImageUploader({ onImagesChange }: { onImagesChange: (urls: string[]) => void }) {
  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const fileURLs = Array.from(files).map(file => URL.createObjectURL(file));
    const newImages = [...images, ...fileURLs];
    setImages(newImages);
    onImagesChange(newImages);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    onImagesChange(updated);
  };

  return (
    <div>
      {/* Área de arrastrar y soltar */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition
        ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("imageInput")?.click()}
      >
        <FaCloudUploadAlt size={40} className="text-gray-400 mb-2" />
        <p className="text-gray-600 text-center">
          <span className="font-medium">Haz clic</span> o arrastra imágenes aquí
        </p>
        <p className="text-sm text-gray-400">Formatos: JPG, PNG, GIF (múltiples imágenes permitidas)</p>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {/* Vista previa */}
      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                className="h-24 w-24 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-1 hover:bg-red-500 transition"
              >
                <FaTimes size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
