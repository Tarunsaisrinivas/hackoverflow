import { useState } from "react";
import ReactCardFlip from "react-card-flip";

// Sample data
const cardData = [
  {
    id: 1,
    title: "Health Care",
    imgSrc: "/bgdoctor.png",
    description: [
      "Technology heals faster, innovation saves lives.",
      "Revolutionizing healthcare one breakthrough at a time.",
      "Curing the world, one tech solution at a time.",
    ],
    pdf: "/HealthCare.pdf", // Add PDF path for each card
  },
  {
    id: 2,
    title: "Women And Child Safety",
    imgSrc: "/bgwomen.png",
    description: [
      "Ensuring the safety and security of women and children.",
      "Innovating solutions for a safer society.",
      "Empowering with technology to protect the vulnerable.",
    ],
    pdf: "/Womenandchildsafety.pdf",
  },
  {
    id: 3,
    title: "Agriculture",
    imgSrc: "/bgfarmer.png",
    description: [
      "Sow the seeds of innovation, and grow the future of sustainable farming.",
      "Empowering agriculture with technology for a greener tomorrow.",
      "Innovate today, harvest tomorrow.",
    ],
    pdf: "/Agriculture.pdf",
  },
];

const Themes = () => {
  const [flipCardId, setFlipCardId] = useState(-1); // Track the ID of the flipped card
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [activePdf, setActivePdf] = useState(""); // PDF to display in modal

  const handleFlip = (id) => {
    setFlipCardId(id === flipCardId ? -1 : id);
  };

  const handleShowModal = (pdf) => {
    setActivePdf(pdf); // Set the active PDF for the modal
    setShowModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
    setActivePdf(""); // Reset the active PDF
  };

  return (
    <div className="py-8 min-h-auto" id="themes">
      <h1 className="mb-8 text-4xl text-center text-white titles">THEMES</h1>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card) => (
            <FlipCard
              key={card.id}
              card={card}
              isFlipped={card.id === flipCardId}
              onClick={() => handleFlip(card.id)}
              onShowModal={handleShowModal}
            />
          ))}
        </div>
      </div>

      {/* Modal for PDF */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Instructions</h2>
              <button
                className="text-red-500 font-bold text-lg"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
            <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
                <li>Participants can select a problem statement from the document provided.</li>
                <li>Participants may also bring their own problem statements, provided they align with one or a mix of the hackathon themes.</li>
              </ul>
              <iframe
                src={activePdf}
                className="w-full h-96"
                title="Instructions PDF"
              />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FlipCard = ({ card, isFlipped, onClick, onShowModal }) => {
  return (
    <div className="w-full transition-all ease-in-out hover:scale-105 sm:w-64 md:w-72 lg:w-80 h-60">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of the card */}
        <div
          className="flex flex-col items-center w-full h-full overflow-hidden transition-transform transform bg-gray-900 border-[2px] border-gray-700 rounded-3xl shadow-lg cursor-pointer"
          onClick={onClick}
        >
          <div className="flex items-center justify-center flex-grow">
            <img
              src={card.imgSrc}
              className="object-cover w-full h-48"
              alt={card.title}
            />
          </div>
          <div className="flex items-center justify-center w-full h-auto bg-gray-800">
            <h2 className="mt-3 mb-4 text-lg font-semibold text-center text-white">
              {card.title}
            </h2>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className="flex flex-col items-center justify-center w-full h-[15.6rem] overflow-hidden transition-transform transform bg-gray-900 border-[2px] border-gray-700 rounded-3xl shadow-lg cursor-pointer"
          onClick={onClick}
        >
          <ul className="flex flex-col gap-1 p-3 text-white">
            {card.description.map((point, index) => (
              <li className="text-center" key={index}>
                {point}
              </li>
            ))}
          </ul>
          <button
            className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card flip when clicking the button
              onShowModal(card.pdf);
            }}
          >
            View Statements
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Themes;
