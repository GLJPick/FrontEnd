import './Home.css';
import axios from 'axios';

function Home() {
    
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
            <input type="text" class="input"id="keyword" name="keyword" placeholder="키워드를 입력하세요."></input>
        </div>
        <div class="container">
            <label for="value">가격</label>
            <input type="text" class="input"id="min" name="min" placeholder="최소금액을 입력하세요."></input>
            <span id="wave"><b>~</b></span>
            <input type="text" class="input"id="max" name="max" placeholder="최대금액을 입력하세요."></input>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <form action="/action_page.php">
                        <div class="form-check-inline">
                        <label class="form-check-label" for="check">
                            <input type="checkbox" class="form-check-input" id="check1" name="vehicle1" value="something" checked />유료 광고 포함 
                        </label>
                        </div>
                    </form>
                </div>
                <div class="col" id="select">
                    <form action="#">
                        <label for="filter">Filter</label>
                        <select name="filters" id="filter">
                            <option selected>SELECT</option>
                            <option value="lastest">최신순</option>
                            <option value="view">조회순</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
        <div class="container">
            <button type="button" id="submit">검색하기</button>  
        </div>
        <div class="container">
            <div id="cardslist">
                <div class="alert alert-info alert-dismissible">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>INFO!</strong> card 들어가는 공간!
                </div>
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