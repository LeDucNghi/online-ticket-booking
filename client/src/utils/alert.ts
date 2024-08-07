import { Alert } from "../models";
import { toast } from "react-toastify";

export const alert = (params: Alert) => {
  return toast(params.content, {
    position: params.position,
    autoClose: params.autoClose ? params.autoClose : 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: params.theme ? params.theme : "dark",
    type: params.type,
  });
};
