import React, { useState,useEffect,useMemo } from "react";
import { toast } from "react-toastify";
import DataGridWrapper from "../../DataGrid/DataGridWrapper";
import MainLoader from '../../Loaders/MainLoader'
import formatDate from "../../../helpers/Common/DateFormatter";
import getAllOrders from "../../../helpers/APICalls/getAllOrders";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading,setLoading] = useState(false)
  const cachedOrders = useMemo(
    () =>
      orders?.map((order) => {
        return {
          ...order,
          products: order.products?.length,
          customerName: order?.user?.fullName,
          email: order?.user?.email,
          date: formatDate(order?.createdAt),
        };
      }),
    [orders]
  );

  useEffect(() => {
    getOrders();
  }, []);

  // Fetching Function

  async function getOrders() {
    setLoading(true)
    const orders = await getAllOrders();
    if (orders?.success) {
      setOrders(orders?.allOrders);
    } else {
      toast.error("Error while fetching orders");
    }
    setLoading(false)
  }

  const columns = [
    { field: "id", hide: true, width: 225 },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 225,
    },
    {
      field: "email",
      headerName: "Customer Email",
      width: 225,
    },
    {
      field: "products",
      headerName: "Total Products",
      width: 250,
    },
    {
      field: "amount",
      headerName: "Total Amount",
      width: 100,
    },
    {
      field: "transaction_id",
      headerName: "Transaction Id",
      width: 150,
    },
    {
      field: "status",
      headerName: "Current Status",
      width: 300,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Recieved", "Shipped", "Cancelled", "Delivered"],
    },
  ];

  return (
    <div>
      <MainLoader visible={loading}/>
      {cachedOrders && (
        <DataGridWrapper rows={cachedOrders} columns={columns}/>
      )}
    </div>
  );
};

export default AllOrders;
