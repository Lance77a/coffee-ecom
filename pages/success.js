import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { fetcher } from '@/lib/utils';

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();

  const { clearCart } = useShoppingCart();

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      clearCart();
    }
  }, [data]);

  return (
    <div className="">
      {error ? (
        <div className="">
          <p className="">Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div className="">
          <p className="">Loading...</p>
        </div>
      ) : (
        <div className="">
          <h2 className="">
            <span>Thanks for your order!</span>
          </h2>
          <p className="">Check your inbox for the receipt.</p>
        </div>
      )}
    </div>
  );
};

export default Success;