import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ThankyouPage.css';
import { getOrderById } from '../../../services/orderService';
import { usePopup } from '../../../context/PopupContext';
const ThankyouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const orderID = new URLSearchParams(location.search).get('orderId');
  const [totalAmount, setTotalAmount] = useState(0);
  const { setPopup } = usePopup();
  useEffect(() => {
    if (!orderID) {
      navigate('/'); // Cái này chuyển hướng về trang chủ nếu không có ID";
      return;
    }
    const fetchOrderDetails = async () => {
      try {
        const response = await getOrderById(orderID);
        setOrderDetails(response);
        const total = response.data.orderProduct.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        setTotalAmount(total);
      } catch (error) {
        setPopup("❌ Lỗi khi lấy thông tin đơn hàng: " + (error?.response?.data?.message || "Không xác định"));
      } finally {
        setLoading(false);
      }
    }
    fetchOrderDetails();

  }, [orderID, navigate]);
  if (loading) {
    return <div className="loading">Đang tải thông tin đơn hàng...</div>;
  }
  return (
    <div className="thank-you-page">
      <div className="thank-you-message">
        <h1>Cảm ơn bạn đã mua hàng!</h1>
        <p>Đơn hàng của bạn đã được xác nhận. Chúng tôi sẽ xử lý ngay và gửi hàng tới bạn sớm nhất.</p>
      </div>

      <div className="order-summary">
        <h2>Thông tin đơn hàng</h2>
        <p><strong>Order Code:</strong> {orderDetails.data.orderID}</p>
        <p><strong>Total:</strong> ${totalAmount}</p>
        <p><strong>Order Status:</strong>{orderDetails.data.orderStatus}</p>
        <h3>Sản phẩm trong đơn hàng:</h3>
        <ul>
          {orderDetails.data.orderProduct.map((item, index) => (
            <li key={index}>{item.name} - {item.quantity} x ${item.price}</li>
          ))}
        </ul>
      </div>

      <div className="cta-buttons">
        <button onClick={() => navigate('/')}>Trở về trang chủ</button>
        <button onClick={() => navigate('/orders')}>Xem đơn hàng của tôi</button>
        <button onClick={() => navigate('/shop')}>Tiếp tục mua sắm</button>
      </div>
    </div>
  );
}

export default ThankyouPage;
