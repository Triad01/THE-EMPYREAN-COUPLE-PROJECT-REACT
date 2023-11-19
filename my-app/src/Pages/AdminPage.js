import { useState } from "react";
import SearchBar from "../Components/UI/SearchBar";
import Card from "../Components/UI/Card";
import Order from "../Components/Orders/Order";
import PageCount from "../Components/UI/PageCount";

let DUMMY_ORDERS = [
  {
    id: "#adaoif",
    name: "Brendan Criag",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$500",
    payment_method: "credit card",
    order_status: "Delivered",
  },
  {
    id: "#aadlmd",
    name: "Kathryn Mckain",
    date: "10th Feb, 2023",
    payment_status: "Awaiting Authorization",
    total: "$100",
    payment_method: "Master card",
    order_status: "Processing",
  },
  {
    id: "#fgfasd",
    name: "Joseph Benson",
    date: "4th Dec, 2011",
    payment_status: "Payment Failed",
    total: "$700",
    payment_method: "visa card",
    order_status: "Cancelled",
  },
  {
    id: "#adfdld",
    name: "Chigboo Goodluck",
    date: "4th Apr, 2012",
    payment_status: "Awaiting Authorization",
    total: "$200",
    payment_method: "virtual card",
    order_status: "Processing",
  },
  {
    id: "#fgfagv",
    name: "Oleg vikorigh",
    date: "4th Nov, 2023",
    payment_status: "Paid",
    total: "$200",
    payment_method: "visa card",
    order_status: "Shipped",
  },
  {
    id: "#adfdatr",
    name: "Uchechukwu Mary",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$900",
    payment_method: "virtual card",
    order_status: "Delivered",
  },
  {
    id: "#fgfagv",
    name: "Oleg vikorigh",
    date: "4th Nov, 2023",
    payment_status: "Payment Failed",
    total: "$200",
    payment_method: "visa card",
    order_status: "Cancelled",
  },
  {
    id: "#adfdatr",
    name: "Opara Jerome",
    date: "4th Oct, 2006",
    payment_status: "Paid",
    total: "$900",
    payment_method: "virtual card",
    order_status: "Shipped",
  },
];

const AdminPage = () => {
  const [orders, setOrders] = useState(DUMMY_ORDERS);

  const selectedYearHandler = (selected_status) => {
    console.log(selected_status);
    const filtered_orders = DUMMY_ORDERS.filter((order) => {
      return order.order_status === selected_status;
    });
    setOrders(filtered_orders);
  };
  return (
    <Card>
      <SearchBar onSelectedStatus={selectedYearHandler} />
      <Order DUMMY_ORDERS={orders} />
      <PageCount />
    </Card>
  );
};

export default AdminPage;
