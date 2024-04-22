import React from 'react'
import '../FreeKundli/freeKundli.css'
import Layout from '../../components/Layout/Layout'
import KundliForm from '../../components/KundliForm'
import kundli from '../../assets/imgs/kundli.svg'
import whtwedo from '../../assets/imgs/wht_we_do.svg'

function AboutUs() {
  return (
    <Layout>
      <div className='container mx-auto my-8 free_kundli_div'>
        <div className="grid justify-content-center">
          <div className="lg:w-full md:w-full sm:w-full">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">
              <div className="p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-2">About us</h3>
                <p className="whitespace-pre-line">Welcome to VEDIC TALKS, your trusted guide in the mystical realms of astrology and cosmic wisdom. Our mission is to empower individuals on their journey of self-discovery, personal growth, and spiritual enlightenment through the ancient art of astrology.
                  At [Your Astrology Website Name], we believe that the stars hold valuable insights into our personalities, relationships, and life paths. Whether you're a curious beginner or a seasoned astrologer, our platform offers a wealth of resources, guidance, and inspiration to deepen your understanding of the celestial influences shaping your destiny.</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 pt-8 justify-items-center freekundli_inner">
              <div className="px-5 my-5">
                <h1 className='text-xl font-bold'>What we do</h1>
                <p className='py-6'>Welcome to VEDIC TALKS, your trusted guide in the mystical realms of astrology and cosmic wisdom. Our mission is to empower individuals on their journey of self-discovery,
                  personal growth, and spiritual enlightenment through the ancient art of astrology.</p>
              </div>
              <div className='flex justify-center'>  <img src={whtwedo} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default AboutUs