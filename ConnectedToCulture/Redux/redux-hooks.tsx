import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../Redux/Store";

export const useAppDispatch = (arg: AsyncThunkAction<void, void, {}>) => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;