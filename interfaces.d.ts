interface ICardWIthImageProps {
  imageSrc: string;
  title: string;
  text: string;
}

interface ICardWithNumsProps {
  num: string;
  title: string;
  text: string;
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
