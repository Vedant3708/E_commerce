import React from 'react';

// Sample data for resources
const resources = [
    {
      title: 'Indian Penal Code, 1860',
      url: 'https://indiacode.nic.in/handle/123456789/1367',
    },
    {
      title: 'Code of Criminal Procedure, 1973',
      url: 'https://indiacode.nic.in/handle/123456789/1897',
    },
    {
      title: 'The Constitution of India',
      url: 'https://indiacode.nic.in/handle/123456789/1996',
    },
    {
      title: 'Indian Evidence Act, 1872',
      url: 'https://indiacode.nic.in/handle/123456789/1541',
    },
    {
      title: 'Protection of Human Rights Act, 1993',
      url: 'https://indiacode.nic.in/handle/123456789/2048',
    },
    {
      title: 'Juvenile Justice (Care and Protection of Children) Act, 2015',
      url: 'https://indiacode.nic.in/handle/123456789/1788',
    },
    {
      title: 'Criminal Law (Amendment) Act, 2018',
      url: 'https://indiacode.nic.in/handle/123456789/1807',
    },
  ];
  

const BailResourcesPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Bail Resources</h1>
      <p className="mb-8 text-lg text-gray-700">
        Here you will find important laws and insights about bail. This page aims to provide a comprehensive understanding of bail laws, their types, conditions, and rights associated with bail.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Important Laws</h2>
        <ul className="list-disc pl-5 space-y-2">
          {resources.map((resource, index) => (
            <li key={index} className="text-blue-600 hover:text-blue-800">
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Insights on Bail</h2>
        <p className="mb-4 text-lg text-gray-700">
          The law of bail is a crucial element in the legal framework that ensures individuals who are accused of crimes are not unnecessarily detained while awaiting trial. Bail serves as a mechanism to balance the rights of the accused with the interests of justice.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Bail:</strong> Bail refers to the conditional release of an accused person from custody, usually with the promise to appear in court when required. The conditions set for bail may include financial guarantees, such as bail bonds, or non-financial conditions, such as reporting to a police station.</li>
          <li><strong>Bond:</strong> A bond is a financial agreement that guarantees the accused will appear in court. It is a part of the bail process and ensures that if the accused fails to appear, the bond amount can be forfeited.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Types of Bail</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Regular Bail:</strong> Granted after an arrest and during the trial phase. It is typically used when the accused is not considered a flight risk or a danger to society.</li>
          <li><strong>Interim Bail:</strong> A temporary bail granted to the accused when an application for regular bail is pending. It is a short-term solution until the court decides on the regular bail application.</li>
          <li><strong>Anticipatory Bail:</strong> Granted to an individual who anticipates arrest based on the potential accusations against them. It protects the individual from arrest if they surrender to the court and comply with specific conditions.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Regular Bail vs. Anticipatory Bail</h3>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-2">Regular Bail</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Granted after arrest and therefore, means release from the custody of the police.</li>
            <li>Bail may be granted to the accused by any Judicial Magistrate/Metropolitan Magistrate or Court (or, arguably, even a police officer).</li>
            <li>Bail is ordinarily granted as a matter of right in the case of bailable offenses and as a matter of discretion of the court (or the police officer) in non-bailable offenses in accordance with Sections 437 & 439 of CrPC.</li>
            <li>Immunity is not from arrest but from custody.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Anticipatory Bail</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Granted in anticipation/apprehension of arrest and is, therefore, effective at the very moment of arrest.</li>
            <li>Anticipatory bail may be granted only by the High Court or the Sessions Court.</li>
            <li>The power to grant anticipatory bail is of an extraordinary character which is to be used by the Court sparingly.</li>
          </ul>

          <p className="text-gray-700">
            A basic snapshot of the difference between regular and anticipatory bail.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2">Cases in Which Release on Bail is Mandatory</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Where the offence is bailable (Section 436, Cr.P.C).</li>
          <li>Where the applicant has undergone half of the sentence as an under-trial and the offence is not punishable with death or life imprisonment (Section 436A, Cr.P.C).</li>
          <li>Where the investigation is not completed and the police report is not filed within 60 or 90 days (Section 167(2) proviso) or a longer period as provided by the statute.</li>
          <li>Where the trial before a Magistrate is not concluded within 60 days (Section 437(6), Cr.P.C).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Bail in Bailable Offences – Section 436, CrPC</h3>
        <div className=" p-4 rounded-lg mb-6">
          <p className="text-lg text-gray-700 mb-4">
            A person accused of a bailable offence is entitled to be released on bail pending his trial. There is no discretion to refuse bail if the accused is prepared to furnish surety and cannot be detained in custody unless unable or unwilling to offer bail or to execute personal bonds.
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>No discretion to impose conditions.</li>
            <li>If the accused is indigent and is unable to furnish bonds, he/she can be released on personal bonds (Section 436 proviso).</li>
            <li>As a matter of prudence – courts prefer local and solvent sureties (though not mandatory).</li>
            <li>Ensure surety is not a professional/stock surety (Section 441-A).</li>
            <li>Cash deposit instead of bond? Yes (Section 445 CrPC).</li>
            <li>Can the IO/Court impound the passport? No.</li>
            <li>What happens if an offence which was bailable gets aggravated later? (More on that later!)</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-2">Default Bail – Section 167(2) (Proviso)</h3>
        <div className=" p-4 rounded-lg mb-6">
          <p className="text-lg text-gray-700 mb-4">
            Also known as Statutory Bail. This type of bail is granted when the investigation is not completed, or the police report is not filed within the stipulated period.
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>When can it be granted? Investigation is not completed/police report is not filed within 60 or 90 days (Section 167(2) proviso).</li>
            <li>The 60/90 days period may be extended by special statutes. For instance, see Section 36A(4) of NDPS – 180 days, further extendable to one year. Extension application to be filed within 180 days.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-2">Rights of the Accused</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Right to Bail:</strong> Under the Indian legal system, every accused has a right to bail except in cases where the law specifically excludes bail, such as certain serious offenses.</li>
          <li><strong>Presumption of Innocence:</strong> The accused is presumed innocent until proven guilty. Bail reflects this principle by allowing individuals to remain free while awaiting trial.</li>
          <li><strong>Right to Fair Treatment:</strong> The accused is entitled to fair treatment, including a reasonable chance to present their case for bail and challenge the conditions imposed.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Judicial Considerations</h3>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Judicial Discretion:</strong> Courts have discretion in granting bail, considering the facts of each case and the accused's history. Judges weigh various factors, including past criminal records and personal circumstances.</li>
          <li><strong>Legal Precedents:</strong> Previous court rulings and legal precedents influence bail decisions. Judges refer to established case laws and guidelines while making bail determinations.</li>
        </ul>
      </section>
    </div>
  );
};

export default BailResourcesPage;
