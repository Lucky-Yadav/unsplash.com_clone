import React from "react";
import { Button, Box, InputBase } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { Link } from "react-router-dom"
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from "react-redux";
import Popover from '@mui/material/Popover';
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { isLogin } from "../Redux/action";

export const Navbar1 = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'sticky',
        top:2,
        left:65,
        right:250,
        display:"flex",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.black, 0.05),
        },
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width:'auto',
        [theme.breakpoints.up('xs')]: {
          marginLeft: theme.spacing(3),
          minWidth: '130px',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        color: "#757575",
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('lg')]: {
            width: '510px',
          },
        },
      }));

      const Input = styled('input')({
        display: 'none',
      });





      const { logedIn } = useSelector((state) => state)
      const [payload, setPayload] = React.useState({})
      const navigate = useNavigate()
      const dispatch = useDispatch()

      React.useEffect(() => {
        fetch(`http://localhost:8080/usersData`)
        .then((res) => res.json())
        .then((res) => res.forEach((items) => {
          if(items.token === JSON.parse(localStorage.getItem("AuthToken"))){
            setPayload(items)
          }
        }))
        .catch((err) => console.log(err))
        // eslint-disable-next-line
      },[logedIn])
      
      
      const handleLogout = () => {
        localStorage.setItem("AuthToken","")
        dispatch(isLogin(false))
      }


      const HandleSubmit = () => {
        console.log(document.getElementById("contained-button-file").files)
        // const url = "https://media.istockphoto.com/photos/life-is-a-lot-brighter-with-better-vision-picture-id1305313838"

        // fetch(`https://http://unsplash.com//napi/search/by_image`,{
        //   method:"POST",
        //   body: url,
        //   headers:{
        //     "Content_Type": "application/json"
        //   }
        // })
      }

      const [anchorEl, setAnchorEl] = React.useState(null);
      const [anchorEl2, setAnchorEl2] = React.useState(null);


      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };



      const open2 = Boolean(anchorEl2);
      const id2 = open2 ? 'simple-popover' : undefined;

      const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
      };

      const handleClose2 = () => {
        setAnchorEl2(null);
      };
      const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        noKeyboard: true,
      });
      const [anchorEl3, setAnchorEl3] = React.useState(null);
      const navifn = () => {
        if (acceptedFiles.length !== 0) {
          navigate("/error");
        } else {
          console.log("no");
        }
      };
      const open3 = Boolean(anchorEl3);
      const id3 = open3 ? "simple-popover" : undefined;
      const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
      };
      const handleClose3 = () => {
        setAnchorEl3(null);
      };      

    return (
      <Box
        sx={{
          display: "flex",
          padding: 0.8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          alt="Logo"
          style={{
            position: "sticky",
            width: "55px",
            height: "55px",
            left: 2,
            borderRadius: "100%",
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf31fI-8KqbQk8HKfgCdJTZ_ZpMe1bdtKArA&usqp=CAU"
        />

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search free high-resolution photos" />
          <Button onClick={handleClick3} aria-describedby={id3}>
            <ImageSearchIcon
              className="onHover"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: 1,
              }}
            />
          </Button>
          <Popover
            className={id3}
            open={open3}
            anchorEl={anchorEl3}
            onClose={handleClose3}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 75, left: 280 }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Box
              sx={{
                width: "400px",
                height: "300px",
                padding: 2,
                paddingBottom: 12,
                borderRadius: 4,
              }}
            >
              <p>Visual Search</p>
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px dotted black",
                  height: "250px",
                  padding: "20px",
                }}
                {...getRootProps({ className: "dropzone" })}
              >
                <ImageSearchIcon sx={{ fontSize: "90px" }} />
                <input {...getInputProps()} onInput={navifn()} />
                <h2 style={{ color: "grey" }}>
                  Drag and Drop your image here or browse file to search
                </h2>
              </div>
            </Box>
          </Popover>
        </Search>

        <Box
          className="scroll"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "scroll",
          }}
        >
          <Link to="/advertise" className="onHover responsiveness">
            Advertise
          </Link>
          <Link to="/blog" className="onHover responsiveness">
            Blog
          </Link>
          <Box
            sx={{
              color: "#7e7b7bd5",
              borderLeft: 1,
              marginLeft: "10px",
              marginRight: "10px",
              borderColor: "#7e7b7bd5",
              height: 30,
            }}
          ></Box>
          {logedIn ? null : (
            <>
              <Link to="/login" className="onHover">
                Login
              </Link>
              <p style={{ color: "#757575" }}>/</p>
              <Link to="/signup" className="onHover">
                Signup
              </Link>
            </>
          )}

          <label htmlFor="contained-button-file">
            <Input
              disabled={logedIn ? false : true}
              onChange={HandleSubmit}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              onClick={logedIn ? null : () => navigate("/signup")}
              className="onHover"
              variant="contained"
              component="span"
              size="small"
              color="inherit"
              sx={{
                color: "#757575",
                padding: 1,
                border: 1,
                borderColor: "#757575",
                backgroundColor: "white",
                fontSize: 12,
                boxShadow: "none",
                marginLeft: "20px",
                marginRight: "10px",
              }}
            >
              Submit Photo
            </Button>
          </label>

          {logedIn ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NotificationsIcon
                fontSize="medium"
                className="onHover"
                sx={{ marginLeft: 1 }}
              />
              <Button onClick={handleClick2} aria-describedby={id2}>
                <img
                  className="onHover"
                  alt="ProfilePic"
                  style={{
                    width: "70px",
                    height: "auto",
                    borderRadius: "100%",
                  }}
                  src={payload.profilepic}
                />
              </Button>
              <Popover
                className={id2}
                open={open2}
                anchorEl={anchorEl2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Box sx={{ padding: "4px 20px 10px 4px" }}>
                  <p>
                    <Link className="onHover" to="#">
                      View Profile
                    </Link>
                  </p>
                  <p>
                    <Link className="onHover" to="#">
                      Stats
                    </Link>
                  </p>
                  <p>
                    <Link className="onHover" to="#">
                      Account Settings
                    </Link>
                  </p>
                </Box>
                <hr style={{ marginTop: -3 }} />
                <Button
                  onClick={handleLogout}
                  sx={{ width: "100%", color: "#757575", marginTop: -1 }}
                >
                  Logout {payload.username}
                </Button>
              </Popover>
            </Box>
          ) : null}

          <Toolbar>
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
                aria-describedby={id}
              >
                <MenuIcon />
              </IconButton>
              <Popover
                className={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    padding: "20px 30px 20px 40px",
                    width: "20%",
                  }}
                >
                  <Box sx={{ paddingRight: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: -2,
                      }}
                    >
                      <CorporateFareIcon fontSize={"small"} />
                      <h4 style={{ marginLeft: 6 }}>Company</h4>
                    </Box>
                    <p className="onHover">About</p>
                    <p className="onHover">History</p>
                    <p className="onHover">Join the team</p>
                    <p className="onHover">Press</p>
                    <p className="onHover">Contact Us</p>
                    <p className="onHover">Help Center</p>
                  </Box>
                  <Box sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: -2,
                      }}
                    >
                      <CategoryIcon fontSize={"small"} />
                      <h4 style={{ marginLeft: 6 }}>Product</h4>
                    </Box>
                    <p className="onHover">Developers/Api</p>
                    <p className="onHover">Unsplash Dataset</p>
                    <p className="onHover">Unsplash for iOS</p>
                    <p className="onHover">Apps and Plugins</p>
                  </Box>
                  <Box sx={{ paddingLeft: 3, paddingRight: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: -2,
                      }}
                    >
                      <PeopleIcon fontSize={"small"} />
                      <h4 style={{ marginLeft: 6 }}>Community</h4>
                    </Box>
                    <p className="onHover">Become a Contributor</p>
                    <p className="onHover">Topcis</p>
                    <p className="onHover">Collections</p>
                    <p className="onHover">Trends</p>
                    <p className="onHover">Unsplash Awards</p>
                    <p className="onHover">Stats</p>
                    <Box sx={{ display: "flex" }}>
                      <a href="www.google.com" className="onHover">
                        <TwitterIcon fontSize="small" />
                      </a>
                      <a href="www.google.com" className="onHover">
                        <FacebookIcon fontSize="small" />
                      </a>
                      <a href="www.google.com" className="onHover">
                        <InstagramIcon fontSize="small" />
                      </a>
                    </Box>
                  </Box>
                </Box>
                <hr />
                <Box sx={{ display: "flex", padding: "0px 10px 10px 30px" }}>
                  <p className="onHover">License</p>
                  <p className="onHover">Privacy Policy</p>
                  <p className="onHover">Terms</p>
                  <p className="onHover">Security</p>
                </Box>
              </Popover>
            </Box>
          </Toolbar>
        </Box>
      </Box>
    );
}