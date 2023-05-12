import { useTheme } from '../../contexts'

export default function CategoryPage({handleTasks, categories}) {
    const { theme } = useTheme()
    function tasksHandler(e){
        e.preventDefault()
        handleTasks(e.target.name)
    }

    return (
    <div>
        <section id="select-task-category" style={{height: '100vh'}}>
            <div className="d-flex aligns-items-center justify-content-center position-relative">
                <div className="container text-center pt-3 shadow rounded position-absolute" style={{backgroundColor: theme.secColor, color: theme.primColor,  top: '50%', left: '50%', transform: `translate(-50%,50%)`}}>
                    <h1>Ready to get started on some tasks?</h1><br/><h4>Choose category</h4>
                    <div className="d-flex justify-content-center py-3" style={{}}>  
                        {categories ? categories.map((category, i) => (
                            <div className="m-1" key={i}>
                            <button onClick={tasksHandler} name={category} className='btn' style={{backgroundColor: theme.primColor, color: theme.primText}}>{category}</button>
                            </div>
                        )) : undefined
                        }   
                    </div>
                </div>            
            </div>
            </section>
    </div>
    )
}

