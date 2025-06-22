import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Button, Checkbox, Input, Modal } from 'antd'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Assync = () => {
  // get ()
    let [data,setData] = useState([])
    const api = 'http://localhost:3000/products'
    async function get() {
      try {
        let response = await fetch(api)
        let data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error);
      } 
    }
    useEffect(()=>{
      get()
    },[])

    // delete
    async function deleteProduct(id) {
      await fetch(`${api}/${id}`,{method:"DELETE"})
      get()
    }

    // add
   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    addNewProduct()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let [inpAddImg,setInpAddImg] = useState('')
  let [inpAddName,setInpAddName] = useState('')
  let [inpAddPrice,setInpAddPrice] = useState('')
  let [inpAddStatus,setInpAddStatus] = useState('false')

  async function addNewProduct() {
    let newUser = {
      img: inpAddImg,
      name: inpAddName,
      price: inpAddPrice,
      status: inpAddStatus == 'true'? true : false,
      id: Date.now().toString()
    }
    try {
      await fetch(api,{
        method:"POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(newUser)
      })
      get()
      setInpAddImg('')
      setInpAddName('')
      setInpAddPrice('')
      setInpAddStatus('false')
      setIsModalOpen(false)
    } catch (error) {
      console.log(error);
    }
  }

   // edit
   const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  let [inpEditImg,setInpEditImg] = useState('')
  let [inpEditName,setInpEditName] = useState('')
  let [inpEditPrice,setInpEditPrice] = useState('')
  let [inpEditStatus,setInpEditStatus] = useState('false')
  let [idx,setIdx] = useState(null)

  function openEditDialog(e) {
    setIsModalOpen1(true)
    setIdx(e.id)
    setInpEditImg(e.img)
    setInpEditName(e.name)
    setInpEditPrice(e.price)
    setInpEditStatus(e.status? 'true': 'false')
    console.log(e.id);
    
  }

  async function updatedProduct() {
    let updated = {
      img: inpEditImg,
      name: inpEditName,
      price: inpEditPrice,
      status: inpEditStatus == 'true'?true:false,
    }
    try {
      await fetch(`${api}/${idx}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(updated)
      })
    } catch (error) {
      console.log(error);
    }
  }

  // checkbox 
  async function changeStatus(e) {
    let newStatus = {
      ...e,
      status: !e.status
    }
    try {
      await fetch(`${api}/${e.id}`,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body: JSON.stringify(newStatus)
      })
      get()
    } catch (error) {
      console.log(error);
    }
  }

  // search
  let [search,setSearch] = useState('')

  async function searchProduct(search) {
    try {
      let response = await fetch(`${api}?name=${search}`)
      let data = await response.json()
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  // searchStatus
  let [searchStatus,setSearchStatus] = useState('')

  async function searchByStatus(searchStatus) {
    if(searchStatus != 'all') {
      try {
        let response = await fetch(`${api}?status=${searchStatus}`)
        let data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }
    else {
      get()
    }
  }

  // minMaxPrice
  let [min,setMin] = useState('')
  let [max,setMax] = useState('')

  // info
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false)
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  let [inpInfoImg,setInpInfoImg] = useState('')
  let [inpInfoName,setInpInfoName] = useState('')
  let [inpInfoPrice,setInpInfoPrice] = useState('')
  let [inpInfoStatus,setInpInfoStatus] = useState(false)

  function takeInfo(e) {
    setIsModalOpen2(true)
    setInpInfoImg(e.img)
    setInpInfoName(e.name)
    setInpInfoPrice(e.price)
    setInpInfoStatus(e.status)
  }

  return (
    <>
    {/* // add  */}
    <Modal
        title="Add User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <article className='flex flex-col gap-3 items-end'>
        <Input type='file'  placeholder='Img...' value={inpAddImg} onChange={(e)=>setInpAddImg(e.target.value)}/>
        <Input  placeholder='Name...' value={inpAddName} onChange={(e)=>setInpAddName(e.target.value)}/>
        <Input  placeholder='Price...' value={inpAddPrice} onChange={(e)=>setInpAddPrice(e.target.value)}/>
        <select className='w-full p-1 border-1 border-gray-300' value={inpAddStatus} onChange={(e)=>setInpAddStatus(e.target.value)}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        </article>
      </Modal>

    {/* // edit  */}
    <Modal
        title="Edit"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen1}
        onOk={updatedProduct}
        onCancel={handleCancel1}
      >
        <article className='flex flex-col gap-3 items-end'>
        <Input  placeholder='Img...' value={inpEditImg} onChange={(e)=>setInpEditImg(e.target.value)}/>
        <Input  placeholder='Name...' value={inpEditName} onChange={(e)=>setInpEditName(e.target.value)}/>
        <Input  placeholder='Price...' value={inpEditPrice} onChange={(e)=>setInpEditPrice(e.target.value)}/>
        <select className='w-full p-1 border-1 border-gray-300' value={inpEditStatus} onChange={(e)=>setInpEditStatus(e.target.value)}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        </article>
      </Modal>

    {/* // info */}
    <Modal
        title="Info"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <article className='flex gap-3 justify-between items-center'>
          <img src={inpInfoImg} className='rounded-full w-[40%] h-[20vh]' alt="" />
          <div className='flex flex-col gap-3'>
        <h2 className='flex gap-3 text-lg'><span className='font-semibold text-lg'>Model:</span> {inpInfoName}</h2>
        <h2 className='flex gap-3 text-lg'><span className='font-semibold text-lg'>Current Price:</span> ${inpInfoPrice}</h2>
        <button className={inpInfoStatus? 'border-1 border-gray-300 p-1 rounded-md cursor-pointer hover:text-blue-500 hover:border-blue-500 duration-200': 'hidden'}>Order now</button>
        <button disabled className={inpInfoStatus? 'hidden': 'border-1 border-red-300 text-red-300 p-1 rounded-md cursor-pointer hover:text-red-500 hover:border-red-500 duration-200'}>Sorry, Wrong Number</button>
          </div>
        </article>
      </Modal>

    {/* // Search, Status, Add  */}
    <section className='w-full flex flex-col lg:flex-row items-center justify-between gap-10'>
      <article className='w-full flex gap-3'>
      <Input value={search} onChange={(e)=>setSearch(e.target.value)} className='' placeholder='Search...'/>
      <Button onClick={()=>searchProduct(search)}>Search</Button>
      </article>
       
       <article className='w-full flex gap-5 justify-center'>
        <Input type='number' value={min} onChange={(e)=>setMin(e.target.value)} className='lg:max-w-1/3' placeholder='От'/>
        <Input type='number' value={max} onChange={(e)=>setMax(e.target.value)} className='lg:max-w-1/3' placeholder='До'/>
       </article>

      <article className='flex w-full gap-5'>
        <select value={searchStatus} onChange={(e)=>setSearchStatus(e.target.value)}  onClick={()=>searchByStatus(searchStatus)} className='p-1 border-gray-300 border-1 w-full rounded-md text-gray-400 cursor-pointer'>
          <option value="all">All</option>
          <option value="true">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <Button onClick={()=>showModal()} type='primary'>Add product</Button>
      </article>
    </section>
    
    {/* // Products  */}
    <section className='grid lg:grid-cols-4 gap-5'>
    {data.map((e)=>{
      if(
        (min == '' || Number(e.price) >= Number(min)) &&
        (max == '' || Number(e.price) <= Number(max))
      )
        return(
          <article key={e.id} className='w-full text-[#A0A0A0] flex flex-col gap-5 relative'>
          <img className='w-full' src={e.img} alt="" />
          <div className='flex flex-col gap-1'>
          <h3 className={e.status? 'font-semibold' : 'line-through'}>{e.name}</h3>
          <p className={e.status? '' : 'line-through'}>${e.price}</p>
          </div>
          <article className='text-black flex items-center gap-3 text-xl absolute top-5 right-5 cursor-pointer'>
            <Checkbox type="checkbox" checked={e.status} onChange={()=>changeStatus(e)} />
            <InfoCircleOutlined onClick={()=>takeInfo(e)} />
            <EditOutlined onClick={()=>openEditDialog(e)} style={{color:"green"}} />
            <DeleteOutlined onClick={()=>deleteProduct(e.id)} style={{color:"red"}} />
          </article>
          <h2 className={e.status? 'hidden': 'text-red-500 absolute text-2xl font-semibold left-[30%] top-[40%]'}>Out Of Stock!</h2>
        </article>
      )
    })}
    </section>
    </>
  )
}

export default Assync