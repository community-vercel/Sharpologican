'use client';
import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify
// import QuoteForm from '../components/QuoteForm.css'
import "../components/QuoteForm.css";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-up";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet-async';


const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    areaCode: "",
    phoneNumber: "",
    companyName: "",
    website: "",
    servicesRequired: [],
    projectOverview: "",
    budget: "",
    readyToStart: "",
  });
  const [servicesOptions, setServicesOptions] = useState([]); // State to hold dynamic services
  const formRef = useRef();

  const budgetOptions = ["$10-$99", "$100-$500", "$500+"];
  const startOptions = ["Immediately", "Within a week", "Within a month", "Later"];
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;

  // Fetch services dynamically from the backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${serverurl}services/`);
        const data = await response.json();
        
        setServicesOptions(data.data.map((value)=>value.title)); // Assuming the response contains an array of services
      } catch (error) {
        console.error("Error fetching Quote Form:", error);
        // toast.error("An error occurred while fetching  Quote Form");
      }
    };

    fetchServices();
  }, []); // Empty dependency array to run once on mount
console.log("service",servicesOptions)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For the phoneNumber field, allow only numeric input.
    if (name === "phoneNumber") {
      const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      setFormData((prev) => ({ ...prev, phoneNumber: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedServices = formData.servicesRequired.map(service => service.trim());
    const updatedFormData = {
        ...formData,
        servicesRequired: selectedServices,  // Ensuring it's an array of strings
      };
    fetch('http://localhost:8000/submit-quote/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
 
    try {
      // Send data to backend using Axios
    //   const response = await axios.post(
    //     `${import.meta.env.VITE_API_BASE_URL_BUDGED }`,
    //      updatedFormData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

      // Handle success
      toast.success("Thanku You for submiting a Quote, We Will contact you soon!");

      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        areaCode: '',
        phoneNumber: '',
        companyName: '',
        website: '',
        servicesRequired:"",
        projectOverview: '',
        budget: '',
        readyToStart: '',
      });

      console.log('Response:', response);
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
      toast.error("An error occurred while submitting your quote.");
    }
  };

  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>SharpLogicians | Creative Digital Agency</title>
        <meta name="description" content="SharpLogicians | Creative Digital Agency" />
        <meta
          name="keywords"
          content="bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative"
        />
        <meta name="author" content="Createx Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" color="#5bbad5" href="safari-pinned-tab.svg" />
        <meta name="msapplication-TileColor" content="#766df4" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
            </div>
 <div className="quote-form-container mt-8 max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
  <form ref={formRef} className="quote-form space-y-6" onSubmit={handleSubmit}>
    <h2 className="text-2xl font-bold text-center text-gray-800">Get a Quote</h2>

    {/* First Name and Last Name */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="form-group">
        <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Area Code and Phone Number */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="form-group">
        <label htmlFor="areaCode" className="block text-gray-700 font-medium">Area Code</label>
        <input
          type="number"
          id="areaCode"
          name="areaCode"
          value={formData.areaCode}
          onChange={handleChange}
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Email */}
    <div className="form-group">
      <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Company Name */}
    <div className="form-group">
      <label htmlFor="companyName" className="block text-gray-700 font-medium">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Website */}
    <div className="form-group">
      <label htmlFor="website" className="block text-gray-700 font-medium">Website</label>
      <input
        type="url"
        id="website"
        name="website"
        value={formData.website}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Services Required */}
    <div className="form-group">
            <label>Services Required</label>
            <div className="checkbox-group">
    {servicesOptions.length > 0 ? (
      servicesOptions.map((service, index) => (
        <div key={index} className="checkbox-item">
          <input
            type="checkbox"
            id={`service-${index}`}
            name="servicesRequired"
            value={service}
            checked={formData.servicesRequired.includes(service)}
            onChange={(e) => {
              const { value, checked } = e.target;
              setFormData((prev) => {
                const selectedServices = checked
                  ? [...prev.servicesRequired, value]
                  : prev.servicesRequired.filter((item) => item !== value);
                return { ...prev, servicesRequired: selectedServices };
              });
            }}
            // className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 "
          />
          <label
            htmlFor={`service-${index}`}
            className="text-gray-700 text-lg font-medium cursor-pointer "
          >
            {service}
          </label>
        </div>
      ))
    ) : (
      <p className="text-gray-500">Loading services...</p>
    )}
  </div>
</div>

    {/* Project Overview */}
    <div className="form-group">
      <label htmlFor="projectOverview" className="block text-gray-700 font-medium">Project Overview</label>
      <textarea
        id="projectOverview"
        name="projectOverview"
        value={formData.projectOverview}
        onChange={handleChange}
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Budget */}
    <div className="form-group">
      <label htmlFor="budget" className="block text-gray-700 font-medium">Budget</label>
      <select
        id="budget"
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="mt-0 p-0 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Budget</option>
        {budgetOptions.map((budget, index) => (
          <option key={index} value={budget}>{budget}</option>
        ))}
      </select>
    </div>

    {/* Ready to Start */}
    <div className="form-group">
      <label htmlFor="readyToStart" className="block text-gray-700 font-medium">Ready to Start</label>
      <select
        id="readyToStart"
        name="readyToStart"
        value={formData.readyToStart}
        onChange={handleChange}
        className="mt-2 p-0 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Start Time</option>
        {startOptions.map((start, index) => (
          <option key={index} value={start}>{start}</option>
        ))}
      </select>
    </div>

    {/* Submit Button */}
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>
<div className="backto-top mt-20">
          <ScrollToTop showUnder={160}>
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
         <ToastContainer 
              position="top-right"
              autoClose={3000} // Auto-close after 5 seconds
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              style={{
                width: "400px", // Adjust width here as needed
                height:'900px',
                marginTop:'300px',
                marginRight:'900px',
                whiteSpace: "nowrap",
              }}
            />
    </>
  );
};

export default QuoteForm;
