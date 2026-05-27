const LetterPreview = ({ formData, previewRef }) => {
  return (
    <div
      ref={previewRef}
      className="bg-white text-black p-10 rounded-3xl shadow-2xl min-h-[700px]"
    >
      <div className="space-y-5 leading-8">
        <div className="flex justify-end">
          <p className="text-sm">{formData.date}</p>
        </div>

        <div>
          <p>To,</p>
          <p>The Hostmaster,</p>
          <p>Mercantile Communication Pvt. Ltd.</p>
          <p>Durbar Marg, Kathmandu</p>
        </div>

        <div>
          <p>Dear Sir/Madam,</p>
        </div>

        <div>
          <p className="font-bold underline">Subject: NP Domain Registration</p>
        </div>

        <p>
          I am writing this letter to formally request you to kindly register a{" "}
          <strong>{formData.domain}.com.np</strong> domain for me based on my
          personal name and identity. I have carefully provided all the required
          personal information and necessary details needed for the domain
          registration process in accordance with the guidelines. This domain
          will be used for personal and professional purposes, including
          building my online presence and representing my identity on the
          internet in a structured and professional manner. I sincerely hope
          that my application will be considered positively, and I would be
          extremely grateful for your approval of my domain registration request
          at your earliest convenience.
        </p>

        <p>
          Thank you very much for your consideration. I look forward to hearing
          from you soon.
        </p>

        <div className="space-y-2">
          <p>
            <strong>Domain Name:</strong> {formData.domain}.com.np
          </p>

          <p>
            <strong>Primary Name Server:</strong> {formData.primaryNS}
          </p>

          <p>
            <strong>Secondary Name Server:</strong> {formData.secondaryNS}
          </p>

          <p>
            <strong>Email:</strong> {formData.email}
          </p>

          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
        </div>

        <div className="pt-1">
          <p>Sincerely,</p>

          <div className="mt-1">
            <p>
              <strong>Name:</strong> {formData.fullName}
            </p>

            <p>
              <strong>Address:</strong> {formData.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPreview;
