import './Home.css';
import { useState } from 'react';
import MyCard from './MyCard';

function Home() {

  const cardData = [
    { date: '2024-01-02', price: 10000, ad: false, url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB'},
    { date: '2024-01-01', price: 20000, ad: true, url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB'},
    // ...
  ];
    cardData.sort((a, b) => new Date(a.date) - new Date(b.date));


  const [keyword, setKeyword] = useState('');
  const [minval, setMinval] = useState(0);
  const [maxval, setMaxval] = useState(0);
  const [IncludeAd, setIncludeAd] = useState(true);

  const handleInputKeyword = e => {
    setKeyword(e.target.value);
  }


  const handleIncludeAd = e => {
    setIncludeAd(!IncludeAd);
  }


  const SearchSubmitFunc = e => {
    e.preventDefault();
    console.log(keyword);
    console.log(IncludeAd);
  }
    
  const BarChart = ({ value, max }) => {
  const width = Math.round((value / max) * 100);
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full">
      <div className="h-full text-center text-xs text-white bg-blue-500 rounded-full" style={{ width: `${width}%` }}>
        {value}
      </div>
    </div>
  );
};

    return (
<>
    <nav class="navbar">
        <a class="navbar-brand"><img src={require("./img/logo2.png")} width="50px" height="50"></img></a>
        <ul class ="navbar-nav">
            <li class="nav-item" id="help">Help?</li>
        </ul>
    </nav>
    <div class="container-fulid">
        <div class="jumbotron">
            <img src={require("./img/banner2.JPG")} id="banner" class="img-thumbnail"alt="title" widht="520" height="200"></img>
        </div>
    </div>
       <div class="row">
    <div class="col-lg-8">
        <div class="container">
            <label for="keyword">KeyWord</label>
            <input type="text" class="input"id="keyword" name="keyword" placeholder="키워드를 입력하세요." onChange={handleInputKeyword}></input>
        </div>

        <div class="container">
            <div class="row">
                <div class="col">
                        <div class="form-check-inline">
                        <label class="form-check-label" for="check">
                            <input type="checkbox" class="form-check-input" id="check1" name="vehicle1" value="something" checked={IncludeAd} onChange={handleIncludeAd}/>유료 광고 포함 
                        </label>
                        </div>
                </div>
     
            </div>
        </div>
        <div class="container">
            <button type="button" id="submit" onClick={SearchSubmitFunc}>검색하기</button>  
        </div>
                <div id="select">
            <form action="#">
                <label for="filter">Filter</label>
                <select name="filters" id="filter">
                    <option selected>SELECT</option>
                    <option value="lastest">최신순</option>
                    <option value="view">조회순</option>
                </select>
            </form>
        </div>
        <div class="container">
            <div id="cardslist">
      {cardData.map((data, index) => (
        <MyCard key={index} date={data.date} price={data.price} ad={data.ad} url={data.url}/>
      ))}

            </div>
        </div>
       
    </div>
    <div class="col-lg-4" id="favorites">
        <h2 id="fav"><span><img src={require("./img/fav.png")} id="fav-img" width="30" height="30"></img></span>FAVORITES</h2>
        <div class="alert alert-success">
            <strong>INFO!</strong> 최근에 누른 10개의 즐겨찾기만 보여집니다.
        </div>
        <ul id="fav-list">
            <li class="fav-item">object1</li>
            <li class="fav-item">object2</li>
            <li class="fav-item">object3</li>
            <li class="fav-item">object4</li>
        </ul>
    </div>
    </div>
</>
    )
}

export default Home;