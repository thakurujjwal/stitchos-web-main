import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">About Us – StitchOS</h1>

      <section className="mb-12">
        <p className="mb-4 text-lg leading-relaxed">
          <strong>StitchOS</strong> is a next-generation Manufacturing Execution System (MES) built exclusively for the apparel and textile industry. Designed for factory floors, our platform digitizes the entire production journey—from planning and cutting to stitching, finishing, quality control, and packing.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          With real-time tracking, smart line planning, digital quality checks, compliance monitoring, and end-to-end traceability through QR-coded garment IDs, StitchOS empowers manufacturers to meet global standards for efficiency, sustainability, and ethical sourcing.
        </p>
        <p className="text-lg leading-relaxed">
          Already deployed in <strong>20+ factories</strong> across the Delhi NCR region, StitchOS is bootstrapped, profitable, and on a mission to drive large-scale digital transformation across the apparel industry.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Founder – Anupam Kumar</h2>
        <p className="mb-4 text-lg leading-relaxed">
          Anupam Kumar is a highly experienced apparel manufacturing and supply chain expert with over two decades of industry leadership. He has worked with some of the world’s top apparel brands and understands the real challenges faced by factories trying to meet global expectations.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Prior to founding StitchOS, Anupam successfully built and implemented a pioneering digital solution for sewing quality, which was adopted by over 200 factories and later acquired by a US-based technology company.
        </p>
        <p className="text-lg leading-relaxed">
          Known for his deep industry insight and strong ecosystem network, Anupam founded StitchOS in 2023 to help apparel manufacturers become globally competitive through smart, scalable, and sustainable technology.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
