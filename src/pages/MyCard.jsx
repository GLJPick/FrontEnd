import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';



function MyCard(props) {

  const Bar = styled.div`
  
      width: ${props => props.width || '10'}%;
    height: 30px;
    padding: 0;
    text-align: center;
    background-color: #4F98FF;
    color: #111;
    `;
   
      const handleClick = (title) => {
        if(!props.favoriteList.includes(title))
        {
        props.setfavoriteList([...props.favoriteList, title]);
        
        }
        if(props.favoriteList.length>=6){
          props.favoriteList.shift();
        }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Text>
            {/* <div class="row">
                        <div class="col"></div>
          <iframe width="300" height="300" src="https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                  </div>   

                                  <div class="col">
                            <span class="badge badge-warning">유료</span>
                            <ul class="object-list">
                                <li class="obj-items"></li>
                                <li class="obj-items"></li>
                                <li class="obj-items"></li>
                            </ul>
                        </div>  */}

                        <div class="row">
                        <div class="col">
                                    <iframe width="300" height="300" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>   
                        <div class="col">
                            {props.ad&&<span class="badge badge-warning">유료</span>}
                            <ul class="object-list">
                                <li class="obj-items" onClick={() => handleClick(props.title)}>  {props.title}</li>
                                
                                <li class="obj-items">  {props.date}</li>
                                <li class="obj-items">  {props.summary}</li>
                               

                            </ul>
                            <div class="progress-bar">           
                          <Bar width={props.percent} />

</div>
                        </div> 
                        
                        </div>
                        
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;