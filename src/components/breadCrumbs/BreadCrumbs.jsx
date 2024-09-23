import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumb.scss'

const BreadCrumbs = () => {
    const location = useLocation()
    const pathNames = location.pathname.split('/').filter((x) => x)
    if (location.pathname === '/' || location.pathname === '/about') {
        return null; // Возвращаем null, если путь равен домашней странице или about
    }
    return (
        <nav aria-label='breadcrumb'>
            <ul className="breadcrumb">
                <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                </li>
                {pathNames.map((value, index) => {
                    const to = `/${pathNames.slice(0, index + 1).join('/')}`
                    const isLast = index === pathNames.length - 1

                    return(
                        <li key={to} className={isLast ? 'breadcrumb-item active' : 'breadcrumb-item'}>
                            {isLast ? (
                                <span>{decodeURIComponent(value)}</span>
                            ) : (
                                <Link to={to}>{decodeURIComponent(value)}</Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default BreadCrumbs
