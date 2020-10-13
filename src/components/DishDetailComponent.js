import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    renderComments(comments)
    {
      if(comments!=null){
      const commentList=comments.map((commentDetails)=>{return(
          <ul key={commentDetails.id} className="list-unstyled">
            <li>{commentDetails.comment}</li>
            <li>--{commentDetails.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentDetails.date)))}</li>
          </ul>
         
      );})
      return(
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
              {commentList}
          </div>
      );
      }
      else
      {
        <div className="col-12 col-md-5 m-1"></div>
      }
    }
    renderDish(dish){
        if(dish!=null){
          return(
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            {this.renderComments(dish.comments)}
            </div>
          )
        }
        else{
          
          return(<div className="container"></div>);
       
        }
      }
     
    
    render(){
      return(<div className="container">
        {this.renderDish(this.props.dish)}
        </div>);
}
}

export default DishDetail;