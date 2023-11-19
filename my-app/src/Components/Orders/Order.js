import classes from "./Order.module.css";

const Order = (props) => {
  //set styles class based on payment status
  const find_payment_status_style = (payment_status) => {
    if (payment_status === "Paid") {
      return classes.paid;
    } else if (payment_status === "Payment Failed") {
      return classes.fail;
    } else {
      return classes.await;
    }
  };
  //set style class based on order status
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
        {props.DUMMY_ORDERS.map((val, key) => {
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
