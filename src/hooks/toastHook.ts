import { useEffect } from "react";
import { toast } from "react-toastify";

export function useErrorToast(error?: Error | null) {
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);
}
