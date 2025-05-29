import React from 'react'
import Aside from '../components/Aside'
import Header from '../components/Header'

function Form({ handleChange, product, checked, handleSubmit, imgRef, error }) {
    return (
        <>
            <div className="wrapper">
                {/* Sidebar */}
                <Aside />
                {/* End Sidebar */}
                {/*  */}
                <div className="main-panel">
                    <div className="main-header">
                        <div className="main-header-logo">
                            {/* Logo Header */}
                            <div className="logo-header" data-background-color="dark">
                                <a href="../index.html" className="logo">
                                    <img src="../assets/img/kaiadmin/logo_light.svg" alt="navbar brand" className="navbar-brand" />
                                </a>
                                <div className="nav-toggle">
                                    <button className="btn btn-toggle toggle-sidebar">
                                        <i className="gg-menu-right" />
                                    </button>
                                    <button className="btn btn-toggle sidenav-toggler">
                                        <i className="gg-menu-left" />
                                    </button>
                                </div>
                                <button className="topbar-toggler more">
                                    <i className="gg-more-vertical-alt" />
                                </button>
                            </div>
                            {/* End Logo Header */}
                        </div>
                        {/* Navbar Header */}
                        <Header />
                        {/* End Navbar */}
                    </div>
                    <div className="container">
                        <div className="page-inner">
                            <div className="page-header">
                                <h3 className="fw-bold mb-3">Forms</h3>
                                <ul className="breadcrumbs mb-3">
                                    <li className="nav-home">
                                        <a href="#">
                                            <i className="icon-home" />
                                        </a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Forms</a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Basic Form</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <form action="" method="post" onSubmit={handleSubmit}>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-title">Product Form</div>
                                            </div>

                                            {/* Product Name */}
                                            <div className="col-md-6 col-lg-8">
                                                <div className="form-group">
                                                    <label htmlFor="productName">Product Name</label>
                                                    <input type="text" className="form-control" name="name" onChange={handleChange} value={product.name || ""} id="productName" placeholder="Enter Product Name" />
                                                    {error.name && <div className="text-danger">{error.name}</div>}
                                                </div>
                                            </div>

                                            {/* Product Price */}
                                            <div className="col-md-6 col-lg-8">
                                                <div className="form-group">
                                                    <label htmlFor="productPrice">Product Price</label>
                                                    <input type="number" className="form-control" name="price" onChange={handleChange} value={product.price || ""} id="productPrice" placeholder="Enter Product Price" />
                                                    {error.price && <div className="text-danger">{error.price}</div>}
                                                </div>
                                            </div>

                                            {/* Product Stock */}
                                            <div className="col-md-6 col-lg-8">
                                                <div className="form-group">
                                                    <label htmlFor="productStock">Product Stock</label>
                                                    <input type="number" className="form-control" name="stock" onChange={handleChange} value={product.stock || ""} id="productStock" placeholder="Enter Stock Quantity" />
                                                    {error.stock && <div className="text-danger">{error.stock}</div>}
                                                </div>
                                            </div>

                                            {/* Product Image */}
                                            <div className="col-md-6 col-lg-8">
                                                <div className="form-group">
                                                    <label htmlFor="productImage">Product Image</label>
                                                    <input type="file" className="form-control" name="image" onChange={handleChange} id="productImage" ref={imgRef} />
                                                    {error.image && <div className="text-danger">{error.image}</div>}
                                                </div>
                                            </div>
                                            

                                            {/* Description */}
                                            <div className="form-group col-md-8 me-3">
                                                <label htmlFor="productDescription">Product Description</label>
                                                <textarea className="form-control" name="discription" value={product.discription || ""} onChange={handleChange} id="productDescription" rows="5" placeholder="Enter Product Description"></textarea>
                                                {error.discription && <div className="text-danger">{error.discription}</div>}
                                            </div>

                                            {/* Warehouse Checkboxes */}
                                            <div className="form-group col-md-8 ">
                                                <label>Select Warehouses</label> <br />
                                                {error.warehouse && <div className="text-danger">{error.warehouse}</div>}
                                                <div className="form-check-inline">
                                                    <input className="form-check-input me-2" name='warehouse' type="checkbox" checked={product.warehouse?.includes("Navsari")} value="Navsari" onChange={handleChange} />
                                                    <label className="form-check-label" htmlFor="Warehouse">Navsari</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input className="form-check-input me-2" name='warehouse' type="checkbox" checked={product.warehouse?.includes("Surat")} value="Surat" onChange={handleChange} />
                                                    <label className="form-check-label" htmlFor="Warehouse">Surat</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input className="form-check-input me-2" name='warehouse' type="checkbox" checked={product.warehouse?.includes("Ahemdabad")} value="Ahemdabad" onChange={handleChange} />
                                                    <label className="form-check-label" htmlFor="Warehouse">Ahemdabad</label>
                                                </div>
                                                <div className="form-check-inline">
                                                    <input className="form-check-input me-2" name='warehouse' type="checkbox" checked={product.warehouse?.includes("Bardoli")} value="Bardoli" onChange={handleChange} />
                                                    <label className="form-check-label" htmlFor="Warehouse">Bardoli</label>
                                                </div>
                                            </div>


                                            <div className="card-action d-flex gap-2">
                                                <button className="btn btn-success">Submit</button>
                                                <button className="btn btn-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className="container-fluid d-flex justify-content-between">
                            <nav className="pull-left">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://www.themekita.com">
                                            ThemeKita
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> Help </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> Licenses </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright">
                                2024, made with <i className="fa fa-heart heart text-danger" /> by
                                <a href="http://www.themekita.com">ThemeKita</a>
                            </div>
                            <div>
                                Distributed by
                                <a target="_blank" href="https://themewagon.com/">ThemeWagon</a>.
                            </div>
                        </div>
                    </footer>
                </div>
                {/* Custom template | don't include it in your project! */}
                <div className="custom-template">
                    <div className="title">Settings</div>
                    <div className="custom-content">
                        <div className="switcher">
                            <div className="switch-block">
                                <h4>Logo Header</h4>
                                <div className="btnSwitch">
                                    <button type="button" className="selected changeLogoHeaderColor" data-color="dark" />
                                    <button type="button" className="selected changeLogoHeaderColor" data-color="blue" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="purple" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="light-blue" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="green" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="orange" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="red" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="white" />
                                    <br />
                                    <button type="button" className="changeLogoHeaderColor" data-color="dark2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="blue2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="purple2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="light-blue2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="green2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="orange2" />
                                    <button type="button" className="changeLogoHeaderColor" data-color="red2" />
                                </div>
                            </div>
                            <div className="switch-block">
                                <h4>Navbar Header</h4>
                                <div className="btnSwitch">
                                    <button type="button" className="changeTopBarColor" data-color="dark" />
                                    <button type="button" className="changeTopBarColor" data-color="blue" />
                                    <button type="button" className="changeTopBarColor" data-color="purple" />
                                    <button type="button" className="changeTopBarColor" data-color="light-blue" />
                                    <button type="button" className="changeTopBarColor" data-color="green" />
                                    <button type="button" className="changeTopBarColor" data-color="orange" />
                                    <button type="button" className="changeTopBarColor" data-color="red" />
                                    <button type="button" className="changeTopBarColor" data-color="white" />
                                    <br />
                                    <button type="button" className="changeTopBarColor" data-color="dark2" />
                                    <button type="button" className="selected changeTopBarColor" data-color="blue2" />
                                    <button type="button" className="changeTopBarColor" data-color="purple2" />
                                    <button type="button" className="changeTopBarColor" data-color="light-blue2" />
                                    <button type="button" className="changeTopBarColor" data-color="green2" />
                                    <button type="button" className="changeTopBarColor" data-color="orange2" />
                                    <button type="button" className="changeTopBarColor" data-color="red2" />
                                </div>
                            </div>
                            <div className="switch-block">
                                <h4>Sidebar</h4>
                                <div className="btnSwitch">
                                    <button type="button" className="selected changeSideBarColor" data-color="white" />
                                    <button type="button" className="changeSideBarColor" data-color="dark" />
                                    <button type="button" className="changeSideBarColor" data-color="dark2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-toggle">
                        <i className="icon-settings" />
                    </div>
                </div>
                {/* End Custom template */}
            </div>
        </>
    )
}

export default Form
