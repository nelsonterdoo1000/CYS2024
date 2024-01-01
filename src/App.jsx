import { Suspense, lazy } from "react";
const Layout = lazy(() => import("./Layout"))

export default function App() {
    return (
        <Suspense fallback={<div className="containerPro no-gutters notFound animated--grow-in  justify-content-center m-auto mt-5 pt-5">
            <h1 className=" border-bottom-danger text-gray-700 m-auto row ">
                <img src="/cysm.png" className="animated--grow-in pb-3 col-4 m-auto" alt="" />
            </h1>
            <div className={`text-center fs-3 `}></div>
        </div>
        }>
            <Layout />
        </Suspense>
    )
}