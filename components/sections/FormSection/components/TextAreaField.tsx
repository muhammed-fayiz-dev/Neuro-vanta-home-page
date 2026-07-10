interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextAreaField({
  label,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="mb-3 text-xs text-extra-dark">
        {label}
      </label>

      <textarea
        rows={4}
        {...props}
        className="
          resize-none
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