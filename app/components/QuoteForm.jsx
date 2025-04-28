'use client';

import React, { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toastify
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA
import "../components/QuoteForm.css";
import Header from "../components/Header";
import ScrollToTop from "react-scroll-up";
import Footer from "../components/Footer";

const QuoteForm = ({ data }) => {
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

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    projectOverview: '',
    website: '',
    companyName: '',
    budget: '',
    readyToStart: ''
  });

  const [captchaVerified, setCaptchaVerified] = useState(false); // Track captcha state
  const formRef = useRef();
  const recaptchaRef = useRef();

  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
  const serverurl = process.env.NEXT_PUBLIC_DJANGO_URL;
  
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.website) errors.website = 'Correct website is required';
    if (!formData.companyName) errors.companyName = 'Company name is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.projectOverview) errors.projectOverview = 'Project overview is required';
    if (!formData.budget) errors.budget = 'Budget is required';
    if (!formData.readyToStart) errors.readyToStart = 'Please select when you are ready to start';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const [servicesOptions, setServicesOptions] = useState([]); // Dynamic services options

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${serverurls}services/`);
        const data = await response.json();
        setServicesOptions(data.data.map((value) => value.title)); // Assuming response contains services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      const sanitizedValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      setFormData((prev) => ({ ...prev, phoneNumber: sanitizedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast.error('Please verify the captcha first!');
      return;
    }

    if (validateForm()) {
      const selectedServices = formData.servicesRequired.map((service) => service.trim());
      const updatedFormData = { ...formData, servicesRequired: selectedServices };

      try {
        const response = await fetch(`${serverurls}submit-quote/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        });

        if (response.ok) {
          toast.success("Thank you for submitting a Quote, We will contact you soon!");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            areaCode: '',
            phoneNumber: '',
            companyName: '',
            website: '',
            servicesRequired: "",
            projectOverview: '',
            budget: '',
            readyToStart: '',
          });
          recaptchaRef.current.reset(); // Reset captcha after successful submit
          setCaptchaVerified(false);
        } else {
          toast.error("There was an issue submitting your quote.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred, please try again.");
      }
    }
  };

  const handleRecaptchaChange = (token) => {
    setCaptchaVerified(token ? true : false); // Update captcha state
  };

  const budgetOptions = ["$10-$99", "$100-$500", "$500+"];
  const startOptions = ["Immediately", "Within a week", "Within a month", "Later"];

   

  const metaTitle = data?.metanamequote;
  const metaDescription = data?.metadescriptionquote;
  const metaKeywords =data?.keywordsquote;
  const metaImages = ['/logo-light.png'];
  
  const frontend = process.env.NEXT_PUBLIC_FRONT_URL;
  
  const metadata = {
  
    title: metaTitle || 'SharpLogicians |  Service',
    description: metaDescription || 'SharpLogicians | Service | Creative Digital Agency | Service',
    keywords: metaKeywords || "bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative",
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      url: `${frontend}/services`,
      images: metaImages,
    },
  
  };
  
  
  
          return(
              <>
    <title>{metadata.title}</title>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images[0]} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
  
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
         
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
  {formErrors.firstName && <p className="error-message">{formErrors.firstName}</p>}
  </div>
    <div className="form-group">
      <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
         
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
  {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
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
         
        className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
      />
  {formErrors.phoneNumber && <p className="error-message">{formErrors.phoneNumber}</p>}
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
       
      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />
  {formErrors.email && <p className="error-message">{formErrors.email}</p>}
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
      {formErrors.companyName && <p className="error-message">{formErrors.companyName}</p>}

  </div>

  {/* Website */}
  <div className="form-group">
    <label htmlFor="website" className="block text-gray-700 font-medium">Website</label>
    <input
      type="text"
      id="website"
      name="website"
      value={formData.website}
      onChange={handleChange}
      className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="form-group">
  <label className="block text-gray-700 font-medium mb-2">Services Required</label>
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
            className="checkbox-input"
          />
          <label htmlFor={`service-${index}`} className="checkbox-label">{service}</label>
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
    {formErrors.projectOverview && <p className="text-red-500 text-sm">{formErrors.projectOverview}</p>}
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
    {formErrors.budget && <p className="error-message">{formErrors.budget}</p>}
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
    {formErrors.readyToStart && <p className="error-message">{formErrors.readyToStart}</p>}
    </div>

   {/* reCAPTCHA */}
          <div className="form-group mt-4">
          
               <ReCAPTCHA
                             onChange={handleRecaptchaChange}

          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible" // ✅ important for invisible mode
          badge="bottomright" // can also be 'inline' or 'bottomleft'
        />
            {formErrors.recaptcha && <p className="error-message">{formErrors.recaptcha}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn" disabled={!captchaVerified}>Submit</button>
        </form>
      </div>

      <div className="backto-top mt-20">
        <ScrollToTop showUnder={160}></ScrollToTop>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default QuoteForm;