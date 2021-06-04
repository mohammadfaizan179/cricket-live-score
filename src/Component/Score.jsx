import React, { Component } from 'react';
import {Card, CardContent, CardActions, Typography, Grid, Box, Button} from "@material-ui/core";
import "../Styles/Score.css";
import vs from "../images/vs.png"
import {withStyles} from "@material-ui/core/styles";
import {getCricketMatchesScore} from "../Services/cricket-api";

const styles = {
    scoreCardHeader: {
        backgroundColor: "#3f51b5",
        display: "flex",
        color: "#fff",
        alignItems: "flex-start",
        padding: "10px"
    },
    timeDate: {
        display: "flex",
        padding: "8px",
    },
    showScore:{
        display: "block",
    }
}

class Score extends Component {
    constructor(props){
        super(props);
        this.state = {
            details : {}
        }
    }
    // componentDidMount(){
    //     getCricketMatchesScore(this.props.match.unique_id).then(data =>{
    //         this.setState({details: this.state.details = data});
    //         console.log("Inside getCricketMatchesScore")
    //         console.log(data)
    //     }).catch(error => console.log(error));
    // }
    getScore(id){
        getCricketMatchesScore(id).then(data =>{
            this.setState({details: this.state.details = data});
            console.log("Inside getCricketMatchesScore")
            console.log(data)
        }).catch(error => console.log(error));
    }
    getScoreString = (score) =>{
        console.log("Happy")
        if(!score) return {}
        let num = score && score.split("/");
        let numid = num && num[1].split("v");
        let ans = {};
        ans.first = num[0] && numid[0]  && num[0].replace(/[^0-9]/g, "") + "/" + numid[0].replace(/[^0-9]/g, "");
        ans.second = num[2] && numid[1]  && numid[1].replace(/[^0-9]/g, "") + "/" + num[2].replace(/[^0-9]/g, "");
        return ans;
    }
    render() {
        let score = this.getScoreString(this.state.details.score);

        return (
            <div className="score_wraper">
            <div className="score_body">
                <Card elevation={10} className="card_wraper">
                        <Box className={this.props.classes.scoreCardHeader}>
                            <Typography>{this.props.match["team-1"]} VS {this.props.match["team-2"]}</Typography>
                            <Button  variant="contained" color="secondary" size="small" style={{marginLeft: "auto"}} onClick={()=> this.getScore(this.props.match.unique_id)} disabled={this.props.match.matchStarted ? false : true}>Get Score</Button>
                        </Box>
                        <CardContent>
                            <Box className={this.props.classes.timeDate}>
                                <Typography>{new Date(this.props.match.dateTimeGMT).toLocaleString()}</Typography>
                                <Typography style={{marginLeft: "auto"}}>{this.props.match.matchStarted ? "Match Started" : "Match not Started"  }</Typography>
                            </Box>
                            <Grid container>
                                <Box className="card_content">
                                    <Grid>
                                        <Typography variant="h5" style={{margin: "32px"}}>{this.props.match["team-1"]}</Typography>
                                        <Typography>{score.first}</Typography>
                                    </Grid>
                                     <Grid>
                                        <img src={vs} alt="verses" width={100} height={100} />
                                     </Grid>
                                     <Grid>
                                        <Typography variant="h5" style={{margin: "32px"}}>{this.props.match["team-2"]}</Typography>
                                        <Typography>{score.second}</Typography>
                                     </Grid>
                                </Box>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justify="center" className={this.props.classes.showScore} >
                            {/* {
                                this.state.details.score 
                                ?<Typography>{this.state.details.score}</Typography>
                                :"Not"
                            }  */}

                                <Typography variant="body2">{this.state.details.score}</Typography>
                                <Typography variant="body2">Limited in Person attendance</Typography>
                            </Grid>
                        </CardActions>
                </Card>
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(Score) 
