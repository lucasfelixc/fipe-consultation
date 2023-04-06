import { toast } from 'react-toastify';

export const Toast = (message: string, type: 'error' | 'success' | 'info') => {
  return toast[type](message, {
    position: 'bottom-right',
    autoClose: type === 'info' ? 2000 : 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
