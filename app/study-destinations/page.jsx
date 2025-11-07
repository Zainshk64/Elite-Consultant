import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
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