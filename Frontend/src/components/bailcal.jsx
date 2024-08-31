import React, { useState } from "react";

// Sample data for offence types
const OFFENCE_TYPES = [
  { name: "Theft", isBailable: true },
  { name: "Murder", isBailable: false },
  { name: "Assault", isBailable: true },
  { name: "Drug Trafficking", isBailable: false },
  { name: "Robbery", isBailable: false },
  { name: "Burglary", isBailable: false },
  { name: "Rape", isBailable: false },
  { name: "Kidnapping", isBailable: false },
  { name: "Forgery", isBailable: false },
  { name: "Fraud", isBailable: false },
  { name: "Extortion", isBailable: false },
  { name: "Cyber Crime", isBailable: false },
  { name: "Domestic Violence", isBailable: true },
  { name: "Attempt to Murder", isBailable: false },
  { name: "DUI (Driving Under Influence)", isBailable: true },
  { name: "Public Intoxication", isBailable: true },
  { name: "Possession of Stolen Property", isBailable: false },
  { name: "Terrorism", isBailable: false },
  { name: "Conspiracy", isBailable: false },
  { name: "Unlawful Assembly", isBailable: true },
  { name: "Disturbance of Peace", isBailable: true },
  { name: "Negligence", isBailable: true },
  { name: "Defamation", isBailable: true },
  { name: "Indecent Exposure", isBailable: true },
  { name: "Illegal Possession of Firearms", isBailable: false },
  { name: "Bribery", isBailable: false },
  { name: "Money Laundering", isBailable: false },
  { name: "Human Trafficking", isBailable: false },
  { name: "Sexual Harassment", isBailable: true },
  { name: "Indecent Assault", isBailable: false },
];

const BailCalculator = () => {
  const [offence, setOffence] = useState("");
  const [sentenceHalfUndergone, setSentenceHalfUndergone] = useState(false);
  const [investigationCompleted, setInvestigationCompleted] = useState(true);
  const [trialConcluded, setTrialConcluded] = useState(true);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const offenceDetails = OFFENCE_TYPES.find((o) => o.name === offence);

    if (!offenceDetails) {
      setResult("Please select a valid offence.");
      return;
    }

    if (offenceDetails.isBailable) {
      setResult(
        "The offence is bailable. Bail is granted as a matter of right."
      );
    } else {
      // Non-bailable offence checks
      if (sentenceHalfUndergone) {
        setResult(
          "Bail may be granted if you have undergone half the sentence and the offence is not punishable with death or life imprisonment."
        );
      } else if (!investigationCompleted) {
        setResult(
          "Bail may be granted if the investigation is not completed and the police report is not filed within 60 or 90 days."
        );
      } else if (!trialConcluded) {
        setResult(
          "Bail may be granted if the trial before the Magistrate is not concluded within 60 days."
        );
      } else {
        setResult(
          "Bail is not automatically granted and will be subject to judicial discretion based on the facts of the case."
        );
      }
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gray-50 h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Bail Calculator
      </h1>
      <p className="text-lg mb-6 text-center text-gray-700">
        Use this tool to check your eligibility for bail based on Indian law.
        Please provide details about the offence and your trial status.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="offence" className="block text-gray-600 mb-2">
            Select Offence
          </label>
          <select
            id="offence"
            value={offence}
            onChange={(e) => setOffence(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">Select an offence</option>
            {OFFENCE_TYPES.map((type, index) => (
              <option key={index} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {!offence ||
        OFFENCE_TYPES.find((o) => o.name === offence)?.isBailable ? null : (
          <>
            <p>Please tick appropriate options and submit</p>
            <br />
            <div className="mb-4">
              <label
                htmlFor="sentenceHalfUndergone"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="sentenceHalfUndergone"
                  checked={sentenceHalfUndergone}
                  onChange={(e) => setSentenceHalfUndergone(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-600">
                  Have you undergone half the sentence?
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="investigationCompleted"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="investigationCompleted"
                  checked={investigationCompleted}
                  onChange={(e) => setInvestigationCompleted(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-600">
                  Is the investigation completed?
                </span>
              </label>
            </div>

            <div className="mb-4">
              <label
                htmlFor="trialConcluded"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="trialConcluded"
                  checked={trialConcluded}
                  onChange={(e) => setTrialConcluded(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-600">
                  Is the trial concluded?
                </span>
              </label>
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
        >
          Check Eligibility
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Eligibility Result
          </h2>
          <p className="text-gray-600">{result}</p>
        </div>
      )}
    </div>
  );
};

export default BailCalculator;
