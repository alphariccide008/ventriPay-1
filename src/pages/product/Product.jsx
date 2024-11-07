import { trustedIcons } from "../../data";
import heroImg from "../../assets/images/heroImg.png";
import Onboarding from "../../assets/images/Onboarding.png";
import Dashboard from "../../assets/images/Dashboard.png";
import MobileCardService from "../../assets/images/MobileCardService.png";
import virtualCardImage from "../../assets/images/virtualCardImage.png";
import fundTransferImage from "../../assets/images/fundTransferImage.png";
import dataSecurityImage from "../../assets/images/dataSecurityImage.png";
import currencyExchangeImage from "../../assets/images/currencyExchangeImage.png";
import customerServiceImage from "../../assets/images/customerServiceImage.png";
import iconTransfer from "../../assets/icons/iconTransfer.png";
import iconAccount from "../../assets/icons/iconAccount.png";
import iconAirtime from "../../assets/icons/iconAirtime.png";
import PartnersCard from "../../components/PartnersCard";
import { sectionImg } from "../../assets/images";

const Product = () => {
  return (
    <section className="pt-20 px-8 w-full flex flex-col items-center justify-center">
      <div className="w-full mx-auto flex items-center justify-center justify-items-center">
        <div className="px-10 text-center lg:text-left lg:pr-10 mb-10 lg:mb-0 items-center justify-items-center justify-center">
          <h1 className="text-3xl font-bold text-center lg:text-left text-gray-900 mb-4">
            Shaping The Future Of Cross Border Payment In Africa
          </h1>
          <p className="text-gray-700 mb-8 text-pretty">
            Introducing <span className="font-semibold">VENTRIPAY</span>, The
            Ultimate Financial Solutions For Businesses And Households. With Our
            User-Friendly Platforms, You Can Effortlessly Pay For Your Utility
            Bills And Convert Currencies At Competitive Rates. With Ventripay
            You Can Never Go Wrong With All Your Financial Transactions Because
            We’ve Got You Covered.
          </p>
          <p className="py-10 font-bold text-xl">
            DOWNLOAD AND INSTALL OUR APP TO PERFORM YOUR TRANSACTIONS
          </p>
          <div className="flex space-x-4 items-center">
            <button className="h-20 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              <img
                src=""
                alt="Get it on Google Play"
                className="w-6 h-6 mr-2"
              />
              Get it on Google Play
            </button>
            <button className="h-20 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              <img
                src=""
                alt="Download on the App Store"
                className="w-6 h-6 mr-2"
              />
              Download on the App Store
            </button>
          </div>
          <div className="flex justify-center space-x-8 text-gray-500 text-sm mt-6">
            <span>Fully Licensed By The CBN</span>
            <span>Deposits Insured By NDIC</span>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={heroImg}
            alt="Person Illustration"
            className="max-h-[300px] lg:max-h-[400px] lg:ml-10"
          />
        </div>
      </div>
      <div className="bg-[#003366] py-8 mt-12 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-lg font-semibold text-center mb-4">
            TRUSTED PARTNERS
          </h2>
          <div className="flex justify-center gap-6">
            {trustedIcons.map((item) => (
              <PartnersCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />

      <section className="pt-96 px-6 bg-gray-50 flex justify-center">
        <div className="flex sm:flex-row sm:space-x-4 items-center gap-6 ">
          <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 p-6 flex flex-col items-start">
            <img
              src={iconAccount}
              alt="Account Icon"
              className="w-8 h-8 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Simple Account Registration
            </h3>
            <p className="text-gray-600 mt-2 mb-20">
              Quick setup of an account and fantastic welcome benefits
            </p>
            <div className="absolute top-[-95%]  sm:top-[-180%] lg:top-[-220%] transform translate-y-1/4 right-[-19%] sm:right-[-0%]  lg:right-[-34%] w-3/4">
              <img
                src={Onboarding}
                alt="Hero"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="relative bg-white rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 p-6 flex flex-col items-start">
            <img
              src={iconTransfer}
              alt="Transfer Icon"
              className="w-8 h-8 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Instant Transfer
            </h3>
            <p className="text-gray-600 mt-2 mb-20">
              Instantaneous transfer to any bank worldwide at any time with a
              100% success rate
            </p>

            <div className="absolute top-[-95%] sm:top-[-180%] lg:top-[-195%] transform translate-y-1/4 right-[-19%] md:right-[-1%] lg:right-[-34%] w-3/4">
              <img
                src={Dashboard}
                alt="Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="hidden lg:block sm:block relative bg-white rounded-lg shadow-lg max-w-sm p-6 flex-col items-start">
            <img
              src={iconAirtime}
              alt="Airtime Icon"
              className="w-8 h-8 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Airtime/Data Top-up
            </h3>
            <p className="text-gray-600 mt-2 mb-20">
              Airtime/Data top-up anytime any day
            </p>
            <div className="absolute lg:top-[-220%] sm:top-[-135%] transform translate-y-1/4 lg:right-[-22%] sm:right-[-0%] w-3/4">
              <img
                src={MobileCardService}
                alt="Card Service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-12">
          OUR FEATURES AND SERVICES
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 bg-teal-800 p-8 rounded-lg mb-10 text-white">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold uppercase mb-4">
              Fund Your Account, Make Transfers, Pay Bills with Ventripay
            </h3>
            <p className="text-pretty text-xl">
              Transfer funds quickly, easily, and confidently with our seamless
              and reliable transfer feature. You can pay for your utility bills
              as well.
            </p>
          </div>
          <div className="flex-1">
            <img
              src={fundTransferImage}
              alt="Fund Transfer"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 bg-slate-200 p-8 rounded-lg text-teal-800 shadow-md">
          <div className="flex-1">
            <img
              src={virtualCardImage}
              alt="Virtual Card"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold uppercase mb-4">
              Get a Virtual Card with Ventripay
            </h3>
            <p className="text-xl text-pretty">
              Introducing virtual card for your online payments. Enjoy
              convenience and control. Compatible with popular online platforms.
            </p>
          </div>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 bg-slate-100 p-8 rounded-lg text-teal-800 shadow-md">
          <div className="flex-1">
            <img
              src={currencyExchangeImage}
              alt="Currency Exchane"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold uppercase mb-4">
              Currency Exchange
            </h3>
            <p className="text-xl text-pretty">
              Convert your money from one currency to another with our currency
              exchange feature. Also, you can save your money in foreign
              currencies with this same feature.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-teal-700 text-white p-10 space-y-16">
        <div className="flex justify-between items-start">
          <div className="w-1/2 space-y-4">
            <h2 className="text-lg font-bold tracking-wider">
              DATA SECURITY AND PRIVACY
            </h2>
            <p className="text-md">
              Your Security Is Our Top Priority. We Use Bank-Grade Encryption,
              Two-Factor Authentication, And Strict Data Protection Policies To
              Safeguard Your Information.
            </p>
          </div>
          <div className="w-1/3">
            <img
              src={dataSecurityImage}
              alt="Data Security"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-between items-start">
          <div className="w-1/2 space-y-4">
            <h2 className="text-lg font-bold tracking-wider">
              CUSTOMER SERVICE
            </h2>
            <p className="text-md">
              Expert Support, Always Available. Reach Us 24/7 Via Phone, Email,
              Or Chat For Prompt Assistance.
            </p>
          </div>
          <div className="w-1/3">
            <img
              src={customerServiceImage}
              alt="Customer Service"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white p-10 space-y-16 w-full">
        <div className="flex items-center space-x-4 mt-10 ">
          <div className="flex -space-x-2">
            <img
              src={sectionImg}
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="path/to/avatar2.jpg"
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="path/to/avatar3.jpg"
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="path/to/avatar4.jpg"
              alt="User 4"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <div className="text-md">
            <span className="text-yellow-400 font-semibold">4.4 ★</span>
            <span className="ml-2 text-green-300">+ 23K reviews</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Product;
