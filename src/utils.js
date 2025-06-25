export const getVehicleImageBasedOnSelection = (
    vehicleTypeSelected, 
    { sedan, suv, truck }
) => {
    if (!vehicleTypeSelected || vehicleTypeSelected === 'sedan') {
      return sedan;
    }
    if (vehicleTypeSelected === 'suv') {
      return suv;
    }
    if (vehicleTypeSelected === 'truck') {
      return truck;
    }
};