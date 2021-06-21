import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// типизация хука получения стейта из redux
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;