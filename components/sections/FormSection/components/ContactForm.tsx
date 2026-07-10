import Button from "@/components/ui/Button/Button"
import FormField from "./FormField"
import TextAreaField from "./TextAreaField"

export default function ContactForm() {
  return (
    <form className="space-y-10 pt-8 max-w-3xl ml-auto">
      <div className="grid gap-3 md:gap-8 md:grid-cols-2">
        <FormField label="First Name*" />
        <FormField label="Company" />

        <FormField label="Email*" />
        <FormField label="Phone*" />
      </div>

      <TextAreaField label="Details about your description" rows={4} />

      <Button>Send</Button>
    </form>
  )
}
