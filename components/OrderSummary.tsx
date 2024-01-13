import { useState } from "react";

interface IProps {
  withTitle?: boolean;
  data: IFormInputs | null;
  dark?: boolean;
}

const OrderSummary = ({ withTitle, data, dark }: IProps) => {
  return (
    <section
      className={`p-6 rounded-lg grid gap-6 ${
        dark ? "bg-dark-grey-blue" : "bg-white"
      }`}
    >
      {withTitle ? (
        <h2 className={`font-barlow text-body uppercase text-grey`}>
          Order summary
        </h2>
      ) : undefined}
      <p
        className={`font-fraunces [&>span]:text-dark-cyan text-h4 ${
          dark ? "text-white" : "text-dark-grey-blue"
        }`}
      >
        {"“"}I drink my coffee{" "}
        {data?.preferences === "Capsule" ? "using" : "as"}{" "}
        <span>
          {data?.preferences === "Capsule"
            ? "Capsules"
            : data?.preferences ?? "______"}
        </span>
        , with a <span> {data?.beanType ?? "______"}</span> type of bean.{" "}
        <span>{data?.quantity ?? "______"}</span>,{" "}
        {data?.preferences !== "Capsule" ? (
          data?.grindOption ? (
            <>
              ground ala <span>{data.grindOption}</span>,{" "}
            </>
          ) : (
            <>
              ground ala <span>______</span>,{" "}
            </>
          )
        ) : undefined}
        sent to me <span>{data?.deliveries ?? "______"}</span>.{'"'}
      </p>
    </section>
  );
};

export default OrderSummary;
