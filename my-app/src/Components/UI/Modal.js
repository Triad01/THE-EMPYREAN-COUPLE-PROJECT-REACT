import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      show() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="w-2/3 md:w-1/3 mx-auto bg-stone-500 mt-20 p-8 pb-16 backdrop:bg-stone-900/90  rounded-md shadow-sm"
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
