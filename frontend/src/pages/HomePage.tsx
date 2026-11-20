import landingImage from '../assets/landing.png'
import burgerImage from '../assets/1-Burger.png'
import steakImage from '../assets/2-Steak.png'
import pizzaImage from '../assets/3-Pizza.png'
import sandwichImage from '../assets/4-Sandwich.png'
import tacoImage from '../assets/5-Taco.png'
import cheesecakeImage from '../assets/6-Cheesecake.png'
import skewerImage from '../assets/7-Skewer.png'
import chichkenImage from '../assets/8-Chicken.png'
import ramenImage from '../assets/9-Ramen.png'
import friesImage from '../assets/10-Fries.png'
import bologneseImage from '../assets/11-Bolognese.png'
import sushiImage from '../assets/12-Sushi.png'

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Find it. Order it. Enjoy it.
                </h1>
                <span className="text-xl">
                    Your next great meal starts here. Just a click away!
                </span>
            </div>
            <span className="text-xl text-center text-orange-500">
                More choices. More flavors. More to love.
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                <img src={burgerImage} className="w-full h-full object-cover rounded-lg" />
                <img src={steakImage} className="w-full h-full object-cover rounded-lg" />
                <img src={pizzaImage} className="w-full h-full object-cover rounded-lg" />
                <img src={sandwichImage} className="w-full h-full object-cover rounded-lg" />
                <img src={tacoImage} className="w-full h-full object-cover rounded-lg" />
                <img src={cheesecakeImage} className="w-full h-full object-cover rounded-lg" />
                <img src={skewerImage} className="w-full h-full object-cover rounded-lg" />
                <img src={chichkenImage} className="w-full h-full object-cover rounded-lg" />
                <img src={ramenImage} className="w-full h-full object-cover rounded-lg" />
                <img src={friesImage} className="w-full h-full object-cover rounded-lg" />
                <img src={bologneseImage} className="w-full h-full object-cover rounded-lg" />
                <img src={sushiImage} className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
    )
}

export default HomePage;