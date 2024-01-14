"use client";
import { Button } from "./Button";
import OrderSummary from "./OrderSummary";

interface IProps {
  summaryData: IFormInputs | null;
  buttonText: string;
  buttonClickCallback?: () => void;
}

const Modal = ({ summaryData, buttonText, buttonClickCallback }: IProps) => {
  return (
    <div className="fixed inset-0 z-50 px-6 py-10">
      <div className="bg-dark-grey-blue opacity-75 -z-10 absolute inset-0"></div>
      <div className="max-w-[540px] mx-auto bg-white rounded-lg overflow-hidden">
        <div>
          <h3 className="font-fraunces text-h3 p-6 bg-dark-grey-blue text-white">
            Order Summary
          </h3>
        </div>
        <OrderSummary data={summaryData} />
        <div className="px-6 pb-6 grid gap-6">
          <p className="font-barlow text-body text-dark-grey-blue">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <Button onClick={buttonClickCallback ?? undefined}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
