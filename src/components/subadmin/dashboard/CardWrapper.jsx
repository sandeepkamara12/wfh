import { Plus } from 'lucide-react'

const CardWrapper = (props) => {
    return (
        <div className="dashboard-card-wrapper">
            <div className="dashboard-card-header">
                <div className='flex items-center gap-1'>
                <span className='text-orange'>42</span>
                {props.label}
                </div>
                    <Plus onClick={() => props.handleOpen(props.label)} className="size-5 shrink-0" />
            </div>
            <div className="dashboard-card-content-area">{props.children}</div>
        </div>
    )
}

export default CardWrapper