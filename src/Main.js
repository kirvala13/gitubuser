import React, {useEffect, useState} from 'react'
import axios from "axios";
import dark from "./assets/icon-moon.svg"
import light from "./assets/icon-sun.svg"
import searchIcon from "./assets/icon-search.svg"
import location from "./assets/icon-location.svg"
import twitIcon from  "./assets/icon-twitter.svg"
import linkIcon from  "./assets/icon-website.svg"
import  iconCompany from  "./assets/icon-company.svg"
function Main({toggle,theme}) {
    const[getvalue,setGetValue]=useState("")
    const [result,setResult]=useState([])
    const[data,setData]=useState([])
    const getSearchValue=(e)=>{
      setGetValue(e.target.value)
    }

    const getresult=()=>{
        data.map((res)=>{
            if(res.login===getvalue){
                setResult(res)
            }
        })
    }
    useEffect(()=>{
       axios.get("https://api.github.com/users").then((res)=>{
          setData(res.data)
      })

    },[])
console.log(result.followers_url)
  return (
    <div>
    <nav>
      <h2>devfinder</h2>
       <div className='darkLight' onClick={toggle}>
       {theme==="dark"?<span>Light <img src={light}/></span>:<span>Dark <img src={dark}/></span>} 
        </div>
     </nav>
     <div className='search-bar'>
        <div className='search-container'>
         <img src={searchIcon}/>
         <input type="text"
          placeholder='Search GitHub username…'
          onChange={getSearchValue}
          />
        </div>
        <button className='search' onClick={getresult}>Search</button>
     </div>
        { result && <div className='result'>
                <div className='profile-picture'>
                    <img src={result.avatar_url}/>
                </div>
                <div className='info-container'>
                    <div className='personal-info'>
                        <div className='user-name'>
                            <h1>{result.login}</h1>
                            <h4>@{result.login}</h4>
                            <h6 className='bio'>This profile has no bio</h6>
                        </div>
                        <h4 className='joined-data'>Joined 25 Jan 2011</h4>
                    </div>
                    <div className='account-info'>
                        <div className="repos mg">
                            <h4>Repos</h4>
                            <p>{result.repos_url?result.repos_url.length:0}</p>
                        </div>
                        <div className="followers mg">
                            <h4>Followers</h4>
                            <p>{result.followers_url?result.followers_url.length:0}</p>
                        </div>
                        <div className="following mg">
                            <h4>Following</h4>
                            <p>{result.following_url?result.following_url.length:0}</p>
                        </div>
                    </div>
                    <div className="address">
                        <div className="left-side flx-cont">
                            <div className="location">
                                <span><img src={location}/> San Francisco</span>
                            </div>
                            <div className="link">
                                <span><img src={linkIcon}/>http:/soso.ge.com</span>
                            </div>
                        </div>

                        <div className="right-side flx-cont">
                            <div className="twitter">
                                <span><img src={twitIcon}/>name name</span>
                            </div>

                            <div className="company">
                                <span><img src={iconCompany}/>smart</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>}
     </div>
  )
}

export default Main
