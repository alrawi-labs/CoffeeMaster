import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StreamingSection from '@/components/StreamingSection';
import CoffeeMenu from '@/components/CoffeeMenu';
import StatsSection from '@/components/StatsSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="coffeeMasterApp min-h-screen">
      <Navigation />
      <main className="coffeeMasterMain">
        <HeroSection />
        <StreamingSection />
        <CoffeeMenu />
        <StatsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
