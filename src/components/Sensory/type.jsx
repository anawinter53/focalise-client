import { useEffect } from 'react'
import { useTheme } from '../../contexts'
export default function Type({handleType}) {
   const { theme } = useTheme()

   function typeHandler(e){
        e.preventDefault()
        handleType(e.target.name)
   }
  return (
    <div>
         <section id="select-type" style={{height: '100vh'}} className='mt-3 '>
                <div className="d-flex aligns-items-center text-center justify-content-center position-relative">
                    <div className="container text-center shadow p-5 rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.secText, top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                        <h2>What would you like to do?</h2>
                        <div className="row p-5 justify-content-center" style={{}}> 
                            <div className="col-3 m-1" >
                                <button onClick={typeHandler} name='Music' className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Music</button>
                            </div>
                            <div className="col-3 m-1">
                                <button onClick={typeHandler} name='Animals' className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Animal</button>
                            </div>
                            <div className="col-3 m-1">
                                <button onClick={typeHandler} name='Meditation' className='btn w-50' style={{backgroundColor: theme.primColor, color: theme.primText}}>Meditation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
