import { useState } from 'react'
import { Button } from 'antd';
import { BarsOutlined, DingtalkOutlined, MessageOutlined } from '@ant-design/icons';
import './App.css'

import headerImg from './assets/headerImg.png'
import gridImg1 from './assets/gridImg1.png'
import gridImg2 from './assets/gridImg2.png'

import backImg from './assets/backImg.png'
import backImg2 from './assets/backImg2.png'
import gridsImg from './assets/gridsImg.svg'

import Assync from './components/Assync';


function App() {

  return (
    <>
      <header>
        <nav className='flex items-center justify-between shadow-lg p-5'>
          <ul className='lg:flex items-center gap-10 hidden'>
            <li>Shop</li>
            <li>Explore</li>
          </ul>
          <div className='flex items-center gap-1'>
            <DingtalkOutlined />
            <h3 className='font-semibold text-lg'>GROVEMADE</h3>
          </div>
            <li className='list-none hidden lg:block'>My Cart</li>
            <span className='lg:hidden text-2xl'>
            <BarsOutlined />
            </span>
        </nav>

        <section style={{backgroundImage: `url(${headerImg})`}} className='bg-cover w-full h-[50vh] text-white flex flex-col gap-3 items-center justify-center'>
          <h2 className='text-3xl'>The Desk Shelf System</h2>
          <p>Available in Walnut or Maple</p>
          <Button style={{backgroundColor:"rgba(255, 255, 255, 0)", color:"white"}} className='cursor-pointer'>LEARN MORE</Button>
        </section>
      </header>

      <section className='flex flex-col gap-5 items-center text-center my-20'>
        <h2 className='text-3xl'>Design Inspires</h2>
          <p className='text-[#A0A0A0]'>Build your dream workspace, so you can get your best work done.</p>
          <Button className='cursor-pointer'>GET STARTED</Button>
        </section>

      <section className='grid lg:grid-cols-2 gap-5 my-20'>
        <aside className='flex flex-col items-center gap-3'>
          <img src={gridImg1} alt="" />
          <h3 className='text-xl font-semibold'>Desk Pads</h3>
          <p>LEARN MORE</p>
        </aside>

        <aside className='flex flex-col items-center gap-3'>
          <img src={gridImg2} alt="" />
          <h3 className='text-xl font-semibold'>Laptop Stands</h3>
          <p>LEARN MORE</p>
        </aside>
      </section>

      <main className='flex flex-col items-center gap-8 '>
      <article className='flex flex-col gap-3 items-center'>
        <h2 className='text-3xl'>Featured Products</h2>
          <p className='text-[#A0A0A0]'>See What’s Trending Right Now</p>
        </article>
        
        {/* // Assync.jsx  */}
          <Assync/>
      </main>

      <section style={{backgroundImage: `url(${backImg})`}} className='bg-cover w-full h-[50vh] text-white text-center flex flex-col gap-3 items-center justify-center my-20'>
          <h2 className='lg:text-5xl text-3xl'>Home Office Inspiration</h2>
          <p>Working from home can be a challenge—see some creative solutions to get it just right.</p>
          <Button style={{backgroundColor:"rgba(255, 255, 255, 0)", color:"white"}} className='cursor-pointer'>LEARN MORE</Button>
        </section>

        <section className='flex flex-col items-center text-center gap-4 lg:w-[90%] m-auto'>
          <h2 className='text-3xl font-semibold'>Made The Hard Way</h2>
          <p className='text-[#A0A0A0]'>Our signature craftsmanship has been honed over a decade of manufacturing innovation here in Portland, Oregon. We combine the skills of our small in-house team with the collective strength of collaborators throughout the US to deliver quality products worth investing in.</p>
          <img src={backImg2} className='w-full' alt="" />
          <h2 className='text-3xl font-semibold'>Make Work Meaningful</h2>
          <p className='text-[#A0A0A0]'>We're here because we believe that your work deserves the best. A team that loves working together is the magic that makes it all happen.</p>
        </section>


        <section className='flex flex-col items-center text-center gap-7  m-auto my-20'>
          <img src={gridsImg} className='w-full' alt="" />
          <h2 className='text-3xl font-semibold'>We Hope You'll Join Us</h2>
          <p>READ MORE ABOUT OUR STORY</p>
        </section>

        <section className='flex flex-col gap-7 justify-center items-center text-center w-full bg-[#9AA8B1] text-white h-[35vh] p-5'>
          <DingtalkOutlined className='text-4xl'/>
          <h2 className='text-3xl font-semibold'>Design Inspires</h2>
          <p>Build your dream workspace, so you can get your best work done.</p>
        </section>

        <footer className='mt-20 flex justify-between items-start'>
          <section className='flex lg:w-[70%] gap-5 flex-col-reverse lg:flex-row'>
          <ul className='flex flex-col gap-1 text-lg'>
            <li>Shop</li>
            <li>About</li>
            <li>Journal</li>
            <li>Support</li>
            <li>COVID-19 Info</li>
            <li>Order Status</li>
            <li>Corporate Sales</li>
          </ul>

          <article className='flex flex-col gap-5 lg:w-1/2'>
            <h3 className='text-xl font-semibold'>Newsletter Signup</h3>
            <p className='text-[#A0A0A0]'>Sign up to our Newsletter to hear about new product releases, learn about our design process, and everything else going on behind the scenes at Grovemade.</p>
            <div className='border lg:mt-9'></div>
          </article>
          </section>
          <button className='py-3 px-6 rounded-[1px] bg-black text-white'>GO <br /> UP</button>
        </footer>

        <article className='lg:flex items-center hidden justify-end gap-10 text-[#707A7F] mt-10'>
          <p>©2020 Grovemade</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <h4 className='text-black'>Site by Department</h4>
        </article>
    </>
  )
}

export default App
