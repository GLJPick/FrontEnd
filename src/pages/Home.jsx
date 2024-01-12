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
                <input type="checkbox" class="form-check-input" id="check1" name="vehicle1" value="something" checked />Option 1
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label" for="check2">
                <input type="checkbox" class="form-check-input" id="check2" name="vehicle2" value="something" />Option 2
              </label>
            </div>
            <div class="form-check-inline">
                <label class="form-check-label" for="check3">
                  <input type="checkbox" class="form-check-input" id="check3" name="vehicle3" value="something" />Option 3
                </label>
              </div>
            <button type="submit" class="badge badge-light">Submit</button>
          </form>
    </div>
</>
    )
}

export default Home;