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
        >
        <Container id="stage-caption">
          <h1>Welcome to Northcoders, Fresh News</h1>
          <p>Ideas and perspectives you won’t find anywhere else</p>

          <Modal trigger={<Button color="violet">Latest Articles</Button>}>
            <Modal.Header>JessJelly</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="medium" src={employee} />
              <Modal.Description>
                <Header>It's Great to having You back! </Header>
                <p>
                  With the power of the network, different ways to engage with
                  stories, and the ability to follow your favorite topics,
                  writers, and publications, you’re in control of your reading
                  experience.
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
                "It’s such an amazing community that the fear of not fitting in
                just goes. You will fit in no matter who you are. Northcoders
                graduate Nick talks about his time with us before becoming a
                junior developer.
              </p>
              <p>
                The advice given before the course was very helpful. Having
                never worked in the tech industry before, I didn’t know what to
                expect from interviews/opportunities etc. but was given thorough
                advice on the topics
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Grid stackable className="feature-dark" style={{ padding: 50 }}>
        <Grid.Column width={9}>
          <h4>Build Your Dream</h4>
          <h2>How To Be a Great Pair Programmer</h2>
          <p className="lead">
            Often, you develop your hard skills in isolation. You spend hours
            sitting alone, working on projects, and learning more.
          </p>
          <p>
            Becoming a great software or web developer requires both programing
            and soft skills; pure coding skill will only get you so far. If
            you’ve been studying relentlessly, adding to your skills daily, and
            doing everything you can to learn more — yet still not achieving
            that next career step — then it might be your soft skills are to
            blame.
          </p>
        </Grid.Column>
        <Grid.Column width={7}>
          <Image
            src={girlLaptop}
            alt=" girl on Laptop / credit: https://unsplash.com/@chuklanov "
          />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
}
