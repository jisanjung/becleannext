import { action } from "easy-peasy";

export const globalState = {
    vehicleTypeSelected: null,
    glassCoatingSelected: null,
    dropOffSelected: null,
    setVehicleType: action((state, payload) => {
        state.vehicleTypeSelected = payload;
    }),
    setGlassCoatingSelection: action((state, payload) => {
        state.glassCoatingSelected = payload;
    }),
    setDropOffSelection: action((state, payload) => {
        state.dropOffSelected = payload;
    }),
};