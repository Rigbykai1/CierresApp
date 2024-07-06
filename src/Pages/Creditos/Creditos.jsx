import AddCreditForm from './AddCreditForm';

const Creditos = () => {
    return (
        <>
            <div className='flex gap-3 pb-3'>
                <AddCreditForm />
            </div>
            <div className='flex flex-wrap gap-3'>
                <div className="stats bg-black/70 flex flex-col max-w-sm text-white">
                    <div className="stat">
                        <div className="stat-title text-white">cliente</div>
                        <div className="stat-value">Client name</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm btn-error">Add credit</button>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-white">Balance</div>
                        <div className="stat-value">$89,400</div>
                        <div className="stat-actions space-x-1">
                            <button className="btn btn-sm btn-success">Añadir ingreso</button>
                            <button className="btn btn-sm btn-info">Añadir premio</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Creditos