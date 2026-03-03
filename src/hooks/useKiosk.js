import { useContext } from "react";
import KioskContext from "../contexts/KioskProvider";

const useKiosk = () => {
    return useContext(KioskContext);
}

export default useKiosk;