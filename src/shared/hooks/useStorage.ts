import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { selectStorage } from "../functions/storage";

const storage = selectStorage('dont-forget-storage');

export function useStorage<T>(defaultvalue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => { 
        return <T>storage.get() || defaultvalue 
    })
    
    useEffect(() => {
        storage.set(value);
    }, [value])

    return [value, setValue];
}