import { createContext, useState } from "react";


export const CropContext = createContext(null);

export default function CropContextProvider({ children }) {
    const [CropResult, setCropResult] = useState(null);
    const [FertilizerResult,setFertilizerResult]=useState(null)
    const [Picture,setPicture]=useState(null)
    return (
        <CropContext.Provider
            value={{
                CropResult,
                FertilizerResult,
                setCropResult,
                setFertilizerResult,
                Picture,
                setPicture
            }}
        >
            {children}
        </CropContext.Provider>
    );
}