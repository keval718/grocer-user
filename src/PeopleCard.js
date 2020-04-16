import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let token=sessionStorage.getItem('token')
    let config={
      headers:{
        'x-auth-token':token
      }
    };
    console.log("tpken is here                    "+token)
  }
  render () {
    let { id, name, company, description,url } = this.props.person;
    return (
      <div>
        <Card>
          <CardImg top width="50%" src={url} height="50%" alt="Card image cap" />
          <CardBlock>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company}</CardSubtitle>
            <CardText>{description}</CardText>
            <Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;
