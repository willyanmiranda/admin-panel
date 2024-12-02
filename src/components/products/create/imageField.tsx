"use client";
import { Button } from "@/components/common/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdownMenu";
import { MoreHorizontal, Upload, Images } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMainImage } from "@/store/product/productSlice";

interface FileData {
    url: string;
    name: string;
}

const ImageField = () => {
    const [files, setFiles] = useState<FileData[]>([]);
    const [fileEnter, setFileEnter] = useState(false);
    const [thumb, setThumb] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = e.target.files;
        if (uploadedFiles) {
            const newFiles = Array.from(uploadedFiles).map(file => ({
                url: URL.createObjectURL(file),
                name: file.name,
            }));
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setFileEnter(false);
        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files).map(file => ({
                url: URL.createObjectURL(file),
                name: file.name,
            }));
            setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (fileUrl: string) => {
        setFiles((prevFiles) => prevFiles.filter((f) => f.url !== fileUrl));
    };

    useEffect(() => {
        dispatch(setMainImage(thumb))
    }, [thumb])

    return (
        <>
            <button
                onClick={handleButtonClick}
                onDragOver={(e) => {
                    e.preventDefault();
                    setFileEnter(true);
                }}
                onDragLeave={() => setFileEnter(false)}
                onDrop={handleDrop}
                type="button"
                className={`bg-gray-100/50 border-gray-300 rounded-lg border border-dashed p-8 flex flex-col items-center gap-y-2 ${
                    fileEnter ? "border-blue-500" : ""
                }`}
            >
                <div className="flex items-center gap-x-2">
                    <Upload className="w-4 h-4" />
                    <p className="font-normal text-[13px]">Upload</p>
                </div>
                <p className="text-[13px] font-normal">
                    Arraste ou clique para fazer upload
                </p>
            </button>
            <input
                id="file"
                ref={fileInputRef}
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
            />
            {files.length > 0 && (
                <ul className="flex flex-col mt-3 gap-y-2">
                    {files.map((file, index) => (
                        <li
                            key={index}
                            className="bg-gray-100/50 border-gray-300 border border-solid shadow-elevation-card-rest flex items-center justify-between rounded-lg px-3 py-2"
                        >
                            <div className="flex items-center gap-x-3">
                                <div className="bg-ui-bg-base h-10 w-[40px] overflow-hidden rounded-md">
                                    <img src={file.url} alt={file.name} className="size-full object-cover object-center" />
                                </div>
                                <div className="flex gap-2">
                                    <p className="font-normal font-sans text-[13px]">{file.name}</p>
                                    {file.url === thumb && <Images className="w-5 h-5" />}
                                </div>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button aria-haspopup="true" size="icon" variant="ghost">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => handleRemoveFile(file.url)}>
                                        Excluir
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setThumb(file.url)}>
                                        Definir como thumbnail
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ImageField;