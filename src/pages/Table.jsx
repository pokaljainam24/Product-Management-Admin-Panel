import React from 'react'
import Aside from '../components/Aside'
import Header from '../components/Header'

function Table() {
    return (
        <>
            <div className="wrapper">
                {/* Sidebar */}
                <Aside />
                {/* End Sidebar */}
                <div className="main-panel">
                    <Header />
                    <div className="container">
                        <div className="page-inner">
                            <div className="page-header">
                                <h3 className="fw-bold mb-3">Tables</h3>
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
                                        <a href="#">Tables</a>
                                    </li>
                                    <li className="separator">
                                        <i className="icon-arrow-right" />
                                    </li>
                                    <li className="nav-item">
                                        <a href="#">Basic Tables</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="card-title">Basic Table</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-sub">
                                                This is the basic table view of the ready dashboard :
                                            </div>
                                            <table className="table mt-3">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">First</th>
                                                        <th scope="col">Last</th>
                                                        <th scope="col">Handle</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td colSpan={2}>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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

export default Table