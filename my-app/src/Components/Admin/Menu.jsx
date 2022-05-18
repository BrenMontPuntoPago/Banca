import React, { Fragment} from "react";
import { Link} from "react-router-dom";
import "./Menu.css";
import { useData } from "./../../Context/DataContext";



const Menu = () => {
  const {usuario}= useData();

    const GetNombreCompleto=() => usuario[0].name;

    return (
        <Fragment>
            <aside className="w-64" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <h1 className="welcome">Bienvenido {GetNombreCompleto()}
             </h1>

                    <img src="/img/foto.jpeg" alt="foto" />

                    <ul className="space-y-2">
                        <li>
                            <Link to='/transacciones'
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >

                                <span className="transacciones ml-3">Transacciones</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/usuarios'
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >

                                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/cajeros' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">Cajeros</span>
                                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                </span>
                                
                            </Link>
                            <Link to='/login' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                            <span className="flex-1 ml-3 whitespace-nowrap">Cerrar sesión</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </Fragment>
    );
};

export default Menu;
