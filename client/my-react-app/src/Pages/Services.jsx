import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { services } from '../Components/details'
import SvPrev from '../Components/SvPrev'

const ServList = [
  { id: "1",
    item:"Project Planning and Management",
  },
  { id: "2",
    item:"Automatic Fire Suppression System (Fm200)",
  },
  { id: "3",
    item:"Fire Detection and Alarm System",
  },
  { id: "4",
    item:"Intrusion Detection and Alarm System",
  },
  { id: "5",
    item:"Access Control Systems",
  },
  { id: "6",
    item:"Video Surveillance (CCTV)",
  },
  { id: "7",
    item:"Basic Electrical Installations",
  },
  { id: "8",
    item:"Basic Civil & Engineering works"
  },
  { id: "9",
    item:"Automatic Electronic Gates"
  },
  { id: "10",
    item:"Surge Protectors"
  },
  { id: "11",
    item:"Fire Extinguishers & Portable Equipments"
  },

]

const Services = () => {
  return (
    <div>
      <Header/>
      <div className='serv-title'>
        <h1 className='text-[20px] md:text-[40px]'>Bolps Systems and Technologies ltd</h1>
          <h2 className='text-[20px] md:text-[40px]'>Our Services</h2>
          <hr className='border-none w-[120px] h-[5px] bg-black rounded-[10px] mb-[20px]'/>
          </div>
          <div className=' flex-center h-[500px] bg-orange-50 md:gap-[80px] gap-[50px]'>
            <div><hr className='border-none w-[130px] md:w-[250px] h-[5px] bg-black rounded-[10px] mb-[20px]'/></div>
            <div className='serviceM'>
          <p>Bolps System & Technologies Ltd offers integrated security solutions, including single door access control, swipe cards, networked systems, CCTV cameras, IP digital CCTV networks, fire prevention, and suppression solutions.</p>
            </div>
          </div>

            <SvPrev/>

           <div className=' flex-center h-[500px] bg-orange-50 gap-[80px]'>
            <div className='serviceM'>
              <ul>
          {ServList.map((list) => {
            return <li>{list.item}</li>})}
              
              </ul>
            </div>
            <div><hr className='border-none w-[130px] md:w-[250px] h-[5px] bg-black rounded-[10px] mb-[20px]'/></div>
            
            </div>
      <Footer/>
    </div>
  )
}

export default Services