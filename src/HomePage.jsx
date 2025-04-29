import { Card, CardBody, CardHeader } from "@heroui/react"
import { useDispatch } from "react-redux"
import { setProductId, setProductItems } from "./features/produk/productSlicer"
import { useState } from "react"

export default function HomePage({toggleView}) {
    
    const productItems = [
        {key: "0089686120714", label: "Fried noodles Mi Goreng", brands: "indomie"},
        {key: "0089686010947", label: "Indomie goreng", brands: "indomie"},
        {key: "8994963002824", label: "Noodles Chicken", brands: "indomie"},
        {key: "0089686041705", label: "Mie Indomie jumbo goreng", brands: "indomie"},
        {key: "0089686170924", label: "Indomie Goreng", brands: "indomie"},
        {key: "0089686170733", label: "Mi goreng Fried Noodles ", brands: "indomie"},
        {key: "0089686040098", label: "Indomie Tori Miso", brands: "indomie"},
        {key: "0089686180633", label: "Indo mie Fried noodles", brands: "indomie"},
        {key: "0089686011036", label: "Mie goreng pedas", brands: "indomie"},
        {key: "0089686043051", label: "Indomie Rasa Coto Makassar", brands: "indomie"},
        {key: "0089686004342", label: "Mi instan rasa soto lamongan", brands: "indomie"},
        {key: "0089686171907", label: "Instant noodles", brands: "indomie"},
        {key: "0089686010824", label: "Indomie Mi Goreng", brands: "indomie"},
        {key: "0089686170795", label: "mi goreng fried noodles ", brands: "indomie"},
        {key: "0089686060027", label: "Pop Mie Rasa Ayam", brands: "indomie"},
        {key: "0089686043433", label: "Indomie Goreng Ayam Geprek", brands: "indomie"},
        {key: "0089686010527", label: "Indomie Kari Ayam", brands: "indomie"},
        {key: "0089686060126", label: "Pop Mie Baso", brands: "indomie"},
        {key: "0089686041767", label: "Indomie Goreng Jumbo Ayam Panggang", brands: "indomie"},
        {key: "8994963003876", label: "Indomie Mi Goreng Fried Noodles", brands: "indomie"},
        {key: "0089686010343", label: "Indomie Soto Mie", brands: "indomie"},
        {key: "0089686040647", label: "Mi kriting", brands: "indomie"},
        {key: "0089686010046", label: "Indomie Ayam Spesial", brands: "indomie"},
        {key: "0089686180626", label: "Indomie Mi Goreng Original", brands: "indomie"},
        {key: "5016369043904", label: "Indomie Mi Goreng Aceh", brands: "indomie"},
        {key: "0089686043648", label: "Indomie goreng ayam pop", brands: "indomie"},
        {key: "0089686910384", label: "Indomie Soto Spesial", brands: "indomie"},
        {key: "0089686043419", label: "Indomie soto lamongan khas jawa timur", brands: "indomie"},
        {key: "8888327831130", label: "Gaga mie kuah", brands: "indomie"},
        {key: "0089686011692", label: "INDOMIE RASA SOTO BANJAR", brands: "indomie"},
        {key: "0089686182033", label: "Indomie Soto Flavour", brands: "indomie"},
        {key: "0089686171648", label: "Indomie - 80g", brands: "indomie"},
        {key: "0089686010107", label: "Indomie Kuah Kaldu Ayam", brands: "indomie"},
        {key: "0089686043495", label: "Indomie seblak jaletot", brands: "indomie"},
        {key: "0089686910193", label: "Indomie - 75g", brands: "indomie"}
      ]

      const dispatch = useDispatch()
      const [search, setSearch] = useState("")
      const [filterSearch, setFilterSearch] = useState(productItems)
      dispatch(setProductItems(productItems))

      const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase()
        setSearch(searchValue)
        console.log(searchValue)

        const filterNoodle = productItems.filter(item => 
            item.label.toLowerCase().includes(searchValue)
        )
        setFilterSearch(filterNoodle)
      }

      return (
        <>
        
        <header className="bg-gray-800 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
           
                <div className="flex-grow mx-4">
                    <div className="">
                        <input
                        onChange={handleSearch}
                            value={search}
                            type="text"
                            placeholder="Search..."
                            className="w-full py-2 px-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                       
                    </div>
                </div>

            </div>
     
        </header>

        <div className="max-h-screen h-full">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filterSearch.map((item) => {
            return (
                <div 
                    className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer h-full"
                    key={item.key}
                    onClick={() => dispatch(setProductId(item.key))}
                >
                    <Card className="py-4 flex-1">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold text-gray-500">{item.label}</p>
                            
                            <h4 className="font-bold text-lg text-gray-900">{item.brands}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 flex-1">
                        <button
                        onClick={toggleView}
                        className="text-white bg-blue-500 py-2 px-4 rounded-lg"
                        >
                        Switch View
                        </button>
                        </CardBody>
                    </Card>
                    </div>
                    )}
                )}
                </div>
            </div>
        </>
      )
}