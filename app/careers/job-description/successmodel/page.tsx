"use client";

import { FaCheckCircle } from "react-icons/fa";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 z-500000000 flex items-center justify-center backdrop-blur-sm px-3 sm:px-4">
      <div
        className="
          bg-[var(--color-2)]
          rounded-2xl
          p-5 sm:p-8
          text-center
          w-full sm:w-[90%]
          max-w-sm
          border-[1px]
          shadow-2xl
        "
      >
       <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
        </div>
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
