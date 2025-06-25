
import { FileText, Calculator, Building, Users, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      icon: FileText,
      title: "GST Return Filing",
      description: "Complete GST return preparation and filing services with timely compliance and expert guidance.",
      features: ["Monthly/Quarterly Returns", "GSTR-1, GSTR-3B Filing", "Input Tax Credit Optimization"]
    },
    {
      icon: Calculator,
      title: "Tally Accounting",
      description: "Professional Tally setup, data entry, and comprehensive accounting solutions for businesses.",
      features: ["Tally Setup & Configuration", "Books Maintenance", "Financial Reporting"]
    },
    {
      icon: Building,
      title: "Tax Compliance",
      description: "End-to-end tax filing and compliance services for individuals and businesses.",
      features: ["Income Tax Returns", "TDS Returns", "Corporate Tax Filing"]
    },
    {
      icon: Users,
      title: "Business Registration",
      description: "Complete business setup services including company registration and licensing.",
      features: ["Company Registration", "MSME Registration", "Trade License"]
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning and advisory services to optimize your tax savings.",
      features: ["Tax Planning", "Investment Advisory", "Financial Analysis"]
    },
    {
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services and compliance assurance for your business operations.",
      features: ["Internal Audit", "Tax Audit", "Compliance Review"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tax & Accounting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From GST compliance to complete accounting solutions, we provide end-to-end 
            financial services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Services
            <FileText className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
