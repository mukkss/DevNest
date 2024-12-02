import React from 'react'
import Hero from '../components/Hero'
import Features from '@/components/Features'
import CollaborationDemo from '@/components/Collaboration-Demo'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/Call-to-action'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#23606E] to-[#0A1B2F] min-h-screen">
      {/* Wrapping all sections with gradient background */}
      <Hero />
      <CollaborationDemo />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
