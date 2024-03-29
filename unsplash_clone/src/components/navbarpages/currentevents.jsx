var index = 1;
function App() {
  const [images, setImage] = useState([]);
  const [search, setsearch] = useState([]);

  const [images2, setimage2] = React.useState([]);
  const [images3, setimage3] = React.useState([]);
  const [query, setquery] = React.useState(["office"]);
  // const [index, setindex] = React.useState([1]);

  useEffect(() => {
    setImage([]);
    FetchImages();
    // alert("shown")
  }, [query]);

  const FetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
    console.log(index);
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${index}&per_page=10&query=${query}&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setImage([...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 1
        }&per_page=10&query=${query}&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage2([...res.data.results]);
      });
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${
          index + 2
        }&per_page=10&query=${query}&client_id=rCgXNxiP3rG7_bJ_k4zxiVa0PISE5bJlC7JAt0uJRts&count=${count}`
      )
      .then((res) => {
        console.log(res.data);
        setimage3([...res.data.results]);
      });
    index += 3;
  };

  const [ishovering, setishovering] = useState(false);
  const [searchhovering, setsearchhovering] = useState(false);
  const Datashow = styled.div`
    // : gry;
    :hover {
      // background-color: grey;
    }
  `;
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log(e.target.value);
      setquery([`${e.target.value}`]);
      handlesearchleave();
    }
  }
  function handlemouseenter(e) {
    console.log(e);
    setishovering(true);
  }
  function handlemouseleave(e) {
    console.log(e);
    setishovering(false);
  }
  function handlesearchleave(e) {
    console.log(e);
    setsearchhovering(false);
  }
  function handlesearchhovering(e) {
    console.log(e);
    setsearchhovering(true);
  }

  return (
    <>
      <div className="top">
        <div className="top_data">
          <h1>Unsplash</h1>
          <p>The internet’s source of freely-usable images. </p>
          <p> Powered by creators everywhere.</p>

          <div className="search_box">
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              onClick={handlesearchhovering}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <div
              className={` data   ${searchhovering ? "" : "hidden"}`}
              // onMouseLeave={handlesearchleave}
            >
              <div className="mousehover">
                <p>Trending Searches</p>
                <div className="trending_searches">
                  {/* <Link to="/search"> wallpapers </Link> */}
                  <p
                    onClick={() => {
                      setquery(["wallpapers"]);
                      handlesearchleave();
                    }}
                  >
                    wallpapers
                  </p>
                  <p
                    onClick={() => {
                      setquery(["travel"]);
                      handlesearchleave();
                    }}
                  >
                    travel
                  </p>
                  <p
                    onClick={() => {
                      setquery(["home"]);
                      handlesearchleave();
                    }}
                  >
                    home
                  </p>
                  <p
                    onClick={() => {
                      setquery(["stage lights"]);
                      handlesearchleave();
                    }}
                  >
                    stagelights
                  </p>
                  <p
                    onClick={() => {
                      setquery(["yoga"]);
                      handlesearchleave();
                    }}
                  >
                    yoga
                  </p>
                </div>
                <p>Trending Topics</p>
                <div className="trending_topics">
                  <p
                    onClick={() => {
                      setquery(["Wallpapers"]);
                      handlesearchleave();
                    }}
                  >
                    Wallpapers
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Arts & Culture"]);
                      handlesearchleave();
                    }}
                  >
                    Arts & Culture
                  </p>
                  <p
                    onClick={() => {
                      setquery(["3D Renders"]);
                      handlesearchleave();
                    }}
                  >
                    3D Renders
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Architecture"]);
                      handlesearchleave();
                    }}
                  >
                    Architecture
                  </p>
                  <p
                    onClick={() => {
                      setquery(["Textures & Patterns"]);
                      handlesearchleave();
                    }}
                  >
                    Textures & Patterns
                  </p>
                </div>
                {/* <p>Trending Collections</p>
              <div className="trending_collections">
                <p>Light Tones</p>
                <p>Medium frames in interior</p>
                <p>Springs</p>
                <p>MockUps</p>
                <p>Flat Lay Lifestyle</p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={banner} alt="" onClick={handlesearchleave} />
        </div>
        <div className="bottom">
          <div className="first1">
            <p>Photo by Stephan Leonardi</p>
          </div>
          <div className="second2">
            <p>Read more about the Unsplash License</p>
          </div>
          <div className="third_3">
            <div className="third3">
              <img src={squarespace} alt="" />
            </div>
            <p>All you need to create a website</p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="App">
          <Datashow className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <div>
                {images?.map((image) => (
                  <div key={image.id} className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={handlemouseenter}
                      onMouseLeave={handlemouseleave}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${ishovering ? "" : "hidden"} `}
                            >
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </Datashow>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <div>
                {images2?.map((image) => (
                  <div key={image.id} className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={handlemouseenter}
                      onMouseLeave={handlemouseleave}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${ishovering ? "" : "hidden"} `}
                            >
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
          <div className="image_box">
            <InfiniteScroll
              dataLength={images.length}
              next={FetchImages}
              hasMore={true}
              loader={<Loader />}
            >
              <div>
                {images3?.map((image) => (
                  <div key={image.id} className="card">
                    <div
                      key={image.id}
                      className="image_main_div"
                      onMouseEnter={handlemouseenter}
                      onMouseLeave={handlemouseleave}
                    >
                      <div className="imagehover">
                        <div className="top4">
                          <div className="kelbm">
                            <div
                              className={`ppjpj ${ishovering ? "" : "hidden"} `}
                            >
                              <div className="top6">
                                <div className="left_img">
                                  <p></p>
                                </div>
                                <div className="right_img">
                                  <img src={heart} alt="" />

                                  <p>+</p>
                                </div>
                              </div>
                              <div className="bottom4 ">
                                <div className="left-bottom4">
                                  <span className="span2">
                                    <div className="bottom4_img">
                                      <span className="span_jss1">
                                        <img
                                          src={image.user.profile_image.small}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                    <p>{image.user.name}</p>
                                  </span>
                                </div>
                                <div className="right_bottom4">
                                  <a
                                    href={`${image.links.download}&force=true`}
                                    download
                                    target="_blank"
                                  >
                                    <div className="svgjss4">
                                      <svg
                                        width="32"
                                        height="32"
                                        className="c_c7b"
                                        viewBox="0 0 32 32"
                                        version="1.1"
                                        aria-hidden="false"
                                      >
                                        <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="img">
                        <img src={image.urls.regular} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path="/search" element={<Search />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
