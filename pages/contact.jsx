import Navbar from '../components/Navbar';
import Footer   from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="py-12 px-6">
        <h1 className="text-3xl font-serif mb-8">Contact</h1>
        <p>
          You can contact me at{' '}
          <a href="mailto:minhquans2810@gmail.com" className="text-pink-500">
            minhquans2810@gmail.com
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
