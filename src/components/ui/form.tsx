"use client"
import * as Form from "@radix-ui/react-form";

export const FormField = ({
    name,
    label,
    placeholder,
    type = "text",
    required = false,
    asChild,
    children,
    message,
    onChange
  }: {
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    asChild?: boolean;
    children?: React.ReactNode;
    message?: string;
    onChange?: (value: string) => void;
  }) => (
    <Form.Field className="grid" name={name}>
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
          {label}
        </Form.Label>
        {message && (
          <Form.Message className="text-[13px] text-white opacity-80" match="valueMissing">
            {message}
          </Form.Message>
        )}
      </div>
      {asChild ? (
        <Form.Control asChild>{children}</Form.Control>
      ) : (
        <Form.Control asChild>
          <input
            className="w-full text-[13px] bg-gray-100/50 rounded-md border-solid border border-gray-300 h-8 px-2"
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
        </Form.Control>
      )}
    </Form.Field>
);