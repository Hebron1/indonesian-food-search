import {Select, SelectItem} from "@heroui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductId } from "../features/produk/productSlicer"

export const SelectorIcon = (props) => {

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};

export const indomie = [
  {key: "0089686120714", label: "Fried noodles Mi Goreng"},
  {key: "0089686010947", label: "Indomie goreng"},
  {key: "8994963002824", label: "Noodles Chicken"},
  {key: "0089686041705", label: "Mie Indomie jumbo goreng"},
  {key: "0089686170924", label: "Indomie Goreng"},
  {key: "0089686170733", label: "Mi goreng Fried Noodles "},
  {key: "0089686040098", label: "Indomie Tori Miso"},
  {key: "0089686180633", label: "Indo mie Fried noodles"},
  {key: "0089686011036", label: "Mie goreng pedas"},
  {key: "0089686043051", label: "Indomie Rasa Coto Makassar"},
  {key: "0089686004342", label: "Mi instan rasa soto lamongan"},
  {key: "0089686171907", label: "Instant noodles"},
  {key: "0089686010824", label: "Indomie Mi Goreng"},
  {key: "0089686170795", label: "mi goreng fried noodles "},
  {key: "0089686060027", label: "Pop Mie Rasa Ayam"},
  {key: "0089686043433", label: "Indomie Goreng Ayam Geprek"},
  {key: "0089686010527", label: "Indomie Kari Ayam"},
  {key: "0089686060126", label: "Pop Mie Baso"},
  {key: "0089686041767", label: "Indomie Goreng Jumbo Ayam Panggang"},
  {key: "8994963003876", label: "Indomie Mi Goreng Fried Noodles"},
  {key: "0089686010343", label: "Indomie Soto Mie"},
  {key: "0089686040647", label: "Mi kriting"},
  {key: "0089686010046", label: "Indomie Ayam Spesial"},
  {key: "0089686180626", label: "Indomie Mi Goreng Original"},
  {key: "5016369043904", label: "Indomie Mi Goreng Aceh"},
  {key: "0089686043648", label: "Indomie goreng ayam pop"},
  {key: "0089686910384", label: "Indomie Soto Spesial"},
  {key: "0089686043419", label: "Indomie soto lamongan khas jawa timur"},
  {key: "8888327831130", label: "Gaga mie kuah"},
  {key: "0089686011692", label: "INDOMIE RASA SOTO BANJAR"},
  {key: "0089686182033", label: "Indomie Soto Flavour"},
  {key: "0089686171648", label: "Indomie - 80g"},
  {key: "0089686010107", label: "Indomie Kuah Kaldu Ayam"},
  {key: "0089686043495", label: "Indomie seblak jaletot"},
  {key: "0089686910193", label: "Indomie - 75g"}
];

export default function SelectProducts() {
  
  const dispatch = useDispatch();
  const [selectNoodle, setSelectNoodle] = useState("");
  let productSelector = useSelector(state => state.product.item)

  function RouteValue(e) {

    try {
      dispatch(setProductId(e.target.value))
      console.log(selectNoodle)
    } catch (error) {
      console.log('cannot get info', error)
    }
  }
  
  return (
    <Select
      disableSelectorIconRotation
      className="max-w-xs shadow-md"
      label="Favorite Noodles"
      labelPlacement="outside"
      placeholder="Select Noodles"
      selectorIcon={<SelectorIcon />}
      value={productSelector}
      onChange={RouteValue}
    >
      {productSelector.map((mie) => (
        <SelectItem key={mie.key} onChange={() => setSelectNoodle(mie.key)}>{mie.label}</SelectItem>
      ))}
    </Select>
  );
}
