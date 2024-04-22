import React from 'react'
import '../../assets/media.css'
import './landingPage.css'
import Layout from '../../components/Layout/Layout'
import AboutBodyWash from '../../components/CardComponents/AboutBodyWash'
import aboutproduct from '../../assets/imgs/aboutproduct.avif'
import BlogCard from '../../components/CardComponents/BlogCard'
import Testimonial from '../../components/CardComponents/Testimonial'
import FaqSection from '../../components/Faq'
import Slider from 'react-slick'
import AutoSlider from '../../components/AutoSlider'


function Landing() {

  return (
    <Layout>
      <div className="">
      <AutoSlider/>
      </div>
      <div className="container mx-auto py-8 my-5">
        <div className="col grid text-center">
          <h1 className="text-3xl font-bold pb-8">Lorem, ipsum. </h1>
        </div>
        <div className="grid grid-cols-1 justify-center">
          <AboutBodyWash />
        </div>
      </div>

      <div className="w-full py-3 mx-auto px-6 about_product">
        <div className="grid grid-cols-1 text-center justify-center my-4">
          <h1 className="text-3xl font-bold pt-6">Lorem, ipsum dolor.</h1>
          <p className='text-gray-400 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ipsum illo a expedita vero esse vitae magnam iusto error quas?
          </p>
        </div>
        <div className="flex flex-wrap items-center ">
          {/* First column for text */}
          <div className="w-full md:w-1/2 ">
            <div className="book_online_pooja">
              <h2 className="text-xl px-5 font-bold mb-2">Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.</h2>
              <p className="text-gray-700 text-justify py-3 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus, quasi quis minus dolor, placeat accusamus, magni ullam ipsam numquam laudantium quas aspernatur corporis quibusdam nesciunt similique quod dignissimos iusto?</p>
              <div className=""><button className='browse_all_pooja_btn mx-5'>Lorem, ipsum </button></div>
            </div>
          </div>

          {/* Second column for image */}
          <div className="w-full md:w-1/2 px-4 py-5">
            <div className="mb-4 online_pooja">
              <img src={aboutproduct} alt="Your Image" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-5">
        <div className="grid grid-cols-1 text-center justify-center bg-white my-4">
          <h1 className="text-3xl font-bold pt-6">Lorem, ipsum.</h1>
          <p className='text-gray-400 pt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, sunt.</p>
          <BlogCard />
        </div>
      </div>

      <div className="mx-auto py-2 testimonials_div">
        <div className="testimonials grid grid-cols-1 text-center justify-center">
          <h1 className="text-3xl font-bold p-3">- Happy Stories -</h1>
          <Testimonial />
        </div>
      </div>

      <div className="mx-auto py-5 flex flex-col justify-center">
        <FaqSection />
      </div>
    </Layout>


  )
}
export default Landing