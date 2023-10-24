import ProductsList from '@/components/product-list';
import productsMock from '@/mock/data.json';

const DashboardPage = async () => {
  return (
    <div>
      <ProductsList items={productsMock.items} />
    </div>
  );
};

export default DashboardPage;
