import React from "react";
import AddressItem from "./AddressItem";
import MainModal from "../Modal/MainModal";
import NewAddressForm from "./NewAddressForm";
import getAllAddress from "../../helpers/APICalls/getAllAddress";
import deleteAddress from "../../helpers/APICalls/deleteAddress";
import { useAuthUser } from "react-auth-kit";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import MainLoader from "../Loaders/MainLoader";

const AddressList = ({ isVisible, handleClose, setIsVisible,newAddressChange }) => {
  const initialFormValues = {
    fullName: "",
    email: "",
    addressType: "",
    addressLine1: "",
    contactNo: "",
    addressLine2: "",
    country: "",
    city: "",
    zipcode: "",
    landmark: "",
  };
  // States
  const [addresses, setAddresses] = useState([]);
  const [formDetails, setFormDetails] = useState(initialFormValues);
  const [apiFired, setApiFired] = useState(false);
  const [loader,setLoader] = useState(false);

  const auth = useAuthUser();
  const { _id } = auth();

  // Methods
  const handleAddressEdit = (id) => {
    setIsVisible(true);
    const findedAddress = addresses.find((address) => address?._id === id);
    setFormDetails(findedAddress);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleAddressDelete = async (id) => {
    try {
      const result = await deleteAddress({ id: id });
      if (result?.success) {
        fireAPIonAddressActions();
      } else {
        toast.error("Some Error Occured")
      }
    } catch (error) {
      alert(error);
    }
  };

  const fireAPIonAddressActions = () => {
    setApiFired(!apiFired);
  };

  // Effects
  useEffect(() => {
    getAddresses();
  }, [apiFired]);

  useEffect(() => {
    setFormDetails(initialFormValues)
  },[newAddressChange])

  // API Calls

  async function getAddresses() {
    try {
      setLoader(true)
      const result = await getAllAddress(_id);
      if (result?.success) {
        setAddresses(result?.result);
      } else {
        toast.error("Some Unknown Error Occured")
      }
      setLoader(false)
    } catch (error) {
      console.log(error);
      toast.error("Some Unknown Error Occured")
      setLoader(false)
    }
  }
  return (
    <div style={{minHeight:"500px"}}>
      <MainLoader visible={loader}/>
      {addresses &&
        addresses.map((address) => {
          return (
            <AddressItem
              key={address._id}
              Phone={address?.contactNo}
              _id={address._id}
              Landmark={address?.landmark}
              addressType={address?.addressType}
              handleEdit={handleAddressEdit}
              handleDelete={handleAddressDelete}
            />
          );
        })}
      {isVisible && (
        <MainModal
          isVisible={isVisible}
          handleClose={handleClose}
          ModalBody={
            <NewAddressForm
              handleCancel={handleCancel}
              key={formDetails?.addressType}
              formValues={formDetails}
              fireAPIonAddressActions={fireAPIonAddressActions}
              forUpdate={formDetails?.addressType === "" ? false : true}
            />
          }
        />
      )}
    </div>
  );
};

export default AddressList;
