import { useTheme } from '../../contexts'
export default function TimeUpModal({ open, children }) {
    const { theme } = useTheme()
    if (!open) return null
    return (
        <div className='position-absolute text-center shadow p-3 rounded position-absolute' style={{backgroundColor: `${theme.primBG}`, color: `${theme.primText}`, top: '50%', left: '50%', transform: `translate(-50%,50%)`, zIndex: 999}}>
            {children}
    </div>
    )
}
