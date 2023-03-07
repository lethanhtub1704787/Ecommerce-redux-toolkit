export type AddressProps = {
  id: string;
  location: string;
  phoneNumber: number;
  address: string;
  defaultAddress: boolean;
};

export type Props = {
  item: AddressProps;
  isSelected: boolean;
  onPressSelectAdress: () => void;
};
