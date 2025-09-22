const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <h2 className="text-xl font-bold mb-4 text-white">MyStay</h2>
                <p className="text-gray-400">
                    Your trusted platform for booking villas, apartments, and unique stays worldwide.
                </p>
                <p className="text-gray-400 mt-2">© {new Date().getFullYear()} MyStay. All rights reserved.</p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition">Home</a></li>
                    <li><a href="#" className="hover:text-white transition">Accommodations</a></li>
                    <li><a href="#" className="hover:text-white transition">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition">Facebook</a>
                    <a href="#" className="hover:text-white transition">Twitter</a>
                    <a href="#" className="hover:text-white transition">Instagram</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
