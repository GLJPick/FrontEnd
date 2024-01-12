import React from 'react';
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.date}</Card.Title>
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
                                    <iframe width="300" height="300" src="https://www.youtube.com/embed/kXHW6vvK3Ek?si=5dXtPrUTg_A13mGB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        </div>   
                        <div class="col">
                            <span class="badge badge-warning">유료</span>
                            <ul class="object-list">
                                <li class="obj-items"></li>
                                <li class="obj-items"></li>
                                <li class="obj-items"></li>
                            </ul>
                        </div> 
                        </div>
                        
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;