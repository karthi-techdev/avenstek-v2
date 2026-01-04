"use client";
import { useState } from "react";

interface ApplyModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const ApplyModal = ({ onClose, onSuccess }: ApplyModalProps) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const about = (formData.get("about") as string)?.trim();
    const resume = formData.get("resume");

    const newErrors: Record<string, string> = {};

    if (!name) newErrors.name = "Name is required";
    else if (name.length < 3) newErrors.name = "Name must be at least 3 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Phone number must be 10 digits";

    if (!about) newErrors.about = "Required";
    else if (about.length < 20)
      newErrors.about = "Minimum 10 characters required";

    if (!resume || (resume as File).size === 0)
      newErrors.resume = "Resume is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSuccess();
      form.reset();
    }
  };

  return (
    <div className="fixed inset-0 z-5000000 flex items-center justify-center backdrop-blur-sm px-3 sm:px-4">
      <div
        className="
          bg-[var(--color-2)]
          w-full sm:w-[90%] max-w-md
          rounded-2xl
          p-4 sm:p-6
          relative
          max-h-[90vh]
          overflow-y-auto
          border-[1px]
          shadow-2xl
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute top-3 right-3 sm:top-4 sm:right-4
            text-[var(--color-20)]
            text-lg sm:text-xl
            p-1
          "
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
          Apply for Role
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

          <div>
            <input
              name="name"
              placeholder="Your Name"
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base"
            />
            <p className={`text-[var(--color-27)] text-xs text-left ${errors.name ? 'visible' : 'invisible'}`}>
              {errors.name || "Placeholder text"}
            </p>
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base"
            />
            <p className={`text-[var(--color-27)] text-xs text-left ${errors.email ? 'visible' : 'invisible'}`}>
              {errors.email || "Placeholder text"}
            </p>
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base"
            />
            <p className={`text-[var(--color-27)] text-xs text-left ${errors.phone ? 'visible' : 'invisible'}`}>
              {errors.phone || "Placeholder text"}
            </p>
          </div>

          <div>
            <textarea
              name="about"
              placeholder="Tell us about yourself"
              rows={3}
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base"
            />
            <p className={`text-[var(--color-27)] text-xs text-left ${errors.about ? 'visible' : 'invisible'}`}>
              {errors.about || "Placeholder text"}
            </p>
          </div>

          <div>
            <input
              name="resume"
              type="file"
              className="w-full border rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base"
            />
            <p className={`text-[var(--color-27)] text-xs text-left ${errors.resume ? 'visible' : 'invisible'}`}>
              {errors.resume || "Placeholder text"}
            </p>
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-[var(--color-8)] text-[var(--color-2)]
              py-2.5 sm:py-3
              text-sm sm:text-base
              rounded-full
              hover:bg-[var(--color-7)]
              transition
            "
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;