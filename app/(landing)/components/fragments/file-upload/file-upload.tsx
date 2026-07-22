"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileProps = {
  onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: TFileProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  };
  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files?.[0]);
      }}
      className="bg-primary-light border border-dashed border-primary w-[410px] h-[130px] flex flex-col items-center justify-center cursor-pointer"
    >
      <input
        className="hidden"
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {
        !file ? (
               <div className="text-center">
        <FiUploadCloud size={24} className="text-primary mx-auto" />
        <p className="text-xs">Upload Your Payment Here</p>
      </div>
        ) : (
<div className="text-center">
    <FiImage size={24} className="text-primary mx-auto"/>
    <p className="text-xs text-primary">{file.name}</p>
    <p className="text-xs text-gray400">
        {(file.size / 1024).toFixed(1) } kb
    </p>
    <button onClick={removeFile} className="bg-primary/70 px-2 py-1 mt-4 flex mx-auto gap-2 items-center text-xs text-white">
        <FiTrash2  size={15} className="self-center text-white"/> Remove
    </button>
</div>
        )
      }
   
    </div>
  );
};

export default FileUpload;
