import { useContext } from "react";
import KioskContext from "../contexts/kioskProvider";

const useKiosk = () => {
    return useContext(KioskContext);
}

export default useKiosk;