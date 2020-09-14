import React from "react";
import "./Portfolio.css";
import {makeStyles} from "@material-ui/core";
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import project1 from "../images/interbot.png";
import project2 from "../images/todolist.png";
import project3 from "../images/weatherapp2.png";
import project4 from "../images/portfolio.png";

const useStyles = makeStyles({
    mainContainer: {
        background: "#000",
        height: "100%",
        margin: "5%"
    },
    cardContainer: {
        maxWidth: 300,
        height: 340,
        margin: "3rem",
        margin: "8rem auto"
    },
    buttonContainer: {
        padding: "3.5%"
    },
    singleButtonContainer: {
        paddingTop: "7%",
        paddingLeft: "23.5%"
    }
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 1" height="-100" image={project1}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Interbot
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A chatbot made using vanilla Javascript, HTML and CSS. It aims to teach people about gender inequality, particularly in the music industry.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.buttonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/feminist-chatbot" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="http://www.interbot.glitch.me/" size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
                    {/* Project 2 */}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 2" height="140" image={project2}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    To Do List
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A simple but effective to do list made using ReactJS.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.buttonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/to-do-list" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="https://katiemhughes.github.io/to-do-list/" size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                 {/* Project 3 */}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 3" height="140" image={project3}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A full stack weather app made using Handlebars and Express, fetching data from the OpenWeatherMap API.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.buttonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/onedayweatherapp" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="https://guarded-beach-69505.herokuapp.com/" size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                                 {/* Project 4 */}
                                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 4" height="140" image={project4}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    This website!
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Designed using React, using hooks and Material UI.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.singleButtonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/portfolio-website" size="small" color="primary">
                                    Github source code
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;