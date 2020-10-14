import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


   function RenderComments({comments})
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
        return(<div className="col-12 col-md-5 m-1"></div>);
      }
    }
   function RenderDish({dish}){
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
            <RenderComments comments={dish.comments}/>
            </div>
          );
        }
        else{
          
          return(<div></div>);
       
        }
      }
     
    
    const DishDetail =(props)=>{
      return(<div className="container">
        <RenderDish dish={ props.dish }/>
        </div>);
}


export default DishDetail;