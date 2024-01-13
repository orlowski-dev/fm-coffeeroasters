"use client";
import Accordion from "./Accordion";
import SelectionOption from "./SelectionOption";
import OrderSummary from "./OrderSummary";
import { Button } from "./Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback, useReducer, useState } from "react";

interface IReducerStates {
  preferences: boolean;
  beanType: boolean;
  quantity: boolean;
  grindOption: boolean;
  deliveries: boolean;
}

// type TReducerActions = {
//   // type: "preferences" | "beanType" | "quantity" | "grindOption" | "deliveries";
//   type: string;
//   payload?: boolean;
// };

type TReducerActions = {
  // type: "preferences" | "beanType" | "quantity" | "grindOption" | "deliveries";
  type: string;
  payload?: boolean;
};

const reducer = (states: IReducerStates, action: TReducerActions) => {
  switch (action.type) {
    case "preferences":
      return { ...states, preferences: action.payload ?? !states.preferences };
    case "beanType":
      return { ...states, beanType: action.payload ?? !states.beanType };
    case "quantity":
      return { ...states, quantity: action.payload ?? !states.quantity };
    case "grindOption":
      return { ...states, grindOption: action.payload ?? !states.grindOption };
    case "deliveries":
      return { ...states, deliveries: action.payload ?? !states.deliveries };
    default:
      throw new Error("Unknown reducer action!");
  }
};

const accordionsNav: { title: string; name: string }[] = [
  {
    title: "Peferences",
    name: "preferences",
  },
  {
    title: "Bean Type",
    name: "beanType",
  },
  {
    title: "Quantity",
    name: "quantity",
  },
  {
    title: "Grind Option",
    name: "grindOption",
  },
  {
    title: "Deliveries",
    name: "deliveries",
  },
];

const CreatePlanForm = () => {
  const [isCapsuleType, setIsCapsuleType] = useState(false);
  const [formData, setFormData] = useState<IFormInputs | null>(null);
  const [accordionsStates, accordionsDispatch] = useReducer(reducer, {
    preferences: false,
    beanType: false,
    quantity: false,
    grindOption: false,
    deliveries: false,
  });
  const { register, handleSubmit, watch } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  const accordionCallback = useCallback((name: string) => {
    accordionsDispatch({ type: name });
  }, []);

  watch((data) => {
    data.preferences === "Capsule"
      ? setIsCapsuleType(true)
      : setIsCapsuleType(false);

    setFormData(data);
  });

  return (
    <div className="grid lg:grid-cols-create-form gap-32 p-6 my-28 max-w-[730px] mx-auto lg:max-w-[1110px]">
      <div className="hidden lg:block">
        <ul>
          {accordionsNav.map((elem, index: number) => (
            <li
              key={index}
              onClick={() => accordionsDispatch({ type: elem.name })}
              className="py-4 border-b-[1px] border-grey [&:last-child]:border-b-0 cursor-pointer flex items-center gap-8 flex-wrap font-fraunces text-h4 text-grey opacity-80 transition-colors hover:text-dark-grey-blue select-none"
            >
              <span>{index < 10 ? `0${index + 1}` : index}</span>
              <span>{elem.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
          <Accordion
            title="How do you drink your coffee?"
            openState={accordionsStates.preferences}
            onClickCallback={accordionCallback}
            name="preferences"
          >
            <SelectionOption
              title="Capsule"
              text="Compatible with Nespresso systems and similar brewers"
              value="Capsule"
              {...register("preferences", { required: true })}
            />
            <SelectionOption
              title="Filter"
              text="For pour over or drip methods like Aeropress, Chemex, and V60"
              value="Filter"
              {...register("preferences", { required: true })}
            />
            <SelectionOption
              title="Espresso"
              text="Dense and finely ground beans for an intense, flavorful experience"
              value="Espresso"
              {...register("preferences", { required: true })}
            />
          </Accordion>
          <Accordion
            title="What type of coffee?"
            openState={accordionsStates.beanType}
            onClickCallback={accordionCallback}
            name="beanType"
          >
            <SelectionOption
              title="Single Origin"
              text="Distinct, high quality coffee from a specific family-owned farm"
              value="Single Origin"
              {...register("beanType", { required: true })}
            />
            <SelectionOption
              title="Decaf"
              text="Just like regular coffee, except the caffeine has been removed"
              value="Decaf"
              {...register("beanType", { required: true })}
            />
            <SelectionOption
              title="Blended"
              text="Combination of two or three dark roasted beans of organic coffees"
              value="Blended"
              {...register("beanType", { required: true })}
            />
          </Accordion>
          <Accordion
            title="How much would you like"
            openState={accordionsStates.quantity}
            onClickCallback={accordionCallback}
            name="quantity"
          >
            <SelectionOption
              title="250g"
              text="Perfect for the solo drinker. Yields about 12 delicious cups."
              value="250g"
              {...register("quantity", { required: true })}
            />
            <SelectionOption
              title="500g"
              text="Perfect option for a couple. Yields about 40 delectable cups."
              value="500g"
              {...register("quantity", { required: true })}
            />
            <SelectionOption
              title="1000g"
              text="Perfect for offices and events. Yields about 90 delightful cups."
              value="1000g"
              {...register("quantity", { required: true })}
            />
          </Accordion>
          <Accordion
            title="Want us to grind them?"
            disabled={isCapsuleType}
            openState={accordionsStates.grindOption}
            onClickCallback={accordionCallback}
            name="grindOption"
          >
            <SelectionOption
              title="Wholebean"
              text="Best choice if you cherish the full sensory experience"
              value="Wholebean"
              {...register("grindOption", { required: !isCapsuleType })}
            />
            <SelectionOption
              title="Filter"
              text="For drip or pour-over coffee methods such as V60 or Aeropress"
              value="Filter"
              {...register("grindOption", { required: !isCapsuleType })}
            />
            <SelectionOption
              title="Cafetiére"
              text=" Course ground beans specially suited for french press coffee"
              value="Cafetiére"
              {...register("grindOption", { required: !isCapsuleType })}
            />
          </Accordion>
          <Accordion
            title="How often should we deliver?"
            openState={accordionsStates.deliveries}
            onClickCallback={accordionCallback}
            name="deliveries"
          >
            <SelectionOption
              title="Every week"
              text="$7.20 per shipment. Includes free first-class shipping."
              value="Every week"
              {...register("deliveries", { required: true })}
            />
            <SelectionOption
              title="Every 2 weeks"
              text="$9.60 per shipment. Includes free priority shipping."
              value="Every 2 weeks"
              {...register("deliveries", { required: true })}
            />
            <SelectionOption
              title="Every month"
              text="$12.00 per shipment. Includes free priority shipping."
              value="Every month"
              {...register("deliveries", { required: true })}
            />
          </Accordion>
          <OrderSummary data={formData} withTitle dark />
          <div className="flex justify-center lg:justify-end">
            <Button type="submit">Create my plan!</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlanForm;
