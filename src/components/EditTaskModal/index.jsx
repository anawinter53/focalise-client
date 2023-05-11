import { useTheme } from '../../contexts'

export default function EditTaskModal({open, setModal}) {
    const { theme } = useTheme()
    if (!open) return null



    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Edit Task</h1>
            <button onClick={() => setModal(false)}>Close</button>
        </div>
    )
}
