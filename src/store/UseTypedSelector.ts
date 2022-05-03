import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "./reducers/RootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
