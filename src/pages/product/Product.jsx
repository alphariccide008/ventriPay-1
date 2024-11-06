import { Link } from "react-router-dom";
import { trustedIcons } from "../../data";
import { heroImg } from "../../assets/images";

import PartnersCard from "../../components/PartnersCard";

const Product = () => {
  return (
    // start coding in the section
    <section className="pt-20 px-8 w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left lg:pr-10 mb-10 lg:mb-0">
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
          <div className="flex flex-auto space-x-4 items-center sm:items-center">
            <button className=" h-20 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
              <img
                src=""
                alt="Get it on Google Play"
                className="w-6 h-6 mr-2"
              />
              Get it on Google Play
            </button>
            <button className=" h-20 flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
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
      <Link to="/" className="mt-6 text-blue-500 underline">
        Go back to Home
      </Link>
    </section>
  );
};
export default Product;
