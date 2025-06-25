
import { FileText, Calculator, Building, Users, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "GST Return Filing",
      description: "Complete GST compliance and return filing services with expert guidance and timely submission.",
      price: "Starting from ₹500/month",
      features: [
        "GSTR-1 Monthly/Quarterly Filing",
        "GSTR-3B Return Preparation",
        "Input Tax Credit Reconciliation",
        "GST Payment Processing",
        "Compliance Calendar Management",
        "Expert Tax Advice",
        "Error-free Filing Guarantee"
      ],
      popular: true
    },
    {
      icon: Calculator,
      title: "Tally Accounting Services",
      description: "Professional Tally setup, data management, and comprehensive accounting solutions for businesses of all sizes.",
      price: "Starting from ₹2000/month",
      features: [
        "Tally Prime Setup & Configuration",
        "Chart of Accounts Creation",
        "Daily Transaction Entry",
        "Bank Reconciliation",
        "Financial Statements Preparation",
        "Inventory Management",
        "Multi-location Support"
      ],
      popular: false
    },
    {
      icon: Building,
      title: "Income Tax Filing",
      description: "Expert income tax return preparation and filing for individuals, businesses, and corporate entities.",
      price: "Starting from ₹800/return",
      features: [
        "ITR-1 to ITR-7 Filing",
        "Capital Gains Computation",
        "Tax Optimization Strategies",
        "TDS Return Filing",
        "Advance Tax Calculation",
        "Tax Notice Handling",
        "Refund Processing Support"
      ],
      popular: false
    },
    {
      icon: Users,
      title: "Business Registration",
      description: "Complete business setup services including registrations, licenses, and compliance setup.",
      price: "Starting from ₹5000",
      features: [
        "Company/LLP Registration",
        "GST Registration",
        "MSME/Udyam Registration",
        "Professional Tax Registration",
        "ESI & PF Registration",
        "Trade License Assistance",
        "Digital Signature Certificate"
      ],
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Tax Planning & Advisory",
      description: "Strategic tax planning and financial advisory services to optimize your tax liability and business growth.",
      price: "Starting from ₹3000/consultation",
      features: [
        "Annual Tax Planning",
        "Investment Advisory",
        "Business Structure Optimization",
        "Compliance Risk Assessment",
        "Financial Health Check",
        "Growth Strategy Planning",
        "Regular Review Meetings"
      ],
      popular: false
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services and compliance assurance to ensure your business meets all regulatory requirements.",
      price: "Starting from ₹10000",
      features: [
        "Internal Audit Services",
        "Tax Audit (44AB)",
        "Stock Audit",
        "Compliance Audit",
        "Due Diligence Services",
        "Risk Assessment",
        "Audit Report Preparation"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Tax & Accounting Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive solutions for all your tax, accounting, and compliance needs. 
              Expert services backed by years of experience and professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="https://wa.me/+91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  service.popular ? 'border-2 border-green-500' : 'border border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-green-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Get Started
                    </Link>
                    <a
                      href="https://wa.me/+91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                    >
                      Discuss on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our professional approach and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Secure & Confidential</h3>
              <p className="text-gray-600">
                Your financial data is protected with bank-level security and complete confidentiality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Certified professionals with years of experience in tax and accounting services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                All deadlines met with precision and attention to detail for compliance peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards hassle-free tax and accounting management. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/upload"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Upload Documents
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
