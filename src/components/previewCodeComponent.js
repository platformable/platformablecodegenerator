import React from 'react'

export default function previewCodeComponent({basicCode,theCss,img}) {
    return (
        <>
            {/* The ul represent the tabs */}
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
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
                class="nav-link"
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
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="component-example mt-2 mb-5 d-flex justify-center align-center">
                <div className="component-example-img">
                  <img src={img} alt="" className="img-thumbnail" />
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <pre>{basicCode}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="css"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
              <pre>{theCss}</pre>
            </div>
            <div
              class="tab-pane fade"
              id="howto"
              role="tabpanel"
              aria-labelledby="css-tab"
            >
                <div className="howTo d-flex justify-content-center align-items-center py-5 bg-light my-5 rounded">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/zd0_S_FPzKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            
          </div>
            
        </>
    )
}
