import React from 'react'
import CopyToClipboardBtn from "./CopyToClipboardBtn"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

export default function previewCodeComponent({
  basicCode,
  theCss,
  img,
  videoUrl,
  selectedColor,
  theHtml,
  preview,
  activeTab,
}) {
  return (
    <>
      {/* The ul represent the tabs */}
      {/* <div className="w-50"> */}
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class={activeTab ? "nav-link" : "nav-link active"}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Preview
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class={activeTab ? "nav-link active" : "nav-link "}
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            HTML
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#css"
            type="button"
            role="tab"
            aria-controls="css"
            aria-selected="false"
          >
            CSS
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#howto"
            type="button"
            role="tab"
            aria-controls="css"
            aria-selected="false"
          >
            How to
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class={activeTab ? "tab-pane fade" : "tab-pane fade show active"}
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {/* <div className="component-example mt-2 mb-5 d-flex justify-center align-center"> */}
          {/* <div className="component-example-img"> */}
          {selectedColor ? (
            <Row>
              <Col md={12}>
                <div
                  dangerouslySetInnerHTML={{ __html: theHtml }}
                  className={selectedColor}
                />
              </Col>
            </Row>
          ) : null}
          {/* <img
                src={img}
                alt="platformable code generator"
                className="img-thumbnail"
              /> */}
          {/* </div> */}
          {/* </div> */}
        </div>

        <div
          class={activeTab ? "tab-pane fade show active" : "tab-pane fade"}
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="d-flex justify-content-between">
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theHtml} />
          </div>
          <pre>{basicCode}</pre>
        </div>

        <div
          class="tab-pane fade"
          id="css"
          role="tabpanel"
          aria-labelledby="css-tab"
        >
          <div className="d-flex justify-content-between">
            <h6 className="">Copy your code:</h6>
            <CopyToClipboardBtn theHtml={theCss} />
          </div>
          <pre style={{ height: "480px" }}>{theCss}</pre>
        </div>
        <div
          class="tab-pane fade"
          id="howto"
          role="tabpanel"
          aria-labelledby="css-tab"
        >
          <div className=" howTo d-flex justify-content-center align-items-center py-5 bg-light my-5 rounded">
            <video className="w-100" width="720" height="480" controls>
              <source src={videoUrl} type="video/mov" />
              <source src={videoUrl} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
