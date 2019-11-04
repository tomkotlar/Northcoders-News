import React from "react";
import { Link } from "@reach/router";
import typewriter from "../Img/typewriter.jpg";
import girlLaptop from "../Img/girlLaptop.jpg";
import employee from "../Img/employee.png";
import {
  Image,
  Container,
  Button,
  Grid,
  Modal,
  Header
} from "semantic-ui-react";

export default function Home() {
  return (
    <React.Fragment>
      <Container id="stage">
        <Image
          src={typewriter}
          alt="typewriter / credit: https://unsplash.com/@florianklauer"
          fluid
        />

        <Container id="stage-caption">
          <h1>Northcoders Fresh News</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            unde tenetur dolorum
          </p>

          <Modal trigger={<Button color="violet">Latest Articles</Button>}>
            <Modal.Header>JessJelly</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="medium" src={employee} />
              <Modal.Description>
                <Header>It's Great to having You back! </Header>
                <p>

                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  praesentium maiores quasi soluta quia suscipit rerum quidem
                  fuga repellendus ut esse exercitationem.
                </p>
                <p>Progress to Articles Pages</p>
                <Button inverted color="violet" as={Link} to="articles">
                Articles
                </Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Container>
      </Container>

      <Container style={{ margin: 30 }} id="feature-one" fluid>
        <Grid stackable divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column className="feauture-content">
              <iframe
                width="100%"
                title="northcoders stories"
                height="350"
                src="https://www.youtube.com/embed/aLWK9E8AMJc"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Grid.Column>
            <Grid.Column>
              <h4>Watch this</h4>
              <h2>Feel the vibe of Northcoders Bootcamp </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur assumenda veritatis quasi sunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis, officiis, iusto. Quis, esse ab reiciendis, veritatis
                consequuntur illum eveniet aliquid accusantium distinctio odit
                nobis quidem laboriosam error nihil nulla voluptas.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      {/* <Container fluid style={{ margin: 50 }}> */}
      <Grid stackable className="feature-dark" style={{ padding: 50 }}>
        <Grid.Column width={9}>
          <h4>Build Your Dream</h4>
          <h2>Time built to perfection ...</h2>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            rerum, reiciendis tenetur earum error?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            aut voluptatem ipsa iste consectetur excepturi quod libero hic alias
            magni veritatis tempore ab, voluptatum, placeat. Aut quis, alias!
            Accusamus, reiciendis.
          </p>
        </Grid.Column>
        <Grid.Column width={7}>
          <Image
            src={girlLaptop}
            alt=" girl on Laptop / credit: https://unsplash.com/@chuklanov "
          />
        </Grid.Column>
      </Grid>
      {/* </Container> */}

      
    </React.Fragment>
  );
}
