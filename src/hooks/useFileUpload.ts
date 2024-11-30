import { useState, ChangeEvent } from "react";

const useFileUpload = (): [
  File | null,
  string | null,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearUpload = () => {
    setSelectedFile(null);
    setPreviewImg(null);
  };

  return [selectedFile, previewImg, handleFileUpload, clearUpload];
};

export default useFileUpload;
