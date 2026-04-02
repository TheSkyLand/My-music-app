import { productDto } from "@/src/dtos/product.dto"


const ShopPage = () => {
    


    const products = [
        {
            id: 1,
            name: "guitar",
            description: "test",
            cost: 299.99,
        },
        {
            id: 2,
            name: "guitar2",
            description: "test",
            cost: 459.99,
        }
    ]


    return (
        <div className="flex flex-col gap-4 p-4">




            {products.map((item, key) => (
                <div
                className="flex flex-col p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                key={key}
                >
                    <div className="text-xs text-slate-400" >id: {item.id}</div>
                    <div  className="font-bold text-slate-900" >name: {item.name}</div>
                    <div className="text-sm text-slate-600" >description: {item.description}</div>
                    <div className="font-mono font-semibold mt-2" >cost: {item.cost}$</div>
                </div>
            ))
            }

        </div >
    )
}


export default ShopPage