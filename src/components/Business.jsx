import {features} from '../constants'
import style, {layout} from '../style'
import  Button from './Button'
import FeedbackCard from './FeedbackCard'

const Business = () =>(
    <section id='features' className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2} >
          You do the business,<br className='sm:block hidden' /> we'll handle the money.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`} >
         With the right credit , you can
         improve your financial life by building
         credit, earning rewards and saving money,
         But with the hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col
       `} >
         {features.map((feature,index) =>(
           FeedbackCard
         ))}
      </div>
    </section>
  )


export default Business
