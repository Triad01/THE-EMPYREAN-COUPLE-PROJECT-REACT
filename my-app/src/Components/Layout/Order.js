import classes from "./Order.module.css";
// import { useState } from "react";
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

const Order = () => {
  // const [orders, setOrders] = useState(DUMMY_ORDERS)

  const find_payment_status_style = (payment_status) => {
    if (payment_status === "Paid") {
      return classes.paid;
    } else if (payment_status === "Payment Failed") {
      return classes.fail;
    } else {
      return classes.await;
    }
  };
  const find_order_status_style = (order_status) => {
    if (order_status === "Delivered") {
      return classes.paid;
    } else if (order_status === "Cancelled") {
      return classes.fail;
    } else if (order_status === "Processing") {
      return classes.await;
    } else {
      return classes.shipped;
    }
  };
  return (
    <div className={classes.header}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Order Id</th>
            <th>Billing Name</th>
            <th>Date</th>
            <th>Payment Status</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Order Status</th>
          </tr>
        </thead>
        {DUMMY_ORDERS.map((val, key) => {
          return (
            <tbody key={key}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>
                  {val.date}
                  <span>04:19 pm</span>
                </td>
                <td className={find_payment_status_style(val.payment_status)}>
                  {val.payment_status}
                </td>
                <td>{val.total}</td>
                <td>{val.payment_method}</td>
                <td className={find_order_status_style(val.order_status)}>
                  {val.order_status}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Order;
