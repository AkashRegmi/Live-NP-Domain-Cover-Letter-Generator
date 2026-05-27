const DomainForm = ({ formData, setFormData }) => {
  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Input styling
  const inputStyle =
    "w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">
        Domain Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="text-slate-300">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Enter full name"
          />
        </div>

        {/* Address */}
        <div>
          <label className="text-slate-300">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Enter address"
          />
        </div>

        {/* Domain */}
        <div>
          <label className="text-slate-300">Domain Name</label>
          <input
            type="text"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            className={inputStyle}
            placeholder="example"
          />
        </div>

        {/* Primary NS */}
        <div>
          <label className="text-slate-300">Primary Name Server</label>
          <input
            type="text"
            name="primaryNS"
            value={formData.primaryNS}
            onChange={handleChange}
            className={inputStyle}
            placeholder="ns1.example.com"
          />
        </div>

        {/* Secondary NS */}
        <div>
          <label className="text-slate-300">Secondary Name Server</label>
          <input
            type="text"
            name="secondaryNS"
            value={formData.secondaryNS}
            onChange={handleChange}
            className={inputStyle}
            placeholder="ns2.example.com"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-slate-300">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyle}
            placeholder="example@gmail.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-slate-300">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyle}
            placeholder="98XXXXXXXX"
          />
        </div>

        {/* Date */}
        <div>
          <label className="text-slate-300">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default DomainForm;