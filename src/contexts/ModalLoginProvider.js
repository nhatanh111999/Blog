import { createContext, useReducer } from "react";
import { ModalReducer } from "../reducers/ModalReducer";
export const ModalContext = createContext();

const ModalLoginProvider =({children})=>{
    const [isActive,dispatch] =useReducer(ModalReducer,false)

    const modalContextData={
        isActive,dispatch
    }
    return(
        <ModalContext.Provider value={modalContextData}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalLoginProvider;