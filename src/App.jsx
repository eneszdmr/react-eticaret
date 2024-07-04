import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import PageContainer from "./container/PageContainer";

function App() {
  return (
    <div>
      <PageContainer>
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  );
}

export default App;
