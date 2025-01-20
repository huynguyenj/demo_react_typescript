import { memo, useState, FormEvent } from 'react';

interface ShippingFormProps {
  onSubmit: (orderDetails: Record<string, any>) => void;
}

function ShippingForm(props: ShippingFormProps) {
  const { onSubmit } = props;
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement; // Cast e.target to HTMLFormElement
    const formData = new FormData(formElement);
    const orderDetails = {
      ...Object.fromEntries(formData.entries()),
      count,
    };
    onSubmit(orderDetails);
  }

  function decreaseCount() {
    setCount(function (prevCount) {
      return Math.max(1, prevCount - 1);
    });
  }

  function increaseCount() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  return (
    <form className='shipping-form' onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label className='number-of-items-container label'>
        Number of items:
        <button className='button' type="button" onClick={decreaseCount}>–</button>
        {count}
        <button className='button' type="button" onClick={increaseCount}>+</button>
      </label>
      <label className='shipping-label label'>
        Street:
        <input className='input' name="street" placeholder='Enter street' />
      </label>
      <label className='shipping-label label'>
        City:
        <input className='input' name="city" placeholder='Enter city'/>
      </label> 
      <label className='shipping-label label'>
        Postal code:
        <input className='input' name="zipCode" placeholder='Enter Postal code' style={{marginBottom:"1rem"}}/>
      </label>
      <button className='button' type="submit">Submit</button>
    </form>
  );
}

export default memo(ShippingForm);
