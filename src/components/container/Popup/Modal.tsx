import React from 'react';
import Button from '../../ui/Button';
import { useTheme } from '../../../context/ThemeContext';

// Menentukan tipe data untuk props modal
interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  success: boolean;
}



const Modal: React.FC<SuccessModalProps> = ({ isOpen, onClose, success }) => {
  const { theme } = useTheme();
  if (!isOpen) return null;
  
   const IconSrc = success 
  ? (theme === 'light' ? "/Message_Light.svg" : "/Message_dark.svg")
  : (theme === 'light' ? "/Message_Failed_Light.svg" : "/Message_Failed_Dark.svg");

  return (

    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

     
      <div className="relative dark:bg-five  rounded-xl border dark:border-five bg-white border-six md:p-14 w-full max-w-[550px] shadow-2xl text-center transform transition-all duration-300 scale-100 opacity-100">
        
        <div className="flex justify-center mb-10">
          <div className="relative">
            <img 
              src={IconSrc}
              alt="Message"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="dark:bg-black p-4">

        <h3 className="text-[18px] font-bold mb-4">
          {success ? "Message Received!" : "Oops! Something went wrong."}
        </h3>
        <p className="text-four text-[14px] leading-relaxed mb-10 px-4">
          {success ? "Thanks for reaching out — we'll get back to you as soon as possible." : "We couldn’t send your message. Please try again or check your connection."}
        </p>

        <Button variant="primary" className="w-full rounded-2xl" onClick={()=> onClose()}>
            {success ? "Back to Home" : "Try Again"}
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;