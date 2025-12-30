"use client";

import { FaCheckCircle } from "react-icons/fa";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3 sm:px-4">
      <div
        className="
          bg-[var(--color-2)]
          rounded-2xl
          p-5 sm:p-8
          text-center
          w-full sm:w-[90%]
          max-w-sm
        "
      >
        <FaCheckCircle
          className="
            mx-auto
            text-4xl sm:text-5xl
            text-[var(--color-8)]
            mb-3 sm:mb-4
          "
        />

        <h3 className="text-base sm:text-lg font-semibold mb-2">
          Form Submitted Successfully
        </h3>

        <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6">
          We&apos;ll contact you soon.
        </p>

        <button
          onClick={onClose}
          className="
            bg-[var(--color-8)] text-[var(--color-2)]
            px-5 sm:px-6
            py-2 sm:py-2.5
            text-sm sm:text-base
            rounded-full
            hover:bg-[var(--color-7)]
            transition
          "
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
