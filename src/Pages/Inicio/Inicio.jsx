import React from 'react'
import { GrMoney } from 'react-icons/gr'

const Inicio = () => {
    return (
        <>
            <div className="flex flex-wrap gap-1 justify-center">
                <div className="stat max-w-80 bg-neutral">
                    <div className="stat-figure">
                        <GrMoney className='inline-block h-8 w-8' />
                    </div>
                    <div className="stat-title">Ventas</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat max-w-80 bg-neutral">
                    <div className="stat-figure">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className=" stroke-current te">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Créditos</div>
                    <div className="stat-value">4,200</div>
                </div>

                <div className="stat max-w-80 bg-neutral">
                    <div className="stat-figure">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current te">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Sinpes</div>
                    <div className="stat-value">1,200</div>
                </div>
                <div className="stat max-w-80 bg-neutral">
                    <div className="stat-figure">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current te">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                </div>
                <div className="stat max-w-80 bg-neutral">
                    <div className="stat-figure">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current te">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Comisión</div>
                    <div className="stat-value">31K</div>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Inicio