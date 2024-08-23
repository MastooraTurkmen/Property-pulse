import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
} from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  const {
    type,
    name,
    location,
    rates,
    description,
    beds,
    baths,
    square_feet,
    amenities,
  } = property;

  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{type}</div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <FaMapMarker className="text-lg text-orange-700 mr-2"></FaMapMarker>
          <p className="text-orange-700">
            {location.street}, {location.city}, {location.state}
          </p>
        </div>
        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Nightly</div>
            <div className="text-2xl font-bold text-blue-500">
              {rates.nightly ? (
                `$${rates.nightly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">
              {rates.weekly ? (
                `$${rates.weekly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
            <div className="text-gray-500 mr-2 font-bold">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">
              {rates.monthly ? (
                `$${rates.monthly.toLocaleString()}`
              ) : (
                <FaTimes className="text-red-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          <p>
            <FaBed className="inline-block mr-2" /> 3
            <span className="hidden sm:inline">{beds} </span>
          </p>
          <p>
            <FaBath className="inline-block mr-2" /> 2
            <span className="hidden sm:inline">{baths} </span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2" />
            1,500 <span className="hidden sm:inline">{square_feet} </span>
          </p>
        </div>
        <p className="text-gray-500 mb-4 text-center">{description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2">
          {amenities.map((anemity, index) => {
            return (
              <li key={index}>
                <FaCheck className="text-green-600 inline-block mr-2" />{" "}
                {anemity}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map"></div>
      </div>
    </main>
  );
};

export default PropertyDetails;
