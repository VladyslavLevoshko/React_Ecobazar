import Apple_pay_icon from "./Apple_pay_icon";
import Visa_pay_icon from "./Visa_pay_icon";
import Discover_pay_icon from "./Discover_pay_icon";
import MasterCard_icon from "./MasterCard_icon";
import Secure_payment_icon from "./Secure_payment_icon";

export default function Footer() {
    return (
        <div className=" bg-black">
            <div className=" ml-2 text-gray-400">Ecobazar eCommerce © 2021. All Rights Reserved</div>

            <div className=" ml-2 flex gap-2 items-center">
            <Apple_pay_icon/>
            <Visa_pay_icon/>
            <Discover_pay_icon/>
            <MasterCard_icon/>
            <Secure_payment_icon/>
            </div>
        </div>
    )
}