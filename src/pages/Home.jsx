import './Home.css';
import { useState } from 'react';
import MyCard from './MyCard';
import axios from 'axios';
function Home() {



const [cardData, setcardData] = useState([]);
const [favoriteList, setfavoriteList] = useState([]);
//   const [cardData, setcardData] = useState([
//   {
//     title: "타이틀1",
//     date: '2024-01-06',
//     price: 10000,
//     ad: false,
//     url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB',
//     percent: 60,
//     summary: "인기 동영상 '타이틀1'이 출시되었습니다. 가격은 10,000원이며 광고는 포함되지 않았습니다."
//   },
//   {
//     title: "타이틀2",
//     date: '2024-01-04',
//     price: 20000,
//     ad: true,
//     url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB',
//     percent: 40,
//     summary: "광고가 포함된 '타이틀2'가 출시되었습니다. 가격은 20,000원이며 할인율은 40%입니다."
//   },
//   {
//     title: "타이틀3",
//     date: '2024-01-03',
//     price: 10000,
//     ad: false,
//     url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB',
//     percent: 70,
//     summary: "인기 동영상 '타이틀3'이 출시되었습니다. 가격은 10,000원이며 할인율은 70%입니다."
//   },
//   {
//     title: "타이틀4",
//     date: '2024-01-02',
//     price: 20000,
//     ad: true,
//     url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB',
//     percent: 100,
//     summary: "'타이틀4'는 특별한 이벤트로 인해 100% 할인 중입니다. 지금 확인하세요!"
//   },
//   {
//     title: "타이틀5",
//     date: '2024-01-01',
//     price: 10000,
//     ad: false,
//     url: 'https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB',
//     percent: 20,
//     summary: "인기 동영상 '타이틀5'가 새해를 맞아 20% 할인된 가격에 출시되었습니다."
//   }
// ]
// );

    //cardData.sort((a, b) => new Date(a.date) - new Date(b.date));


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
    let paid;
    if(IncludeAd===true)
    {
        paid = 'true';
    }
    else
    {
        paid = 'any';
    }
    axios.post('https://33808ac7-8579-4330-989f-c8a0aa9c271b.mock.pstmn.io/api/submit', {title: keyword, videoPaidProductPlacement: paid})
    .then(function(response) {
        console.log("Success");
    }).catch(function(error) {
        console.error(error);
    }).then(
        axios.post('https://33808ac7-8579-4330-989f-c8a0aa9c271b.mock.pstmn.io/api/video-result')
        .then(function(response) {
            console.log(response.data);
            setcardData(response.data);
            
        }).catch(function(error) {
            console.error(error);
        })
    )
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
             <pre class="text-danger"> 키워드 뒤에 '리뷰' 또는 ' 리뷰'를 붙인다면 좀 더 정확한 결과를 얻을 수 있습니다!</pre>
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
                        <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>INFO! </strong>여기서 5위까지의 리스트가 제공됩니다!
            </div>
            <div class="alert alert-success alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>INFO! </strong>긍정도(%)= 긍정의 댓글이라고 분석된 댓글 개수 / 총 댓글의 개수 * 100 
            </div>
            <div id="cardslist">
      {cardData.map((data, index) => (
        <>
        <MyCard key={index} title={data.title} date={data.uploadDate} price={data.price} ad={data.ad} url={data.url} percent={data.ratio} summary={data.summary} favoriteList={favoriteList} setfavoriteList={setfavoriteList}/>
        </>
      ))}

            </div>
        </div>
       
    </div>
    <div class="col-lg-4" id="favorites">
        <h2 id="fav"><span><img src={require("./img/fav.png")} id="fav-img" width="30" height="30"></img></span>FAVORITES</h2>
        <div class="alert alert-success">
            <strong>INFO!</strong> 최근에 누른 5개의 즐겨찾기만 보여집니다.
        </div>
        <ul id="fav-list">
                        {favoriteList.map((data) => (
                             <li class="fav-item">{data}</li>
                             
                        ))}

        </ul>
    </div>
    </div>
</>
    )
}

export default Home;