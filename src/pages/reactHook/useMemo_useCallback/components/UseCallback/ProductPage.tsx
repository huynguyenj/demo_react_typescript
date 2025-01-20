import { useCallback } from 'react';
import ShippingForm from './ShippingForm';

interface ProductPageProps {
  productId: number;
  referrer: string;
  theme: string;
}

export default function ProductPage(props: ProductPageProps) {
  const { productId, referrer, theme } = props;

  function handleSubmit(orderDetails: Record<string, any>) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  const memoizedHandleSubmit = useCallback(function handleSubmitMemoized(orderDetails: Record<string, any>) {
    handleSubmit(orderDetails);
  }, [productId, referrer]);

  return (
    <div className={`div ${theme}`}>
      <ShippingForm onSubmit={memoizedHandleSubmit} />
    </div>
  );
}

function post(url: string, data: any) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}
