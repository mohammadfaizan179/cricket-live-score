import React, { Component } from 'react';
import {Card, CardContent, Typography, Grid, Box, Button} from "@material-ui/core";
import "../Styles/Score.css";
import vs from "../images/vs.png"
import {withStyles} from "@material-ui/core/styles";

const styles = {
    scoreCardHeader: {
        backgroundColor: "#3f51b5",
        display: "flex",
        color: "#fff",
        alignItems: "flex-start",
        padding: "10px"
    }
}

class Score extends Component {
    render() {
        return (
            <div className="score_wraper">
                <Card elevation={10} className="card_wraper">
                        <Box className={this.props.classes.scoreCardHeader}>
                            <Typography>{this.props.match["team-1"]} VS {this.props.match["team-2"]}</Typography>
                            <Button color="secondary" size="small" style={{marginLeft: "auto", color: "#fff"}}>Get Score</Button>
                        </Box>
                        <CardContent>
                            <Grid container>
                                <Box className="card_content">
                                    <Typography variant="h5" style={{margin: "32px"}}>{this.props.match["team-1"]}</Typography>
                                     <img src={vs} alt="verses" width={100} height={100} style={{border: "2px solid green"}} />
                                    <Typography variant="h5" style={{margin: "32px"}}>{this.props.match["team-2"]}</Typography>
                                </Box>
                            </Grid>
                        </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Score) 
