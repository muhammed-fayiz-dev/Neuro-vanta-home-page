interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormField({
  label,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-xs text-extra-dark">
        {label}
      </label>

      <input
        {...props}
        className="
          border-0
          border-b
          border-border-strong
          bg-transparent
          pb-3
          outline-none
          transition-colors
          focus:border-extra-dark
        "
      />
    </div>
  );
}