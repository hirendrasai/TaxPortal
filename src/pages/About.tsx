
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "2000+", label: "Returns Filed" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const teamMembers = [
    {
      name: "CA Rajesh Kumar",
      role: "Founder & Senior Tax Consultant",
      qualification: "CA, B.Com",
      experience: "8+ years in tax consulting",
      specialization: "GST, Income Tax, Corporate Taxation"
    },
    {
      name: "Priya Sharma",
      role: "Tally & Accounting Specialist",
      qualification: "M.Com, CMA",
      experience: "5+ years in accounting",
      specialization: "Tally, Financial Reporting, Audit"
    },
    {
      name: "Amit Verma",
      role: "Business Registration Expert",
      qualification: "CS, LLB",
      experience: "6+ years in compliance",
      specialization: "Company Formation, Legal Compliance"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of professional ethics and complete confidentiality in all our dealings."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to delivering error-free, timely services has earned us recognition and trust from clients."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to meet specific client needs with personalized attention and support."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure all services are delivered on time, every time."
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
              About TaxPro Consultants
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for comprehensive tax and accounting solutions. 
              Building relationships through professional excellence and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to simplify tax and accounting complexities for businesses and individuals, 
                TaxPro Consultants has grown to become a trusted name in professional financial services.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every business deserves access to expert financial guidance without the complexity. 
                Our team of certified professionals brings years of experience and a commitment to delivering 
                solutions that drive success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Certified and experienced professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Personalized service approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Technology-driven solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Transparent and competitive pricing</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                <p className="text-blue-800 text-lg">
                  "To empower businesses and individuals with expert tax and accounting services 
                  that ensure compliance, optimize financial performance, and provide peace of mind."
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 rounded-lg p-6 text-white">
                <Star className="h-8 w-8 mb-2" />
                <div className="font-bold">5-Star</div>
                <div className="text-sm">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-3xl md:text-4xl font-bold py-6 px-4 rounded-lg mb-4">
                  {achievement.number}
                </div>
                <p className="text-gray-700 font-semibold">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Certified professionals dedicated to your financial success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 h-32"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.qualification}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.experience}</p>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Specialization:</span> {member.specialization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl text-white p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose TaxPro Consultants?
              </h2>
              <p className="text-xl text-blue-100">
                Experience the difference with our comprehensive approach to tax and accounting services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">100% Compliance Guarantee</h3>
                <p className="text-blue-100">We ensure all filings meet regulatory requirements</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-blue-100">Round-the-clock assistance for urgent queries</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
                <p className="text-blue-100">Years of experience across various industries</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
              >
                Start Your Journey With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
