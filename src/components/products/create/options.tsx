"use client";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateOption } from "@/store/product/optionSlice";

interface OptionsProps {
  id: number;
  onRemove: () => void; 
}

const Options = ({ id, onRemove }: OptionsProps) => {
  const [tags, setTags] = useState<string[]>([]); 
  const [title, setTitle] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Red, Blue, Green");

  const dispatch = useDispatch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setPlaceholder(""); 
      }
      setInputValue(""); 
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  useEffect(() => {
    dispatch(updateOption({ 
      index: id, 
      option: { id, title, values: tags } 
    }));
  }, [title, tags, id, dispatch]);

  return (
    <li className="bg-gray-100/50 border-gray-300 rounded-lg border border-solid grid grid-cols-[1fr_28px] items-center gap-2 p-1.5">
      <div className="grid grid-cols-[min-content,1fr] items-center gap-1.5">
        <div className="flex items-center px-2 py-1.5">
          <label className="text-[12px] text-black font-medium">Title</label>
        </div>
        <div className="relative">
          <input
            className="border-gray-300 rounded-md border border-solid text-[13px] h-8 px-1.5 w-full"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Color"
          />
        </div>
        <div className="flex items-center px-2 py-1.5">
          <label className="text-[12px] text-black font-medium">Values</label>
        </div>
        <div className="border-gray-300 items-center gap-1 bg-white flex rounded-md border border-solid text-[13px] h-8 px-1.5 w-full">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-gray-300 rounded-md border border-solid bg-gray-100/60 h-5 w-auto p-1 gap-1"
            >
              {tag}
              <button className="pt-0.5" onClick={() => removeTag(tag)}>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-7 w-full focus:outline-none"
            type="text"
            placeholder={placeholder}
          />
        </div>
      </div>
      <button
        type="button"
        className="flex items-center justify-center w-full"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
      </button>
    </li>
  );
};

export default Options;