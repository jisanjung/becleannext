import { REFERRAL_NUMBER_OF_SPOTS_REMAINING } from "@/constants";
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="wrapper px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-2">Keep Your Car's Shine for 8+ Years - VIP Ceramic Coating</h1>
        <p className="text-gray-500 text-center mb-4">Free pickup, same-day delivery, and premium ceramic protection that lasts.</p>
        <img
            src='/referral/before_after.png'
            className="rounded-2xl"
        />
        <ul className="my-6">
            <li className="flex items-center mb-2">
                <FaRegCheckCircle 
                    className="flex-shrink-0 mr-2 text-xl"
                    style={{ color: '#43BDD5' }}
                />
                <p>Pickup and Same Day Delivery (Harleysville + 50 Miles)</p>
            </li>
            <li className="flex items-center mb-2">
                <FaRegCheckCircle 
                    className="flex-shrink-0 mr-2 text-xl"
                    style={{ color: '#43BDD5' }}
                />
                <p>Bonus Glass Ceramic Coating</p>
            </li>
            <li className="flex items-center mb-2">
                <FaRegCheckCircle 
                    className="flex-shrink-0 mr-2 text-xl"
                    style={{ color: '#43BDD5' }}
                />
                <p>30 - Day Follow-Up (Spot Fix)</p>
            </li>
            <li className="flex items-center mb-2">
                <FaRegCheckCircle 
                    className="flex-shrink-0 mr-2 text-xl"
                    style={{ color: '#43BDD5' }}
                />
                <p>Premium Wash Paint Polishing</p>
            </li>
            <li className="flex items-center mb-2">
                <FaRegCheckCircle 
                    className="flex-shrink-0 mr-2 text-xl"
                    style={{ color: '#43BDD5' }}
                />
                <p>5 Spots / Week</p>
            </li>
        </ul>
        <small className="text-center block text-orange-500 mb-1">Only {REFERRAL_NUMBER_OF_SPOTS_REMAINING} spots remaining</small>
        <a href="/book" className="button block text-center">
            Reserve My Spot
        </a>
    </section>
  )
}

export default Hero