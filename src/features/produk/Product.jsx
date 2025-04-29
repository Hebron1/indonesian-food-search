import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@heroui/react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axios";
import { useSelector } from "react-redux";
import SelectProducts from "../../select/SelectProducts";

export default function Product({toggleView}) {

    const productSelector = useSelector(state => state.product.id)

    const [values, setValues] = useState("")
    
        const getProduct = async () => {
            try {
                
                const response = await axiosInstance.get(`/product/${productSelector}.json`)
                const productValue = response.data.product;
                setValues(productValue)
            } catch (error) {
                console.log(error)   
            }
        }
    
        useEffect(() => {
            getProduct()
        }, [productSelector])
        
        if (!values) {
            return <div>...Loading</div>
        }

  return (
    <>
    <SelectProducts />
    <div className="w-full p-10"> {/* className="max-w-[400px]" */}
      <div className="flex gap-3 flex-col">
        <h1>Noddles</h1>
        <div className="flex flex-row items-start space-x-4">
        <Image
          alt="heroui logo"
          radius="sm"
          src={values.image_front_small_url ? values.image_front_small_url : "https://images.openfoodfacts.org/images/products/008/968/601/1692/front_id.3.full.jpg"}
          height={200}
          width={200}
        />
        {/* indomie title */}
        <div>   
        <div className="pl-2 font-semibold text-4xl">
          {values.product_name_en || values.product_name_id || values.product_name_fr}
          {/* {values.product_quantity} */}

        </div>
        <div className="text-xs mx-auto text-left max-w-[500px] pl-3 m-3">
        <p className="font-semibold">Ingredient: </p>
        <p>
        {values.ingredients_text || values.ingredients_text_en
      ? values.ingredients_text || values.ingredients_text_en
      : <p>The ingredient has not been added.</p>}
        </p>
        </div>
        
        </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-md">Categories:</p>
          <p className="text-small text-default-500 max-w-[600px]">
          {
           values.categories && values.categories.length > 0 ? 
            JSON.stringify(values.categories).replaceAll(",", ", ") :
            <p>Categories has not been added.</p>
          }
          </p>
          <p>Brand:</p>
          <p className="text-small text-default-500">{values.brands}</p>
        </div>
      </div>
      <Divider />
      <div>
        <p>Make beautiful websites regardless of your design experience.</p>
      </div>
      <Divider />
      <div className="items-center text-center pt-10">
        <Button onPress={toggleView}>Back</Button>
      </div>
    </div>
    </>
    
  );
}