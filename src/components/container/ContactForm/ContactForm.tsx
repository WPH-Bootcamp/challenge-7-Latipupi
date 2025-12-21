import { useRef, useState } from "react";
import Modal from "../Popup/Modal";

const servicesList = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Software Development",
  "Other",
];

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
}

const ContactForm = () => {
  const [services, setServices] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Mengambil nilai langsung dari Ref
    const nameValue = nameRef.current?.value || "";
    const emailValue = emailRef.current?.value || "";
    const messageValue = messageRef.current?.value || "";

    // Validasi input
    if (!nameValue.trim()) newErrors.name = "Name is required";

    if (!emailValue.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
      newErrors.email = "Email format is invalid";
    }

    if (!messageValue.trim()) newErrors.message = "Message cannot be empty";

    if (services.length === 0) {
      newErrors.services = "Please select at least one service";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Jika sukses
    setErrors({});
    setIsModalOpen(true);
    setIsSuccess(!isSuccess);
  };

  return (
    <div className="w-full max-w-xl md:mx-auto p-8 rounded-2xl ">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-1 md:text-center">
        Ready to Start? Let’s Talk.
      </h2>
      <p className="mb-6 text-sm md:text-center text-four">
        Tell us what you need, and we’ll get back to you soon.
      </p>

      <form onSubmit={(e) => sendMessage(e)}>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Name</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            name="name"
            className={errors.name
              ? "w-full  border border-red-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500" : "w-full  border dark:border-five border-six rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm mb-1 block">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
            className={errors.email
              ? "w-full  border border-red-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500" : "w-full  border dark:border-five border-six rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="text-sm mb-1 block">Message</label>
          <textarea
            ref={messageRef}
            rows={4}
            name="message"
            placeholder="Enter your message"
            className={errors.message
              ? "w-full  border border-red-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500" : "w-full  border dark:border-five border-six rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary"}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
        </div>

        {/* Services */}
        <div className="mb-6">
          <label className="text-sm mb-2 block font-bold">Services</label>
          <div className="space-y-3 md:grid md:grid-cols-2">
            {servicesList.map((service) => (
              <label
                key={service}
                className={`flex items-center gap-2 text-sm cursor-pointer ${errors.services ? 'text-red-400' : 'text-gray-300'}`}
              >
                <input
                  type="checkbox"
                  name="service"
                  checked={services.includes(service)}
                  onChange={() => toggleService(service)}
                  className="peer appearance-none w-6 h-6 border-2 dark:border-five border-six rounded-lg bg-transparent 
                    checked:bg-primary checked:border-primary checked:after:content-['✓'] transition-all duration-200 text-center"
                />
                {service}
              </label>
            ))}

          </div>

        </div>

        {/* Button */}
        <button
          className="w-full bg-primary py-2 rounded-full font-semibold hover:opacity-90 transition text-white"
          type="submit">
          Send
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        success={isSuccess}
      />
    </div>
  );
};

export default ContactForm;
