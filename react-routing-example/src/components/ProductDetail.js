/* 제품 상세 페이지 */
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function ProductDetail() {
    const {id} = useParams(); // URL의 파라미터를 가져옴
    const navigate = useNavigate();
  return (
    <div>
        <h1>📦 Product Detail</h1>
        <p>Showing details for product ID:{id}</p>
        <button onClick={()=> navigate('/products')}>Back to Products</button>
    </div>
  );
}

export default ProductDetail