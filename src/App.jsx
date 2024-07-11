import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import { Sidebar } from 'primereact/sidebar';
import { calculateTotalAmount, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [])
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Sidebar className="sidebar" visible={drawer} position="right" onHide={() => dispatch(setDrawer())}>
          {products && products.map((product) => {
            return (
              <div>
                <div className="flex-row" style={{ padding: "20px" }}>
                  <img style={{ marginRight: "10px" }} src={product.image} alt="" width={50} height={50} />
                  <p style={{ width: "350px" }}>{product.title} ({product.count})</p>
                  <p>{product.price}</p>
                </div>
              </div>
            )
          })}
          <h2>toplam tutar: {totalAmount}</h2>
        </Sidebar>
      </PageContainer>
    </div>
  );
}

export default App;
