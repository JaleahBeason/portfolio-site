import PortfolioCarousel from "./components/PortfolioCarousel"
import NetworkPattern from "./components/NetworkPattern"

function App() {
  return (
    <div className="relative min-h-screen">
      <NetworkPattern className="fixed inset-0 opacity-[0.14] pointer-events-none z-0" />
      <div className="relative z-10">
        <PortfolioCarousel />
      </div>
    </div>
  )
}

export default App
