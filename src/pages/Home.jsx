import { useRef, useState } from "react";
import Header from "../components/Header";
import DomainForm from "../components/DomainForm";
import LetterPreview from "../components/LetterPreview";
import Button from "../components/Button";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaDownload } from "react-icons/fa";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Home = () => {
  // Initial form state
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    citizenship: "",
    domain: "",
    primaryNS: "",
    secondaryNS: "",
    email: "",
    phone: "",
    date: "",
  });

  // Reference for printing and PDF
  const previewRef = useRef();

  // Reset form
  const handleReset = () => {
    setFormData({
      fullName: "",
      address: "",
      citizenship: "",
      domain: "",
      primaryNS: "",
      secondaryNS: "",
      email: "",
      phone: "",
      date: "",
    });
  };

  // Download PDF
  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(previewRef.current);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190;
    const pageHeight = 295;

    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;

    let position = 10;

    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }
    const fileName = formData.fullName
      ? formData.fullName.replace(/\s+/g, "_")
      : "cover_letter";
    pdf.save(`${fileName}_cover_letter.pdf`);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Helmet>
        <meta
          name="google-site-verification"
          content="qoTbsUlL5kXlAlnNDj3r3UyApARK4hb1P14Zpg9NcrU"
        />
        <title>
          NP Domain Cover Letter Generator | Create Cover Letters Online
        </title>

        <meta
          name="description"
          content="Generate NP domain registration Cover letters instantly. Create, preview, download PDF cover letters for .com.np domain registration easily."
        />

        <meta
          name="keywords"
          content="np domain, domain cover letter generator, com.np registration, nepal domain, cover letter generator"
        />

        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="NP Domain Cover Letter Generator" />
        <meta
          property="og:description"
          content="Create and download NP domain registration cover letters instantly."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />

      <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2 gap-8">
        {/* Left Side Form */}
        <div className="space-y-6 ">
          <DomainForm formData={formData} setFormData={setFormData} />

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              onClick={handleDownloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <FaDownload />
                PDF
              </div>
            </Button>

            <Button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <div className="flex items-center justify-center gap-2">
                <FaTrash />
                Reset
              </div>
            </Button>
          </div>
        </div>

        {/* Right Side Preview */}
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-5">Live Preview</h2>

          <LetterPreview formData={formData} previewRef={previewRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
