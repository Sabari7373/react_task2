import { useState } from "react";
import Card from "./Carts"
import { Cards } from "./Cards";
import { Nav } from "./Nav";
function Home() {
    const [cart, setCart] = useState([])
    const [data, setdata] = useState(
        [
            {
                id: 1,
                image: "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg?w=1380&t=st=1662619667~exp=1662620267~hmac=ab92e5172d11733aa4a46e23f3ae197e2fa14a3e17e810ef4c0a9ce03977cd24",
                name: "Noodles",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $80.00",
                isDisabled: false,
            },
            {
                id: 2,
                image: "https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22958.jpg?w=1380",
                name: "Masala dosa",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $80.00",
                isDisabled: false,
            },
            {
                id: 3,
                image: "https://img.freepik.com/premium-photo/south-indian-breakfast-recipe-idly-idli-rice-cake-served-with-coconut-chutney-sambar-selective-focus_466689-9815.jpg",
                name: "Idly",
                rating: "⭐⭐⭐⭐⭐",
                price: "$50.00 $25.00",
                isDisabled: false,
            },
            {
                id: 4,
                image: "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76134.jpg?w=1380&t=st=1662620259~exp=1662620859~hmac=2be4a5366aa6516bb3448dce5cc180c9f46767c4eba92dfd7e13bfc4109963ff",
                name: "Aloo paratha",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00",
                isDisabled: false,
            },
            {
                id: 5,
                image: "https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=1380&t=st=1662620332~exp=1662620932~hmac=0401a143a30049adc0b200456d68784de2d9b7373f4510e2047096318366f91f",
                name: "Chiken biriyani",
                rating: "",
                price: "$40.00 - $80.00",
                isDisabled: false,
            },
            {
                id: 6,
                image: "https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75198.jpg?w=1380&t=st=1662620601~exp=1662621201~hmac=b3df6446328505c4b91937cd2b13915b0c9e046cfc3cc60e7a20f6b6094363af",
                name: "sambar rice",
                rating: "⭐⭐⭐",
                price: "$50.00 $25.00",
                isDisabled: false,
            },
            {
                id: 7,
                image: "https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74696.jpg?w=1380&t=st=1662620643~exp=1662621243~hmac=72ea326365dcc66c032e04495870cc55c045c11dbf0bd3bb7cc9a7ba24e49755",
                name: "Freid rice",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $80.00",
                isDisabled: false,
            },
            {
                id: 8,
                image: "https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74294.jpg?w=1380&t=st=1662620714~exp=1662621314~hmac=5d1ed781fa33638c6495313c584cddb224084bf43077ced53a5f430b7b8810c1",
                name: "Misal Pav",
                rating: "⭐⭐⭐⭐",
                price: "$40.00",
                isDisabled: false,
            },
        ]
    )
    const addToCart = (item, id) => {
        let temp = data
        temp[id].isDisabled = true
        setCart([...cart, item])
        setdata(temp)
    }
    const removeCart = (item) => {
        setCart(cart.filter((x) => x !== item));
        let index = item.id - 1
        let temp = data
        temp[index].isDisabled = false
        setdata(temp)
    }
    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row nav-row">
                        <Nav cart={cart} />
                        <Card removeCart={removeCart} cart={cart} setCart={setCart} data={data} setdata={setdata} />
                    </div>
                    <Cards data={data} addToCart={addToCart} />
                </div>
            </div>
        </>
    )
}
export default Home;