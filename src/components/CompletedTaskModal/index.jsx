import { useTheme } from '../../contexts'

export default function EditTaskModal({open, setEditModal}) {
    const { theme } = useTheme()
    if (!open) return null



    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            <h1>Well Done!<br></br>You earned 10 points for completing that task, keep going, you’ve got this!</h1>
            <button onClick={() => setEditModal(false)}>Close</button>
        </div>
    )
}
