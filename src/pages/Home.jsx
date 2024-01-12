import './Home.css';

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
    <div class="container">
        <div class="row">
            <div class="col">
                <label for="keyword">KeyWord</label>
                <input type="text" id="keyword" name="keyword" placeholder="키워드를 입력하세요."></input>
            </div>
            <div class="col">
                <form action="#">
                    <label for="filter">Filter</label>
                    <select name="filters" id="filter">
                        <option value="lastest">최신순</option>
                        <option value="view">조회순</option>
                    </select>
                </form>
            </div>
        </div>
    </div>
 <div class="container">
        <form action="/action_page.php">
            <div class="form-check-inline">
              <label class="form-check-label" for="check1">
                <input type="checkbox" class="form-check-input" id="check1" name="vehicle1" value="something" checked />유료 광고 포함 
              </label>
            </div>
          </form>
    </div>
    <div class="container">
        <input type="text" id="min" name="min" placeholder="최소금액을 입력하세요."></input>
        <input type="text" id="max" name="max" placeholder="최대금액을 입력하세요."></input>
    </div>
    <div class="container">
        <button type="button" id="submit">검색하기</button>  
    </div>
    <div class="container">
        <div id="cardslist">
            <h5><mark>List</mark><span class="badge badge-primary" id="date"></span></h5>
            <div class="alert alert-info alert-dismissible">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>INFO!</strong> card 들어가는 공간!
            </div>
        </div>
    </div>
</>
    )
}

export default Home;