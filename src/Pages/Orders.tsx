import { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(data);
  }, []);

  return (
  <div className="orders-container">
    <h2>My Orders</h2>

    {orders.length === 0 ? (
      <p className="no-orders">You haven't placed any orders yet.</p>
    ) : (
      orders.map((order) => (
        <div key={order.id} className="order-card">
          {/* New Header Section */}
          <div className="order-header">
            <div className="order-info-group">
              <div>
                <span className="info-label">Date Placed</span>
                <span className="info-value">{order.date}</span>
              </div>
              <div>
                <span className="info-label">Total Amount</span>
                <span className="info-value">₦{order.total}</span>
              </div>
            </div>
            <div className="status-badge">{order.status}</div>
          </div>

          {/* Items Section */}
          <div className="order-items">
            {order.items.map((item: any, index: number) => (
              <div key={index} className="item-row">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))
    )}
  </div>
);
}
export default Orders;