import Header from './components/Header'; 
import Footer from './components/Footer';
export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My App</h1>
        <p>This is the main page content.</p>
      </main>
      <Footer />
    </div>
  );
}