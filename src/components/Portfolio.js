import React from "react";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core";
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import project1 from "../images/rainycityradio.png";
import project2 from "../images/interbot.png";
import project3 from "../images/todolist.png";
import project4 from "../images/weatherapp2.png";
import project5 from "../images/portfolio.png";
import project6 from "../images/vacationdetective.png";

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
    },
    buttonContainer: {
        padding: "6%"
    },
    singleButtonContainer: {
        paddingTop: "7%",
        paddingLeft: "7%"
    },
    portfolioButtonContainer: {
        paddingTop: "7%",
        paddingLeft: "23%"
    },
    interbotButtonContainer: {
        paddingTop: "-7%",
        paddingBottom: "10%",
        paddingLeft: "6%"
    },
    radioCardContent: {
        paddingTop: "15px",
        paddingRight: "16px",
        paddingBottom: "8px",
        paddingLeft: "16px"
    },
    radioSiteButtonContainer: {
        justifyContent: "center",
        paddingTop: "0",
    },
});

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea className={classes.radioWebsiteCTAContainer}>
                            <CardMedia component="img" alt="Project 1" height="-100" image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Rainy City Radio website
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Website I built for a radio station that I co-founded. I used ReactJS for the frontend and I built the radio player using a Linux Server, with AzuraCast broadcasting software.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.radioSiteButtonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/radio-website" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="https://rainycityradio.live/" size="small" color="primary">
                                    Live site
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                {/* Project 2 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 2" height="-100" image={project2}
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
                            <CardActions className={classes.interbotButtonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/feminist-chatbot" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="http://www.interbot.glitch.me/" size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                    {/* Project 3 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 3" height="140" image={project3}

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
                 {/* Project 4 */}
                 <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 4" height="140" image={project4}

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
                        {/* Project 5 */}
                    <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 5" height="140" image={project5}

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
                            <CardActions className={classes.portfolioButtonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/portfolio-website" size="small" color="primary">
                                    Github source code
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                    {/* Project 6 */}
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Project 6" height="140" image={project6}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    The Vacation Detective
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A travel app which makes destination suggestions based on your preferences. Made with the MERN stack.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions className={classes.singleButtonContainer}>
                                <Button target="_blank" href="https://github.com/katiemhughes/thevacationdetective" size="small" color="primary">
                                    Github source code
                                </Button>
                                <Button target="_blank" href="https://thevacationdetective.herokuapp.com/" size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;