import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled, { StyledComponent } from 'styled-components';
import GoogleButton from 'components/google-button';
import FacebookButton from 'components/facebook-button';
import { useI18N } from 'store/ducks/language/hooks';

const Container: StyledComponent<'div', HTMLDivElement> = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 120px;
  left: 0;
  right: 0;
  width: 500px;
`;

const ButtonContainer: StyledComponent<'div', HTMLDivElement> = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    text-transform: none;
    margin: 5px;
    * {
      margin: 0 5px;
    }
  }
`;

const ApresentationCard = () => {
  const I18N = useI18N();
  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="jars growning money"
            image="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg"
            title="Finance Photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {I18N.FINANCE.message}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {I18N.FINANCE_DESCRIPTION.message}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonContainer>
            <GoogleButton />
            <FacebookButton />
          </ButtonContainer>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ApresentationCard;
