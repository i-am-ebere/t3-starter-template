import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const HomePageHeroSection = () => {
  const handleButtonClick = () => {
    // Implement the logic for what should happen when the button is clicked
    console.log('Button clicked');
  };

  return (
    <div className="bg-white w-full h-screen flex flex-col items-center justify-center">
      <div className="flex w-full h-full">
        <div className="flex-1 flex flex-col items-start justify-center pl-24">
          <h1 className="text-8xl font-bold leading-tight text-gray-900 mb-12">
            Meet the New Landingfolio Kit
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
          </p>
          <button
            className="bg-indigo-600 text-white rounded-lg px-6 py-3 flex items-center justify-center w-64 h-15"
            onClick={handleButtonClick}
          >
            Start using LandingFolio
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-blue-100 rounded-3xl w-1/3 h-2/3 flex items-center justify-center">
            <FontAwesomeIcon icon={faImage} size="6x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeroSection;