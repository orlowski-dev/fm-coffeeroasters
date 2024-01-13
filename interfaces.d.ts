interface ICardWIthImageProps {
  imageSrc: string;
  title: string;
  text: string;
}

interface ICardWithNumsProps {
  num: string;
  title: string;
  text: string;
  darkVariant?: boolean;
  noButton?: boolean;
}

interface IHeadquartersCardProps {
  country: string;
  contact: string[];
  icon: {
    src: string;
    width: number;
    height: number;
  };
}

interface IFormInputs {
  preferences?: string;
  beanType?: string;
  quantity?: string;
  grindOption?: string;
  deliveries?: string;
}
