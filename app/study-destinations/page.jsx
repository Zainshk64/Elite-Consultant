import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinationDetails from '../../components/sections/DestinationDetails'

export default function DestinationDetailsPage({ params }) {
  return (
    <main>
      <Navbar />
      <DestinationDetails destinationId={params.id} />
      <Footer />
    </main>
  )
}