import { getProducts } from '@/actions/get-products';
import ProductsList from '@/components/product-list';

import Searchbar from './_components/searchbar';
import SortBy from './_components/sort-by';

interface SearchPageProps {
  searchParams: {
    q: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const products = getProducts({
    ...searchParams
  });

  return (
    <>
      <Searchbar />
      <div className="w-full flex justify-end px-14">
        <SortBy />
      </div>
      <ProductsList items={products} />
    </>
  );
};

export default SearchPage;
