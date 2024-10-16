import { toast } from 'react-toastify';

export const notify = (message, type = "success") => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else {
    toast.info(message);
  }
};


<iframe src="https://maps.app.goo.gl/UXRkqAKXoXQPa5JFA" height="400"></iframe>