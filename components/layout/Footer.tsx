import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Support</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-gray-500 border-t border-gray-200">
        &copy; {new Date().getFullYear()} LuxStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
