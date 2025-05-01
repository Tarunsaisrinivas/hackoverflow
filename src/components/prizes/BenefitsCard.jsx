// BenefitsCard.js
import React from "react";

const BenefitsCard = () => {
  return (
    <div className="benefitcard w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 p-4 rounded-3xl relative overflow-hidden m-4">
      <h3 className="text-sm font-semibold md:text-2xl text-white">✨ Exciting Benefits for First Prize Winners:</h3>
      <ul className="mt-4 pl-6 text-sm text-white md:text-lg list-disc flex flex-col gap-2">
        <li>🏅 Internships with a stipend of ₹8,000 for each winning team member</li>
        <li>🎓 Exclusive Industrial Visit to T-Hub, Hyderabad</li>
        <li>🏭 Free Industrial Training</li>
      </ul>
    </div>
  );
};

export default BenefitsCard;
