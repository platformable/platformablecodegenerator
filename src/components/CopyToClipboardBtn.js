import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CopyToClipboardBtn({theHtml}) {

  const notify = () => {
    toast.success("Copied to Clipboard !", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

function handleCopy (){
  notify()
  navigator.clipboard.writeText(theHtml)
}

    return (
        <div>
            <div type="button" className="btn btn-light rounded " data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
            <span className="d-inline-block">
                <div
                  className="badge badge-warning block"
                  role="button"
                  onClick={handleCopy}
                >
                  <img src="https://img.icons8.com/small/16/000000/copy-2.png" />
                </div>
                <ToastContainer />
              </span>
            </div>
        </div>
    )
}
