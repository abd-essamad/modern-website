import style from './style'
import {Navbar,
  Billing,Business,Button,CardDeal,Clients,CTA,FeedbackCard,
  Footer,Hero,Stats,Testimonials,GetStarted} from './components'
const App = () =>( 

    <div className="bg-primary w-full overflow-hidden">
     {/* Navbar */}
     <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar/>
      </div>
     </div>
     {/* Hero Section */}
     <div className={`bg-primary  ${style.flexStart}`}>
       <div className={`${style.boxWidth}`}>
        <Hero/>
       </div>
     </div>

     {/* Second Hero Section */}
     <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
       <div className={`${style.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
       </div>
     </div>
    </div>
)


export default App