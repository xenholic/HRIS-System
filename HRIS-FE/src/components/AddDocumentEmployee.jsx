import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { uploadDocumentEmployee } from '../store/actions/actionEmployee'

function AddDocumentEmployee() {

    const dispatch = useDispatch()
    const { navigate } = useNavigate();

    const [documentUpload, setDocumentUpload] = useState([""])
    console.log(documentUpload, "document upload")

    const handleUploadDocument = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < documentUpload.length; i++) {
            console.log(documentUpload[i], "document upload")
            formData.append("files", documentUpload[i]);
            }
            console.log(formData, "form data")
        dispatch(uploadDocumentEmployee(formData))
          .then((response) => {
            if (response.statusText === "OK") {
              swal("Success!", "Upload Document", "success");
              navigate("/employees");
            }
          })
          .catch((error) => {
            console.log(error, "error add employee");
            swal("Error!", "Failed to Add New Employee!", "error");
          });
      };
    return (
        <div>
            <Topbar />
            <Sidebar />
            {/* <!-- Steps --> */}
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="col-xl-12 col-sm-12 col-12 ">
                        <div className="breadcrumb-path mb-4">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Step 2</li>
                            </ul>
                            <h3>Upload Document Employee</h3>
                        </div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <form method='POST' encType="multipart/form-data">
                        {/* <!-- First step --> */}

                        <div className=" py-3">
                            <div className="form-outline mb-4">
                                <input type="file"
                                    onChange={(e) => setDocumentUpload(e.target.files)}
                                    id="nik" className="form-control" required />
                                <label className="form-label" for="stepper-form-first-name">KTP<small className="text-muted">(Kartu Tanda Penduduk)</small></label>
                                <div className="invalid-feedback">invalid</div>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="file" 
                                 onChange={(e) => setDocumentUpload(e.target.files)}
                                id="KK" className="form-control" required />
                                <label className="form-label" for="stepper-form-last-name">KK<small className="text-muted">(Kartu Keluarga)</small></label>
                                <div className="invalid-feedback">invalid</div>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="file" 
                                 onChange={(e) => setDocumentUpload(e.target.files)}
                                id="ijazah" className="form-control" />
                                <label className="form-label" for="stepper-form-last-name">Ijazah<small className="text-muted">(Ijazah Terakhir)</small></label>
                            </div>
                            <div className="form-outline mb-4">
                                <input type="file" 
                                onChange={(e) => setDocumentUpload(e.target.files)}
                                id="dokumen_lain" className="form-control" />
                                <label className="form-label" for="stepper-form-last-name">Dokumen Lain<small className="text-muted">(Dokumen Pendukung Lainnya)</small></label>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Steps --> */}

                    {/* <!-- Buttons --> */}
                    <div className="d-flex justify-content-center px-3">
                        <button 
                        onClick={(e) => {
                            handleUploadDocument(e)
                        }}
                        id="form-example-prev-step" className="btn btn-primary w-100 me-2" type='submit'>Finish</button>
                        {/* <button id="form-example-next-step" className="btn btn-primary w-100"> */}
                            <Link to="/employees" className="btn btn-primary w-100">
                                Back
                            </Link>
                        {/* </button> */}
                    </div>
                    {/* <!-- Buttons --> */}
                </div>
            </div>
        </div>
    )
}

export default AddDocumentEmployee